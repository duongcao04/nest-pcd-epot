const streamifier = require('streamifier')
import { Injectable } from '@nestjs/common'
import { v2 as cloudinary, UploadApiOptions } from 'cloudinary'
import { CloudinaryResponse } from './types/cloudinary-response.type'

@Injectable()
export class CloudinaryService {
    async uploadFile(
        file: Express.Multer.File,
        options?: UploadApiOptions,
    ): Promise<CloudinaryResponse> {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                options,
                (error, result) => {
                    if (error) return reject(error)
                    resolve(result)
                },
            )

            streamifier.createReadStream(file.buffer).pipe(uploadStream)
        })
    }

    async uploadImage(
        image: Express.Multer.File,
        options?: UploadApiOptions,
    ): Promise<string> {
        if (!options) {
            options = {}
        }
        if (!options.folder) {
            options.folder = 'PCDepot/temp'
        } else {
            options.folder = 'PCDepot/' + options.folder
        }
        if (!options.public_id) {
            const getCurrentDate = new Date()
                .toISOString()
                .split('T')[0]
                .replaceAll('-', '')
            const getFileName = image.originalname
                .trim()
                .replaceAll(' ', '-')
                .split('.')[0]
                .toLowerCase()

            const publicId = getFileName + '-' + getCurrentDate

            options.public_id = publicId
        }
        if (!options.timestamp) {
            options.timestamp = Date.now()
        }

        return (await this.uploadFile(image, options)).secure_url
    }

    async uploadImages(
        images: Express.Multer.File[],
        options?: UploadApiOptions,
    ): Promise<string[]> {
        const uploader = images.map(async (image) => {
            return (await this.uploadFile(image, options)).secure_url
        })
        const imageUploader = await Promise.all(uploader)
        return imageUploader
    }
}
