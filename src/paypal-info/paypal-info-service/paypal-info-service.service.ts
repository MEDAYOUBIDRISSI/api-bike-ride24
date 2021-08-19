import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { PaypalInfo } from '../interfaces/paypalinfo.interface'
import { CreatePaypalInfoDTO } from '../dto/create-paypalinfo.dto';

@Injectable()
export class PaypalInfoServiceService {

    constructor(@InjectModel('PaypalInfo') private readonly PaypalInfoModel:Model<PaypalInfo>){}

    async getPaypalInfos():Promise<PaypalInfo[]>{
        const PaypalInfos= await this.PaypalInfoModel.find(); 
        return PaypalInfos;
     }

    async createPaypalInfo(CreatePaypalInfoDTO:CreatePaypalInfoDTO):Promise<PaypalInfo>{
        const PaypalInfo = new this.PaypalInfoModel(CreatePaypalInfoDTO);
        return await PaypalInfo.save();
    }
}
