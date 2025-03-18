import { FindOneOptions, Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class BaseService<T> {
    protected constructor(protected readonly repository: Repository<T>) {}

    async create(entity: Partial<T>): Promise<T> {
        return await this.repository.save(entity as T)
    }

    async findOne(options: FindOneOptions<T>): Promise<T | null> {
        return this.repository.findOne(options)
    }

    async findAll(): Promise<T[]> {
        return this.repository.find()
    }

    async update(
        id: number,
        options: FindOneOptions<T>,
        entity: Partial<T>,
    ): Promise<T | null> {
        await this.repository.update(id, entity as QueryDeepPartialEntity<T>)
        return this.findOne(options)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }
}
