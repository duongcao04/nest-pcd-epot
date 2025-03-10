import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'

import { BaseEntity } from '@/common/abstractions/base.entity'
import { Gender } from '../enums/gender'

@Entity('users')
@Unique(['id', 'username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string

    @Column({ name: 'email', type: 'varchar', unique: true })
    email: string

    @Column({ name: 'password', type: 'varchar' })
    password: string

    @Column({ name: 'avatar', type: 'varchar', length: 255 })
    avatar: string

    @Column({ name: 'dob', type: 'date' })
    dob: string

    @Column({
        name: 'gender',
        type: 'enum',
        enum: Gender,
        default: Gender.secret,
    })
    gender: Gender

    @Column({ name: 'preferredGames', type: 'text' })
    preferredGames: string

    @Column({ name: 'role', type: 'varchar', length: 50 })
    role: string
}
