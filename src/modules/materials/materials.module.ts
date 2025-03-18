import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MaterialsService } from './services/materials.service'
import { MaterialsController } from './controllers/materials.controller'
import { Material } from './entities/material.entity'
import { MaterialType } from './entities/material-type.entity'
import { MaterialImage } from './entities/material-image.entity'
import { MaterialTypesService } from './services/material-types.service'
import { MaterialTypesController } from './controllers/material-types.controller'
import { MaterialImagesService } from './services/material-images.service'
import { MaterialAttribute } from './entities/material-attribute.entity'
import { MaterialAttributesService } from './services/material-attributes.service'
import { MaterialAttributeValue } from './entities/material-attribute-values.entity'
import { MaterialAttributeValuesService } from './services/material-attribute-values.service'
import { MaterialAttributesController } from './controllers/material-attributes.controller'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Material,
            MaterialType,
            MaterialImage,
            MaterialAttribute,
            MaterialAttributeValue,
        ]),
    ],
    controllers: [
        MaterialsController,
        MaterialTypesController,
        MaterialAttributesController,
    ],
    providers: [
        MaterialsService,
        MaterialTypesService,
        MaterialImagesService,
        MaterialAttributesService,
        MaterialAttributeValuesService,
    ],
    exports: [MaterialsService],
})
export class MaterialsModule {}
