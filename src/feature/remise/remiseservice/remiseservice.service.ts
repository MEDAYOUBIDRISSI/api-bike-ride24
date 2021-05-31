import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Remise } from '../interfaces/remise.interface'
import { CreateRemiseDTO } from '../dto/create-remise.dto';

@Injectable()
export class RemiseserviceService {

    constructor(@InjectModel('Remise') private readonly RemiseModel:Model<Remise>){}

    async getRemises():Promise<Remise[]>{
       const Remises= await this.RemiseModel.find();
       return Remises;
    } 

    async getRemise(RemiseID:string):Promise<Remise>{
        const Remise= await this.RemiseModel.findById(RemiseID);
        return Remise;
     }

    async createRemise(CreateRemiseDTO:CreateRemiseDTO):Promise<Remise>{
        const Remise = new this.RemiseModel(CreateRemiseDTO);
        return await Remise.save();
    }

    async updateRemise(RemiseID:string,CreateRemiseDTO:CreateRemiseDTO){
        const updateRemise = await this.RemiseModel.findByIdAndUpdate(RemiseID,CreateRemiseDTO,
            {new:true});
        return updateRemise;
    }

    async deleteRemise(RemiseID:string){
        const deleteRemise = await this.RemiseModel.findByIdAndRemove(RemiseID);
        return deleteRemise;
    }
}
