import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "src/user/schemas/user.schema";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CommandeDocument = Commande & Document;

@Schema({ timestamps: true })
export class Commande { 
  

    @Prop({ default:false })
    etat:boolean;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User",autopopulate: { maxDepth: 1 }})
    user:User;
}

const CommandeSchema = SchemaFactory.createForClass(Commande);

export default CommandeSchema;