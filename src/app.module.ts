import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategorieModule } from './feature/categorie/categorie.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UniverModule } from './feature/univer/univer.module';
import { MarqueModule } from './feature/marque/marque.module';
import { RemiseModule } from './feature/remise/remise.module';
import { TageModule } from './feature/tage/tage.module';
import { UserModule } from './user/user.module';
import { CategorieArticleModule } from './feature/categorie-article/categorie-article.module';
import { ArticleModule } from './feature/article/article.module';
import { ImageModule } from './feature/image/image.module';

@Module({
  imports: [CategorieModule,MongooseModule.forRoot('mongodb+srv://root:mai2020@cluster0.agexf.mongodb.net/bikeride24?retryWrites=true&w=majority'), ProductModule, UniverModule, MarqueModule, RemiseModule, TageModule, UserModule, CategorieArticleModule, ArticleModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
