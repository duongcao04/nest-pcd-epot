import { PartialType } from '@nestjs/mapped-types';
import { CreatePrebuiltDto } from './create-prebuilt.dto';

export class UpdatePrebuiltDto extends PartialType(CreatePrebuiltDto) {}
