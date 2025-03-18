import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Prebuilt } from '../../prebuilts/entities/prebuilt.entity'

@Entity('games')
export class Game extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    slug: string

    @Column({ type: 'text' })
    image: string

    @OneToMany(() => Prebuilt, (prebuilt) => prebuilt.game, { cascade: true })
    prebuilts: Prebuilt[]
}
