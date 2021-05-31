import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { CategorieArticleserviceService } from './categorie-articleservice/categorie-articleservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  CategorieArticleSchema  from '../categorie-article/schemas/categorieArticle.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'CategorieArticle', schema: CategorieArticleSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [CategorieArticleserviceService]
})
export class CategorieArticleModule {}
