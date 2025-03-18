import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Prebuilt } from '../../prebuilts/entities/prebuilt.entity'

@Entity('tools')
export class Tool {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    thumbnail: string

    @ManyToMany(() => Prebuilt, (prebuilt) => prebuilt.productivity_tools)
    prebuilts: Prebuilt[]
}
