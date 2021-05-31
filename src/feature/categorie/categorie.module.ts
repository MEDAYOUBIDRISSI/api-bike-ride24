import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ServiceService } from './service/service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  CategorieSchema  from '../categorie/schemas/categorie.schema'
 
@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Categorie', schema: CategorieSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [ServiceService]
})
export class CategorieModule {}
