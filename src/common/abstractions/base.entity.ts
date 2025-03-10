import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
} from 'typeorm'

export abstract class BaseEntity {
    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    @DeleteDateColumn()
    deletedAt: Date
}
