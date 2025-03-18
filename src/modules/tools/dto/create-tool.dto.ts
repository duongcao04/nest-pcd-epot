import { IsNotEmpty, IsString } from 'class-validator'

export class CreateToolDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    thumbnail: string
}
