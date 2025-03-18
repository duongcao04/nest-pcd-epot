import { forwardRef, Module } from '@nestjs/common'
import { PrebuiltsService } from './prebuilts.service'
import { PrebuiltsController } from './prebuilts.controller'
import { GamesModule } from '../games/games.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Prebuilt } from './entities/prebuilt.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([Prebuilt]),
        forwardRef(() => GamesModule),
    ],
    controllers: [PrebuiltsController],
    providers: [PrebuiltsService],
    exports: [PrebuiltsService],
})
export class PrebuiltsModule {}
