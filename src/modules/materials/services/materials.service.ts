import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '@/common/abstractions/base.service'
import { Material } from '../entities/material.entity'
import { CreateMaterialDto } from '../dto/create-material.dto'
import { MaterialTypesService } from './material-types.service'
import { MaterialImagesService } from './material-images.service'
import { MaterialImage } from '../entities/material-image.entity'

@Injectable()
export class MaterialsService extends BaseService<Material> {
    constructor(
        @InjectRepository(Material)
        repository: Repository<Material>,
        private readonly materialTypesService: MaterialTypesService,
        private readonly materialImagesService: MaterialImagesService,
    ) {
        super(repository)
    }

    override async create(
        createMaterialDto: CreateMaterialDto,
    ): Promise<Material> {
        const material = new Material()

        material.actualSellingPrice = createMaterialDto.actualSellingPrice
        material.erpMaterialNo = createMaterialDto.erpMaterialNo
        material.limitNum = createMaterialDto.limitNum
        material.materialNo = createMaterialDto.materialNo
        material.name = createMaterialDto.name
        material.stockQuantity = createMaterialDto.stockQuantity

        const materialType = await this.materialTypesService.findOne({
            where: { id: createMaterialDto.typeId },
        })
        material.type = materialType

        if (!Array.isArray(createMaterialDto.imageUrls)) {
            throw new Error('imageUrls must be an array')
        }
        const images = await Promise.all(
            createMaterialDto.imageUrls.map(async (imgUrl) => {
                const img = new MaterialImage()
                img.fileName = 'Name'
                img.url = imgUrl
                return await this.materialImagesService.create(img)
            }),
        )
        material.images = images
        material.thumbnail = createMaterialDto.imageUrls[0]

        return await this.repository.save(material)
    }
}
