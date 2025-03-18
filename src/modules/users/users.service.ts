import { ConflictException, Injectable } from '@nestjs/common'
import { BaseService } from '../../common/abstractions/base.service'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BcryptService } from '../auth/services/bcrypt.service'
import { CreateUserDto } from './dto/create-user.dto'
import { generateFromEmail } from 'unique-username-generator'
import { RegisterUserDto } from './dto/register-user.dto'

@Injectable()
export class UsersService extends BaseService<User> {
    private usernameRandomDigit: number
    constructor(
        @InjectRepository(User)
        repository: Repository<User>,
        private readonly bcryptService: BcryptService,
    ) {
        super(repository)
        this.usernameRandomDigit = 5
    }

    override async create(dto: CreateUserDto): Promise<User> {
        // Check if user already exists
        if (await this.isExistUser(dto.email)) {
            throw new ConflictException('User already exist')
        }

        // Create new user instance
        const user = new User()
        // Assign user data
        user.email = dto.email
        user.role = dto.role
        // Hash password
        user.password = await this.bcryptService.hash(dto.password)
        // Generate username if null
        user.username = generateFromEmail(dto.email, this.usernameRandomDigit)
        user.avatar = `https://avatar.iran.liara.run/username?username=${user.username}`

        // Save user into database
        return this.repository.save(user)
    }

    async register(dto: RegisterUserDto): Promise<User> {
        // Check if user already exists
        if (await this.isExistUser(dto.email)) {
            throw new ConflictException('User already exist')
        }

        // Create new user instance
        const user = new User()
        // Assign user data
        user.email = dto.email
        user.role = 'CUSTOMER'
        // Hash password
        user.password = await this.bcryptService.hash(dto.password)
        // Generate username if null
        user.username = generateFromEmail(dto.email, this.usernameRandomDigit)
        user.avatar = `https://avatar.iran.liara.run/username?username=${user.username}`

        // Save user into database
        return this.repository.save(user)
    }

    async isExistUser(email: string): Promise<boolean> {
        return Boolean(await this.repository.findOne({ where: { email } }))
    }
}
