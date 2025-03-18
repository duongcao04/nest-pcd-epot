import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { BaseEntity } from '@/common/abstractions/base.entity'
import { MaterialAttribute } from './material-attribute.entity'

@Entity('material_attribute_values')
export class MaterialAttributeValue extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    value: string

    @Column({ type: 'text', nullable: true })
    optionalValue: string

    @ManyToOne(() => MaterialAttribute, (ma) => ma.values, {
        onDelete: 'CASCADE',
    })
    attributeType: MaterialAttribute
}
