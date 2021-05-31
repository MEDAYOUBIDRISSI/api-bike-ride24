import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { RemiseserviceService } from './remiseservice/remiseservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  RemiseSchema  from '../remise/schemas/remise.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Remise', schema: RemiseSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [RemiseserviceService]
})
export class RemiseModule {}
