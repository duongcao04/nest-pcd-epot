import { DataSource, FindOneOptions, Repository } from 'typeorm'
import { EntityTarget } from 'typeorm/common/EntityTarget'

export class GenericRepository<T> extends Repository<T> {
    constructor(target: EntityTarget<T>, dataSource: DataSource) {
        super(target, dataSource.createEntityManager())
    }

    async findActive(options: FindOneOptions<T>): Promise<T[]> {
        return await this.find(options)
    }

    async findByEmail(options: FindOneOptions<T>): Promise<T> {
        return this.findOne(options)
    }
}
