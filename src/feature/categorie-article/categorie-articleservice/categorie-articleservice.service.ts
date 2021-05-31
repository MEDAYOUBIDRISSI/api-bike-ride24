import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CategorieArticle } from '../../categorie-article/interfaces/categorieArticle.interface'
import { CreateCategorieArticleDTO } from '../../categorie-article/dto/create-categorieArticle.dto';

@Injectable()
export class CategorieArticleserviceService {

    constructor(@InjectModel('CategorieArticle') private readonly CategorieArticleModel:Model<CategorieArticle>){}

    async getCategorieArticles():Promise<CategorieArticle[]>{
        const CategorieArticles= await this.CategorieArticleModel.find();
        return CategorieArticles;
     }
 
     async getCategorieArticle(CategorieArticleID:string):Promise<CategorieArticle>{
         const CategorieArticle= await this.CategorieArticleModel.findById(CategorieArticleID);
         return CategorieArticle;
      }

    async createCategorieArticle(CreateCategorieArticleDTO:CreateCategorieArticleDTO):Promise<CategorieArticle>{
        const CategorieArticle = new this.CategorieArticleModel(CreateCategorieArticleDTO);
        return await CategorieArticle.save();
    }

    async updateCategorieArticle(CategorieArticleID:string,CreateCategorieArticleDTO:CreateCategorieArticleDTO){
        const updateCategorieArticle = await this.CategorieArticleModel.findByIdAndUpdate(CategorieArticleID,CreateCategorieArticleDTO,
            {new:true});
        return updateCategorieArticle;
    }

    async deleteCategorieArticle(CategorieArticleID:string){
        const deleteCategorieArticle = await this.CategorieArticleModel.findByIdAndRemove(CategorieArticleID);
        return deleteCategorieArticle;
    }
}
