import { NestFactory } from '@nestjs/core'
import {
    ClassSerializerInterceptor,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common'
import * as cookieParser from 'cookie-parser'

import { AppModule } from '@/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    UseInterceptors(ClassSerializerInterceptor)
    app.enableCors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
    )
    app.setGlobalPrefix('api/v1', { exclude: [''] })
    app.use(cookieParser())

    await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
