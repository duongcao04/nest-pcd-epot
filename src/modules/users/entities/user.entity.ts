import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'

import { BaseEntity } from '@/common/abstractions/base.entity'
import { Gender } from '../enums/gender'

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    username: string

    @Column({ type: 'text' })
    email: string

    @Column({ type: 'text' })
    password: string

    @Column({ type: 'text' })
    avatar: string

    @Column({ type: 'text', nullable: true })
    dob: string

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.secret,
    })
    gender: Gender

    @Column({ type: 'text', nullable: true })
    preferredGames: string

    @Column({ type: 'text' })
    role: string
}
