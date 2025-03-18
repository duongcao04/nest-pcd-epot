import {
    forwardRef,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { BaseService } from '../../common/abstractions/base.service'
import { Game } from './entities/game.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateGameDto } from './dto/create-game.dto'
import { PrebuiltsService } from '../prebuilts/prebuilts.service'

@Injectable()
export class GamesService extends BaseService<Game> {
    constructor(
        @InjectRepository(Game)
        repository: Repository<Game>,
        @Inject(forwardRef(() => PrebuiltsService))
        private readonly prebuiltsService: PrebuiltsService,
    ) {
        super(repository)
    }

    override async create(dto: CreateGameDto): Promise<Game> {
        const game = new Game()

        game.name = dto.name
        game.slug = dto.slug
        game.image = dto.imageUrl

        let prebuiltsList = []
        if (dto.prebuiltIds) {
            dto.prebuiltIds.forEach(async (id) => {
                const getPrebuilt = await this.prebuiltsService.findOne({
                    where: { id },
                })
                if (!getPrebuilt) {
                    throw new NotFoundException('Prebuilt not found!')
                }
                prebuiltsList.push(getPrebuilt)
            })
        }
        game.prebuilts = prebuiltsList

        return await this.repository.save(game)
    }
}
