import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { ToolsService } from './tools.service'
import { CreateToolDto } from './dto/create-tool.dto'
import { BaseResponse } from '../../common/dtos/base-response.dto'

@Controller('tools')
export class ToolsController {
    constructor(private readonly toolsService: ToolsService) {}

    @Post()
    async create(@Body() dto: CreateToolDto) {
        const saved = await this.toolsService.create(dto)
        return new BaseResponse(true, 'Create new tool successfully!', saved)
    }

    @Get()
    async findAll() {
        const records = await this.toolsService.findAll()
        return new BaseResponse(true, 'Get tools list successfully!', {
            records,
        })
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.toolsService.findOne({ where: { id } })
    }
}
