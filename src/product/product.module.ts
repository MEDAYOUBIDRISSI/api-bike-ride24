import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ProductserviceService } from './productservice/productservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  ProductSchema  from '../product/schemas/product.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Product', schema: ProductSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [ProductserviceService]
})
export class ProductModule {}
