import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Product } from './product.entity'

@Entity('product_details')
export class ProductDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Product, (product) => product.productDetail, {
        cascade: true,
    })
    @JoinColumn()
    product: string

    @Column({ name: 'totalScore', type: 'varchar' })
    totalScore: string

    @Column({ name: 'cpuScore', type: 'varchar' })
    cpuScore: string

    @Column({ name: 'gpuScore', type: 'varchar' })
    gpuScore: string

    @Column({ name: 'diskScore', type: 'varchar' })
    diskScore: string

    @Column({ name: 'memoryScore', type: 'varchar' })
    memoryScore: string

    @Column({ name: 'gpuPower', type: 'varchar' })
    gpuPower: string

    @Column({ name: 'cpuMark1', type: 'varchar' })
    cpuMark1: string

    @Column({ name: 'cpuMark2', type: 'varchar' })
    cpuMark2: string

    @Column({ name: 'gpuMark1', type: 'varchar' })
    gpuMark1: string

    @Column({ name: 'gpuMark2', type: 'varchar' })
    gpuMark2: string

    @Column({ name: 'diskMark', type: 'varchar' })
    diskMark: string
}
