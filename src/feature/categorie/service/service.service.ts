import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Categorie } from '../interfaces/categorie.interface'
import { CreateCategorieDTO } from '../dto/create-categorie.dto';
import { Product } from '../../../product/interfaces/product.interface'


@Injectable()
export class ServiceService {
    constructor(@InjectModel('Categorie') private readonly categorieModel:Model<Categorie>,@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getCategories():Promise<Categorie[]>{
       const categories= await this.categorieModel.find();
       return categories;
    } 

    async getCategoriesOfBike():Promise<any>{
        var categorieOfBike:Categorie[]=[]
        const products= await this.productModel.find({typeProduct:"Bicyclette"}).populate("categorie");

        for(var i = 0; i < products.length; i++)
        {
            var ExisteVerification:boolean=false
            for(var j = 0; j < categorieOfBike.length; j++)
            { 
                if(products[i].categorie == categorieOfBike[j])
                {
                    ExisteVerification=true
                }
            }
            if(ExisteVerification==false)
            {
                categorieOfBike.push(products[i].categorie)
            }
        }
        return categorieOfBike;
    }

    async getCategoriesOfAccessoiresOfBike():Promise<any>{
        var categorieOfBike:Categorie[]=[]
        const products= await this.productModel.find({typeProduct:"AccessoireVelo"}).populate("categorie");

        for(var i = 0; i < products.length; i++)
        {
            var ExisteVerification:boolean=false
            for(var j = 0; j < categorieOfBike.length; j++)
            { 
                if(products[i].categorie == categorieOfBike[j])
                {
                    ExisteVerification=true
                }
            }
            if(ExisteVerification==false)
            {
                categorieOfBike.push(products[i].categorie)
            }
        }
        return categorieOfBike;
    }

    async getCategoriesOfAccessoiresOfBikers():Promise<any>{
        var categorieOfBike:Categorie[]=[]
        const products= await this.productModel.find({typeProduct:"AccessoireCycliste"}).populate("categorie");

        for(var i = 0; i < products.length; i++)
        {
            var ExisteVerification:boolean=false
            for(var j = 0; j < categorieOfBike.length; j++)
            { 
                if(products[i].categorie == categorieOfBike[j])
                {
                    ExisteVerification=true
                }
            }
            if(ExisteVerification==false)
            {
                categorieOfBike.push(products[i].categorie)
            }
        }
        return categorieOfBike;
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
