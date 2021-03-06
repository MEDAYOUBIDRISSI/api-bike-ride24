import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { MarqueserviceService } from './marqueservice/marqueservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  MarqueSchema  from '../marque/schemas/marque.schema'
import  ProductSchema  from '../../product/schemas/product.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Marque', schema: MarqueSchema },{ name: 'Product', schema: ProductSchema}]
    )
  ],
  controllers: [ControllerController],
  providers: [MarqueserviceService]
})
export class MarqueModule {}
