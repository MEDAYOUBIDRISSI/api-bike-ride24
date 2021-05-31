import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Article } from '../..//article/interfaces/article.interface'
import { CreateArticleDTO } from '../../article/dto/create-article.dto';

@Injectable()
export class ArticleserviceService {

    constructor(@InjectModel('Article') private readonly ArticleModel:Model<Article>){}

    async getArticles():Promise<Article[]>{
        const Articles= await this.ArticleModel.find(); 
        return Articles;
     }
 
     async getArticle(ArticleID:string):Promise<Article>{
         const Article= await this.ArticleModel.findById(ArticleID);
         return Article;
      }
  
    async createArticle(CreateArticleDTO:CreateArticleDTO):Promise<Article>{
        const Article = new this.ArticleModel(CreateArticleDTO);
        return await Article.save();
    }

    async updateArticle(ArticleID:string,CreateArticleDTO:CreateArticleDTO){
        const updateArticle = await this.ArticleModel.findByIdAndUpdate(ArticleID,CreateArticleDTO,
            {new:true});
        return updateArticle;
    }

    async deleteArticle(ArticleID:string){
        const deleteArticle = await this.ArticleModel.findByIdAndRemove(ArticleID);
        return deleteArticle;
    }

    ////////////////

    async getArticleByUser(UserID:string):Promise<Article[]>{
        const Articles= await this.ArticleModel.find().populate({path:"author",select:"nom prenom",where:{'_id':'UserID'}}).populate('categorieArticle'); 
        console.log(UserID)
        return Articles; 
     }
}
