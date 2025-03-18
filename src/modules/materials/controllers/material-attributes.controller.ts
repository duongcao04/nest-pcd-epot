import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { MaterialAttributesService } from '../services/material-attributes.service'
import { BaseResponse } from '../../../common/dtos/base-response.dto'

@Controller('material_attributes')
export class MaterialAttributesController {
    constructor(
        private readonly materialAttributesService: MaterialAttributesService,
    ) {}

    @Get('')
    async findAll() {
        const records = await this.materialAttributesService.findAll()

        return new BaseResponse(true, 'Get attributes list successfully!', {
            records,
        })
    }
}
