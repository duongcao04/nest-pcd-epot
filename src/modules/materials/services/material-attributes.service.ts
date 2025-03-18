import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { BaseService } from '@/common/abstractions/base.service'
import { InjectRepository } from '@nestjs/typeorm'
import { MaterialAttribute } from '../entities/material-attribute.entity'
import { CreateMaterialAttributeDto } from '../dto/create-material-attribute.dto'
import { MaterialTypesService } from './material-types.service'
import { MaterialAttributeValuesService } from './material-attribute-values.service'

@Injectable()
export class MaterialAttributesService extends BaseService<MaterialAttribute> {
    constructor(
        @InjectRepository(MaterialAttribute)
        repository: Repository<MaterialAttribute>,
        private readonly materialTypesService: MaterialTypesService,
        private readonly materialAttributeValuesService: MaterialAttributeValuesService,
    ) {
        super(repository)
    }

    async createAttribute(
        typeId: string,
        dto: CreateMaterialAttributeDto,
    ): Promise<MaterialAttribute> {
        const attribute = new MaterialAttribute()

        attribute.name = dto.name
        attribute.isDisplay = Boolean(dto.isDisplay)
        attribute.isSpecification = Boolean(dto.isSpecification)

        const materialType = await this.materialTypesService.findOne({
            where: { id: typeId },
        })
        attribute.type = materialType

        return await this.repository.save(attribute)
    }

    async findAttributesByType(typeId: string): Promise<MaterialAttribute[]> {
        return await this.repository.find({
            where: { type: { id: typeId } },
        })
    }

    override async findAll(): Promise<MaterialAttribute[]> {
        const queryBuilder = this.repository
            .createQueryBuilder('attributes')
            .leftJoinAndSelect('attributes.type', 'attributesType')
        return await queryBuilder.getMany()
    }
}
