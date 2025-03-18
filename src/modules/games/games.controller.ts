import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { GamesService } from './games.service'
import { CreateGameDto } from './dto/create-game.dto'
import { UpdateGameDto } from './dto/update-game.dto'
import { BaseResponse } from '../../common/dtos/base-response.dto'

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Post()
    async create(@Body() dto: CreateGameDto) {
        const created = await this.gamesService.create(dto)
        return new BaseResponse(true, 'Create game successfully!', created)
    }

    @Get()
    async findAll() {
        const getAll = await this.gamesService.findAll()
        return new BaseResponse(true, 'Get games list successfully!', {
            records: getAll,
        })
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gamesService.findOne({ where: { id } })
    }
}
