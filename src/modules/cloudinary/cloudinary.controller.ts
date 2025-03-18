import {
    Controller,
    HttpStatus,
    Post,
    Res,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common'
import { CloudinaryService } from './cloudinary.service'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { BaseResponse } from '@/common/dtos/base-response.dto'

@Controller('cloudinary')
export class CloudinaryController {
    constructor(private readonly cloudinaryService: CloudinaryService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
        const image = await this.cloudinaryService.uploadImage(file)

        return new BaseResponse(true, 'Upload image successfully!', image)
    }

    @Post('upload-multiple')
    @UseInterceptors(FilesInterceptor('files'))
    async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
        const uploaded = files.map(
            async (file) => await this.cloudinaryService.uploadImage(file),
        )
        const images = await Promise.all(uploaded)

        return new BaseResponse(true, 'Upload image successfully!', images)
    }
}
