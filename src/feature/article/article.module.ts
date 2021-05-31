import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ArticleserviceService } from './articleservice/articleservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  ArticleSchema  from '../article/schema/article.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Article', schema: ArticleSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [ArticleserviceService]
})
export class ArticleModule {}
