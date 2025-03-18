import { forwardRef, Module } from '@nestjs/common'
import { GamesService } from './games.service'
import { GamesController } from './games.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from './entities/game.entity'
import { PrebuiltsModule } from '../prebuilts/prebuilts.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([Game]),
        forwardRef(() => PrebuiltsModule),
    ],
    controllers: [GamesController],
    providers: [GamesService],
    exports: [GamesService],
})
export class GamesModule {}
