import { IsNotEmpty, IsString } from 'class-validator'

export class CreateMaterialAttributeDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    isDisplay: string

    @IsNotEmpty()
    isSpecification: string
}
