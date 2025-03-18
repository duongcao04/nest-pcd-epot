import { Injectable } from '@nestjs/common'
import { BaseService } from '@/common/abstractions/base.service'
import { MaterialType } from '../entities/material-type.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class MaterialTypesService extends BaseService<MaterialType> {
    constructor(
        @InjectRepository(MaterialType)
        repository: Repository<MaterialType>,
    ) {
        super(repository)
    }

    async findMaterialsByType(typeId: string) {
        const query = this.repository
            .createQueryBuilder('type')
            .leftJoinAndSelect('type.materials', 'materials')
            .leftJoinAndSelect('materials.images', 'materialImages')
            .leftJoinAndSelect('type.attributes', 'materialAttributes')
            .where('type.id = :typeId', { typeId: typeId })

        return await query.getOne()
    }
}
