import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UniverDocument = Univer & Document;

@Schema({ timestamps: true })
export class Univer {
  
  @Prop({ default:'null' })
  libelle: string;

  @Prop({ default:'null' })
  description: string;

}

const UniverSchema = SchemaFactory.createForClass(Univer);

export default UniverSchema;