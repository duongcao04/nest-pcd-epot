import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../../users/users.service'
import { User } from '../../users/entities/user.entity'
import { LoginDto } from '../dto/login.dto'
import { BcryptService } from './bcrypt.service'
import { RegisterUserDto } from '../../users/dto/register-user.dto'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly bcryptService: BcryptService,
    ) {}

    async verifyUser(dto: LoginDto): Promise<User> {
        try {
            const user = await this.usersService.findOne({
                where: { email: dto.email },
            })

            const authenticated = await this.bcryptService.compare(
                dto.password,
                user.password,
            )

            if (!authenticated)
                throw new UnauthorizedException('Password is incorrect')

            return user
        } catch (error) {
            throw new UnauthorizedException('Credentials are not valid.')
        }
    }

    async login(dto: LoginDto): Promise<User> {
        return await this.verifyUser(dto)
    }

    async register(dto: RegisterUserDto): Promise<User> {
        return await this.usersService.register(dto)
    }
}
