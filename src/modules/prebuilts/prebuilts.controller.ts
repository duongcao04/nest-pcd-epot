import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { PrebuiltsService } from './prebuilts.service'
import { CreatePrebuiltDto } from './dto/create-prebuilt.dto'
import { UpdatePrebuiltDto } from './dto/update-prebuilt.dto'

@Controller('prebuilts')
export class PrebuiltsController {
    constructor(private readonly prebuiltsService: PrebuiltsService) {}

    @Post()
    create(@Body() createPrebuiltDto: CreatePrebuiltDto) {
        return this.prebuiltsService.create(createPrebuiltDto)
    }

    @Get()
    findAll() {
        return this.prebuiltsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.prebuiltsService.findOne({ where: { id } })
    }
}
