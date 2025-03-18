import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { BaseService } from '@/common/abstractions/base.service'
import { InjectRepository } from '@nestjs/typeorm'
import { MaterialAttributeValue } from '../entities/material-attribute-values.entity'

@Injectable()
export class MaterialAttributeValuesService extends BaseService<MaterialAttributeValue> {
    constructor(
        @InjectRepository(MaterialAttributeValue)
        repository: Repository<MaterialAttributeValue>,
    ) {
        super(repository)
    }
}
