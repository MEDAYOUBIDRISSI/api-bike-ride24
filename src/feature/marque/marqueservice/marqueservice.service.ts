import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Marque } from '../interfaces/marque.interface'
import { CreateMarqueDTO } from '../dto/create-marque.dto';
import { Product } from '../../../product/interfaces/product.interface'

@Injectable()
export class MarqueserviceService {

    constructor(@InjectModel('Marque') private readonly marqueModel:Model<Marque>,@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getMarques():Promise<Marque[]>{
       const marques= await this.marqueModel.find();
       return marques;
    }

    async getMarquesOfBike():Promise<any>{
        var marqueOfBike:any[]=[]
        const products= await this.productModel.find({typeProduct:"Bicyclette"}).populate("Marque");

        for(var i = 0; i < products.length; i++)
        {
            var ExisteVerification:boolean=false
            for(var j = 0; j < marqueOfBike.length; j++)
            { 
                if(products[i].Marque == marqueOfBike[j])
                {
                    ExisteVerification=true
                }
            }
            if(ExisteVerification==false)
            {
                marqueOfBike.push(products[i].Marque)
            }
        }
        return marqueOfBike;
    }

    async getMarquesOfAccessoires():Promise<any>{
        var MarquesOfAccessoires:any[]=[]
        const products= await this.productModel.find({$or: [{ typeProduct: 'AccessoireVelo' }, { typeProduct: 'AccessoireCycliste' }]}).populate("Marque");

        for(var i = 0; i < products.length; i++)
        {
            var ExisteVerification:boolean=false
            for(var j = 0; j < MarquesOfAccessoires.length; j++)
            { 
                if(products[i].Marque == MarquesOfAccessoires[j])
                {
                    ExisteVerification=true
                }
            }
            if(ExisteVerification==false)
            {
                MarquesOfAccessoires.push(products[i].Marque)
            }
        }
        return MarquesOfAccessoires;
    }

    async getMarque(MarqueID:string):Promise<Marque>{
        const Marque= await this.marqueModel.findById(MarqueID);
        return Marque;
     }

    async createMarque(CreateMarqueDTO:CreateMarqueDTO):Promise<Marque>{
        const Marque = new this.marqueModel(CreateMarqueDTO);
        return await Marque.save();
    }

    async updateMarque(MarqueID:string,CreateMarqueDTO:CreateMarqueDTO){
        const updateMarque = await this.marqueModel.findByIdAndUpdate(MarqueID,CreateMarqueDTO,
            {new:true});
        return updateMarque;
    }

    async deleteMarque(MarqueID:string){
        const deleteMarque = await this.marqueModel.findByIdAndRemove(MarqueID);
        return deleteMarque;
    }
}
