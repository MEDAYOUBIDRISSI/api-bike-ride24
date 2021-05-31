import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MarqueDocument = Marque & Document;

@Schema({ timestamps: true })
export class Marque {
  
  @Prop({ default:'null' })
  libelle: string;

  @Prop({ default:'null' })
  description: string;

}

const MarqueSchema = SchemaFactory.createForClass(Marque);

export default MarqueSchema;