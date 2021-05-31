import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Marque } from '../interfaces/marque.interface'
import { CreateMarqueDTO } from '../dto/create-marque.dto';

@Injectable()
export class MarqueserviceService {

    constructor(@InjectModel('Marque') private readonly marqueModel:Model<Marque>){}

    async getMarques():Promise<Marque[]>{
       const marques= await this.marqueModel.find();
       return marques;
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
