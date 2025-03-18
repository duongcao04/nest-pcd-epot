import { IsNotEmpty, IsString } from 'class-validator'

export class CreateMaterialTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    code: string

    @IsNotEmpty()
    @IsString()
    thumbnail: string
}
