import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  

    @Prop({ default:'null' })
    nom: string;

    @Prop({ default:'null' })
    prenom: string;

    @Prop({ default:'null' })
    cne:string;

    @Prop({ default:'null' })
    tel:string;

    @Prop({ default:Date.now })
    dateNaissance:Date;

    @Prop({ default:'null' })
    adresse:string;

    @Prop({ default:'null' })
    email:string;

    @Prop({ default:'null' })
    password:string;

    @Prop({ default:'null' })
    typeUser:string;

    @Prop({ default: 0.0 })
    salaire:number;

    @Prop({ default:Date.now })
    dateEmbouche:Date; 

    @Prop({ default:true })
    etat:boolean;

    @Prop({ default:'null' })
    imgProfile:string;

}

const UserSchema = SchemaFactory.createForClass(User);

export default UserSchema;