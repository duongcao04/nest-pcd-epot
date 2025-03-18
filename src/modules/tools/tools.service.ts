import { Injectable } from '@nestjs/common'
import { BaseService } from '../../common/abstractions/base.service'
import { Tool } from './entities/tool.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ToolsService extends BaseService<Tool> {
    constructor(
        @InjectRepository(Tool)
        repository: Repository<Tool>,
    ) {
        super(repository)
    }
}
