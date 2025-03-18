import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '@/common/abstractions/base.entity'

@Entity('images')
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    url: string

    @Column()
    fileName: string

    @Column()
    provider: string
}
