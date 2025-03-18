import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { BaseEntity } from '@/common/abstractions/base.entity'
import { MaterialType } from './material-type.entity'
import { MaterialAttributeValue } from './material-attribute-values.entity'

@Entity('material_attributes')
export class MaterialAttribute extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string

    @OneToMany(() => MaterialAttributeValue, (mav) => mav.attributeType, {
        cascade: true,
    })
    values: MaterialAttributeValue[]

    @Column()
    isDisplay: boolean

    @Column()
    isSpecification: boolean

    @ManyToOne(() => MaterialType, (mt) => mt.attributes, {
        onDelete: 'CASCADE',
    })
    type: MaterialType
}
