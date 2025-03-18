import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Material } from '../../materials/entities/material.entity'
import { Game } from '../../games/entities/game.entity'
import { Tool } from '../../tools/entities/tool.entity'

@Entity('prebuilts')
export class Prebuilt {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'mainTitle', type: 'varchar' })
    mainTitle: string

    @Column({ name: 'computerNo', type: 'varchar' })
    computerNo: string

    @Column({ name: 'originalPrice', type: 'varchar' })
    originalPrice: string

    @Column({ name: 'actualSellingPrice', type: 'varchar' })
    actualSellingPrice: string

    @Column({ name: 'computerIntroduce', type: 'varchar' })
    computerIntroduce: string

    @Column({ name: 'deliveryTimeLimitStr', type: 'varchar' })
    deliveryTimeLimitStr: string

    @Column({ name: 'computerImgs', type: 'varchar' })
    computerImgs: string

    @ManyToMany(() => Material, (material) => material.id)
    materials: Material[]

    @ManyToOne(() => Game, (game) => game.prebuilts, {
        nullable: true,
        onDelete: 'CASCADE',
    })
    game: Game

    @ManyToMany(() => Tool, (tool) => tool.prebuilts)
    @JoinTable({name:'prebuilt_tools'})
    productivity_tools: Tool[]
}
