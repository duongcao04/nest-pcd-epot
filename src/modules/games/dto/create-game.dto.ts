import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateGameDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    slug: string

    @IsNotEmpty()
    @IsString()
    imageUrl: string

    @IsOptional()
    prebuiltIds: string[]
}
