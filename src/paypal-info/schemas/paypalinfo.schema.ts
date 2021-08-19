import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "src/user/schemas/user.schema";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type PaypalInfoDocument = PaypalInfo & Document;

@Schema({ timestamps: true })
export class PaypalInfo { 

    @Prop({ default:"" })
    payer_id:string;
    @Prop({ default:"" })
    given_name:string;
    @Prop({ default:"" })
    surname:string;
    @Prop({ default:"" })
    email_address:string;
    @Prop({ default:"" })
    address:string[];
    @Prop({ default:"" })
    create_time:string;
    @Prop({ default:"" })
    update_time:string;
    @Prop({ default:"" })
    currency_code:string;
    @Prop({ default:"" })
    value:string;
    @Prop({ default:"" })
    merchant_id:string;
}

const PaypalInfoSchema = SchemaFactory.createForClass(PaypalInfo);

export default PaypalInfoSchema;