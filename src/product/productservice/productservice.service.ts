import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from '../../product/interfaces/product.interface'
import { CreateProductDTO } from '../../product/dto/create-product.dto';

@Injectable()
export class ProductserviceService {
    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getProducts():Promise<Product[]>{
        const products= await this.productModel.find().populate('categorie').populate('Univer').populate('Marque'); 
        return products;
     }
 
     async getProduct(productID:string):Promise<Product>{
         const product= await this.productModel.findById(productID).populate('categorie').populate('Univer').populate('Marque');
         return product;
      }

    async createProduct(createProductDTO:CreateProductDTO):Promise<Product>{
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }

    async updateProduct(ProductID:string,CreateProductDTO:CreateProductDTO){
        const updateProduct = await this.productModel.findByIdAndUpdate(ProductID,CreateProductDTO,
            {new:true});
        return updateProduct;
    }

    async deleteProduct(ProductID:string){
        const deleteProduct = await this.productModel.findByIdAndRemove(ProductID);
        return deleteProduct; 
    }
    //////////////////////////Bicyclette
    async getBicycletteProducts():Promise<Product[]>{
        const products= await this.productModel.find({ typeProduct: "Bicyclette" }).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
     }

    //////////////////////////AccessoireVelo
    async getAccessoireVeloProducts():Promise<Product[]>{
        const products= await this.productModel.find({ typeProduct: "AccessoireVelo" }).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
     }

    //////////////////////////AccessoireVelo
    async getAccessoireCyclisteProducts():Promise<Product[]>{
        const products= await this.productModel.find({ typeProduct: "AccessoireCycliste" }).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
     }

    /////////////////////////Products by Categorie
    async getProductbyCategorie(categorieID:any):Promise<Product[]>{
        const products= await this.productModel.find({categorie:categorieID,typeProduct:"Bicyclette"}).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
    }

    /////////////////////////Products by Univer
    async getProductbyUniver(univerID:any):Promise<Product[]>{
        const products= await this.productModel.find({Univer:univerID,typeProduct:"Bicyclette"}).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
    }

    //////////////////////////AccessoireVeloByCategorie
    async getAccessoireVeloProductsByCategorie(categorieID:any):Promise<Product[]>{
        const products= await this.productModel.find({ categorie:categorieID,typeProduct: "AccessoireVelo" }).populate('Marque').populate('categorie'); 
        return products;
     }

    //////////////////////////AccessoireCyclistByCategorie
    async getAccessoireCyclisteProductsByCategorie(categorieID:any):Promise<Product[]>{
        const products= await this.productModel.find({ categorie:categorieID,typeProduct: "AccessoireCycliste" }).populate('Marque').populate('categorie'); 
        return products;
    }
    /////////////////////////Accessoire by Marque
    async getAccessoirebyMarque(marqueID:any):Promise<Product[]>{
        const products= await this.productModel.find({$or: [{ Marque:marqueID,typeProduct: 'AccessoireVelo' }, { Marque:marqueID,typeProduct: 'AccessoireCycliste' }]}).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
    }
    /////////////////////////Bike by Marque
    async getBikebyMarque(marqueID:any):Promise<Product[]>{
        const products= await this.productModel.find({Marque:marqueID,typeProduct:"Bicyclette"}).populate('categorie').populate('Univer').populate('Marque'); 
        return products;
    }

     /////////////////////////Searche
     async getProductBySearche(MotsCles:any,Type:any):Promise<Product[]>{
        var products:Product[] = []
         if(Type=="Bicyclette" || Type=="AccessoireCycliste" || Type=="AccessoireVelo")
         {
            products= await this.productModel.find({typeProduct:Type,
                                $or: [{ libelle:{ $regex: '.*' + MotsCles + '.*' }},
                                {hideline:{ $regex: '.*' + MotsCles + '.*' }},
                                {description:{ $regex: '.*' + MotsCles + '.*' }}]})
                                .populate('categorie').populate('Univer').populate('Marque');
         }
         else
         {
            products= await this.productModel.find({$or: [{ libelle:{ $regex: '.*' + MotsCles + '.*' }},
                                {hideline:{ $regex: '.*' + MotsCles + '.*' }},
                                {description:{ $regex: '.*' + MotsCles + '.*' }}]})
                                .populate('categorie').populate('Univer').populate('Marque');
         }
         
        return products;
    }
}
