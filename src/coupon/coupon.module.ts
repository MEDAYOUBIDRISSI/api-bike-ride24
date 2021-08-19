import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { CouponServiceService } from './coupon-service/coupon-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  CouponSchema  from './schemas/coupon.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Coupon', schema: CouponSchema }]
    )
  ],  
  controllers: [ControllerController],
  providers: [CouponServiceService]
})
export class CouponModule {}
