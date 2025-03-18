import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { MaterialTypesService } from '../services/material-types.service'
import { CreateMaterialTypeDto } from '../dto/create-material-type.dto'
import { BaseResponse } from '../../../common/dtos/base-response.dto'
import { CreateMaterialAttributeDto } from '../dto/create-material-attribute.dto'
import { MaterialAttributesService } from '../services/material-attributes.service'

@Controller('material_types')
export class MaterialTypesController {
    constructor(
        private readonly materialTypesService: MaterialTypesService,
        private readonly materialAttributesService: MaterialAttributesService,
    ) {}

    @Post()
    async create(@Body() createMaterialTypeDto: CreateMaterialTypeDto) {
        return await this.materialTypesService.create(createMaterialTypeDto)
    }

    @Get()
    async findAll() {
        const list = await this.materialTypesService.findAll()
        const count = list.length
        return new BaseResponse(true, 'Get material types successfully!', {
            records: list,
            total: count,
        })
    }

    @Get(':typeId')
    async findMaterialsByType(@Param('typeId') typeId: string) {
        const result =
            await this.materialTypesService.findMaterialsByType(typeId)

        return new BaseResponse(
            true,
            'Get material item of type successfully!',
            result,
        )
    }

    @Post(':typeId/attributes')
    async createAttribute(
        @Param('typeId') typeId: string,
        @Body() dto: CreateMaterialAttributeDto,
    ) {
        const saved = await this.materialAttributesService.createAttribute(
            typeId,
            dto,
        )
        return new BaseResponse(true, 'Get attributes successfully!', saved)
    }

    @Get(':typeId/attributes')
    async getAttributeByType(@Param('typeId') typeId: string) {
        const attributes =
            await this.materialAttributesService.findAttributesByType(typeId)
        return new BaseResponse(true, 'Get attributes successfully!', {
            records: attributes,
        })
    }
}
