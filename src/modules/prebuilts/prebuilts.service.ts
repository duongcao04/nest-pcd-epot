import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../../common/abstractions/base.service'
import { Repository } from 'typeorm'
import { Prebuilt } from './entities/prebuilt.entity'

@Injectable()
export class PrebuiltsService extends BaseService<Prebuilt> {
    constructor(
        @InjectRepository(Prebuilt)
        repository: Repository<Prebuilt>,
    ) {
        super(repository)
    }
}
