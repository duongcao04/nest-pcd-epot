import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { ProductDetail } from './product-detail.entity'

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => ProductDetail, (detail) => detail.product, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    productDetail: string

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
}
