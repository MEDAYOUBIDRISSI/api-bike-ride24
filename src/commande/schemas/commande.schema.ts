import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CommandeDocument = Commande & Document;

@Schema({ timestamps: true })
export class Commande { 
  

    @Prop({ default:true })
    etat:boolean;
}

const CommandeSchema = SchemaFactory.createForClass(Commande);

export default CommandeSchema;