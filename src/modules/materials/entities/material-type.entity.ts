import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { BaseEntity } from '@/common/abstractions/base.entity'
import { Material } from './material.entity'
import { MaterialAttribute } from './material-attribute.entity'

@Entity('material_types')
export class MaterialType extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    code: string

    @Column({ type: 'text' })
    thumbnail: string

    @OneToMany(() => Material, (material) => material.type)
    materials: Material[]

    @OneToMany(() => MaterialAttribute, (ma) => ma.type, { cascade: true })
    attributes: MaterialAttribute[]
}
