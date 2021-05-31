import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Tage } from '../interfaces/tage.interface'
import { CreateTageDTO } from '../dto/create-tage.dto';

@Injectable()
export class TageserviceService {

    constructor(@InjectModel('Tage') private readonly TageModel:Model<Tage>){}

    async getTages():Promise<Tage[]>{
       const Tages= await this.TageModel.find();
       return Tages;
    } 

    async getTage(TageID:string):Promise<Tage>{
        const Tage= await this.TageModel.findById(TageID);
        return Tage;
     }

    async createTage(createTageDTO:CreateTageDTO):Promise<Tage>{
        const Tage = new this.TageModel(createTageDTO);
        return await Tage.save();
    }
 
    async updateTage(TageID:string,createTageDTO:CreateTageDTO){
        const updateTage = await this.TageModel.findByIdAndUpdate(TageID,CreateTageDTO,
            {new:true});
        return updateTage;
    }

    async deleteTage(TageID:string){
        const deleteTage = await this.TageModel.findByIdAndRemove(TageID);
        return deleteTage;
    }
}
