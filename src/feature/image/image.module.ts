import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ImageserviceService } from './imageservice/imageservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  ImageSchema  from '../image/schemas/image.schema'


@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Image', schema: ImageSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [ImageserviceService]
})
export class ImageModule {}
