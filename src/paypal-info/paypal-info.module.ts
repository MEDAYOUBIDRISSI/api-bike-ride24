import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { PaypalInfoServiceService } from './paypal-info-service/paypal-info-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  PaypalInfoSchema  from './schemas/paypalinfo.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'PaypalInfo', schema: PaypalInfoSchema }]
    )
  ], 
  controllers: [ControllerController],
  providers: [PaypalInfoServiceService]
})
export class PaypalInfoModule {}
