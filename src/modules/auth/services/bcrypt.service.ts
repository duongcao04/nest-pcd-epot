import { Injectable } from '@nestjs/common'
import { compare, genSalt, hash } from 'bcrypt'

@Injectable()
export class BcryptService {
    async hash(data: string): Promise<string> {
        const SALT_ROUNDS = 10
        const salt = await genSalt(SALT_ROUNDS)

        return await hash(data, salt)
    }

    async compare(plainText: string, encrypted: string): Promise<boolean> {
        if (plainText === encrypted) {
            return true
        }

        return await compare(plainText, encrypted)
    }
}
