import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import configuration from '@/config'

import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { MaterialsModule } from './modules/materials/materials.module'
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module'
import { GamesModule } from './modules/games/games.module'
import { ToolsModule } from './modules/tools/tools.module'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            envFilePath: ['.env.development', '.env.production'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) =>
                configService.get('database'),
            inject: [ConfigService],
        }),
        MaterialsModule,
        CloudinaryModule,
        GamesModule,
        ToolsModule,
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
