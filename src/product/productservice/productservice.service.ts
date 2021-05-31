import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from '../../product/interfaces/product.interface'
import { CreateProductDTO } from '../../product/dto/create-product.dto';

@Injectable()
export class ProductserviceService {
    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getProducts():Promise<Product[]>{
        const products= await this.productModel.find(); 
        return products;
     }
 
     async getProduct(productID:string):Promise<Product>{
         const product= await this.productModel.findById(productID);
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
        const products= await this.productModel.find({ typeProduct: "Bicyclette" }); 
        return products;
     }

    //////////////////////////AccessoireVelo
    async getAccessoireVeloProducts():Promise<Product[]>{
        const products= await this.productModel.find({ typeProduct: "AccessoireVelo" }); 
        return products;
     }

    //////////////////////////AccessoireVelo
    async getAccessoireCyclisteProducts():Promise<Product[]>{
        const products= await this.productModel.find({ typeProduct: "AccessoireCycliste" }); 
        return products;
     }
}
