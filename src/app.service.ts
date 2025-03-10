import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    getHello(): string {
        const author = JSON.stringify({
            message:
                'Welcome to Yangis Shop RESTful API. You can read the documentation at README.md',
            website: 'https://yangis.dev',
            author: 'Cao Hai Duong',
            email: 'caohaiduong04@gmail.com',
            github: 'https://github.com/haiduongg',
        })
        return author
    }
}
