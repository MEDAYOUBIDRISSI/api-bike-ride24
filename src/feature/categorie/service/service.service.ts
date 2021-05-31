import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Categorie } from '../interfaces/categorie.interface'
import { CreateCategorieDTO } from '../dto/create-categorie.dto';


@Injectable()
export class ServiceService {
    constructor(@InjectModel('Categorie') private readonly categorieModel:Model<Categorie>){}

    async getCategories():Promise<Categorie[]>{
       const categories= await this.categorieModel.find();
       return categories;
    } 

    async getCategorie(CategorieID:string):Promise<Categorie>{
        const categorie= await this.categorieModel.findById(CategorieID);
        return categorie;
     }

    async createCategorie(createCategorieDTO:CreateCategorieDTO):Promise<Categorie>{
        const categorie = new this.categorieModel(createCategorieDTO);
        return await categorie.save();
    }
 
    async updateCategorie(CategorieID:string,createCategorieDTO:CreateCategorieDTO){
        const updatecategorie = await this.categorieModel.findByIdAndUpdate(CategorieID,createCategorieDTO,
            {new:true});
        return updatecategorie;
    }

    async deleteCategorie(CategorieID:string){
        const deletecategorie = await this.categorieModel.findByIdAndRemove(CategorieID);
        return deletecategorie;
    }
}
