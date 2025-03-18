import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateMaterialDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    typeId: string

    @IsNotEmpty()
    @IsString()
    erpMaterialNo: string

    @IsNotEmpty()
    @IsNumber()
    actualSellingPrice: number

    @IsNotEmpty()
    imageUrls: string[]

    @IsNotEmpty()
    @IsString()
    materialNo: string

    @IsNotEmpty()
    @IsNumber()
    limitNum: number

    @IsNotEmpty()
    @IsNumber()
    stockQuantity: number
}
