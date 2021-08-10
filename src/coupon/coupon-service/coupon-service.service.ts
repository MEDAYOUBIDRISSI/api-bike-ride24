import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Coupon } from '../interfaces/coupon.interface'
import { CreateCouponDTO } from '../dto/create-coupon.dto';

@Injectable()
export class CouponServiceService {

    constructor(@InjectModel('Coupon') private readonly couponModel:Model<Coupon>){}

    async getCoupons():Promise<Coupon[]>{
        const coupons= await this.couponModel.find(); 
        return coupons;
     }
 
    async getCoupon(couponID:string):Promise<Coupon>{
        const Coupon= await this.couponModel.findById(couponID);
        return Coupon;
    }

    async getCouponByCodeCoupon(coudeCoupon:string):Promise<Coupon>{
        const Coupon= await this.couponModel.findOne({code:coudeCoupon}); 
        return Coupon;
    }

    async createCoupon(createCouponDTO:CreateCouponDTO):Promise<Coupon>{
        const Coupon = new this.couponModel(createCouponDTO);
        return await Coupon.save();
    }

    async updateCoupon(CouponID:string,createCouponDTO:CreateCouponDTO){
        const updateCoupon = await this.couponModel.findByIdAndUpdate(CouponID,createCouponDTO,
            {new:true});
        return updateCoupon;
    }

    async deleteCoupon(couponID:string){
        const deleteCoupon = await this.couponModel.findByIdAndRemove(couponID);
        return deleteCoupon;
    }
}
