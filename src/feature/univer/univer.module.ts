import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { UniverserviceService } from './universervice/universervice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  UniverSchema  from '../univer/schemas/univer.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Univer', schema: UniverSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [UniverserviceService]
})
export class UniverModule {}
