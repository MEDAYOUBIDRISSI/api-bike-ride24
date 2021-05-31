import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Univer } from '../interfaces/univer.interface'
import { CreateUniverDTO } from '../dto/create-univer.dto';

@Injectable()
export class UniverserviceService {

    constructor(@InjectModel('Univer') private readonly univerModel:Model<Univer>){}

    async getUnivers():Promise<Univer[]>{
       const univers= await this.univerModel.find();
       return univers;
    }

    async getUniver(UniverID:string):Promise<Univer>{
        const Univer= await this.univerModel.findById(UniverID);
        return Univer;
     }

    async createUniver(CreateUniverDTO:CreateUniverDTO):Promise<Univer>{
        const Univer = new this.univerModel(CreateUniverDTO);
        return await Univer.save();
    }

    async updateUniver(UniverID:string,CreateUniverDTO:CreateUniverDTO){
        const updateUniver = await this.univerModel.findByIdAndUpdate(UniverID,CreateUniverDTO,
            {new:true});
        return updateUniver;
    }

    async deleteUniver(UniverID:string){
        const deleteUniver = await this.univerModel.findByIdAndRemove(UniverID);
        return deleteUniver;
    }

}
