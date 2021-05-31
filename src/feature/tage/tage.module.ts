import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { TageserviceService } from './tageservice/tageservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  TageSchema  from '../tage/schemas/tage.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Tage', schema: TageSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [TageserviceService]
})
export class TageModule {}
