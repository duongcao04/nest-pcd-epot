import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '@/common/abstractions/base.entity'
import { Material } from './material.entity'

@Entity('material_images')
export class MaterialImage extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    url: string

    @Column({ type: 'text' })
    fileName: string

    @ManyToOne(() => Material, (material) => material.images, {
        onDelete: 'CASCADE',
    })
    material: Material
}
