import { JwtModuleOptions } from '@nestjs/jwt'
import { dbConfig } from './database.config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { jwtConfig } from './jwt.config'

interface iConfig {
    node_env: string
    app_url: string
    port: number
    database: MysqlConnectionOptions
    jwt: JwtModuleOptions
    // mailer: MailerOptions
    // cloudinary: ConfigOptions
}

export default (): Partial<iConfig> => ({
    node_env: process.env.NODE_ENV || 'development',
    app_url: process.env.APP_URL,
    port: parseInt(process.env.PORT, 10) || 3000,
    database: dbConfig(),
    jwt: jwtConfig(),
})
