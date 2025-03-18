import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { BaseEntity } from '@/common/abstractions/base.entity'
import { MaterialImage } from './material-image.entity'
import { MaterialType } from './material-type.entity'

@Entity('materials')
export class Material extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string

    @ManyToOne(() => MaterialType, (mt) => mt.materials)
    type: MaterialType

    @Column({ type: 'text' })
    erpMaterialNo: string

    @Column({ type: 'int' })
    actualSellingPrice: number

    @Column({ type: 'text' })
    thumbnail: string

    @OneToMany(() => MaterialImage, (mi) => mi.material, { cascade: true })
    images: MaterialImage[]

    @Column({ type: 'text' })
    materialNo: string

    @Column({ type: 'text' })
    limitNum: number

    @Column({ type: 'text' })
    stockQuantity: number
}
