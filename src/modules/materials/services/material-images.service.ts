import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { BaseService } from '@/common/abstractions/base.service'
import { InjectRepository } from '@nestjs/typeorm'
import { MaterialImage } from '../entities/material-image.entity'

@Injectable()
export class MaterialImagesService extends BaseService<MaterialImage> {
    constructor(
        @InjectRepository(MaterialImage)
        repository: Repository<MaterialImage>,
    ) {
        super(repository)
    }
}
