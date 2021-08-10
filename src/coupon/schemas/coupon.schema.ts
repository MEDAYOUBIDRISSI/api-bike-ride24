import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CouponDocument = Coupon & Document;

@Schema({ timestamps: true })
export class Coupon { 

    @Prop({ default:"" })
    libelle:string;

    @Prop({ default:"" })
    code:string;

    @Prop({ default:0 })
    pourcentage:number;

    @Prop({ default:true })
    etat:boolean;
}

const CouponSchema = SchemaFactory.createForClass(Coupon);

export default CouponSchema;