import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
} from '@nestjs/common'
import { AuthService } from './services/auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterUserDto } from '../users/dto/register-user.dto'
import { BaseResponse } from '../../common/dtos/base-response.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() dto: LoginDto) {
        const logined = await this.authService.login(dto)
        return new BaseResponse(true, 'Login successfully!', logined)
    }

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() dto: RegisterUserDto) {
        const registered = await this.authService.register(dto)
        return new BaseResponse(
            true,
            'Register new account successfully!',
            registered,
        )
    }
}
