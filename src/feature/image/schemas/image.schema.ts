import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema({ timestamps: true })
export class Image {
  
  @Prop({ default:'null' })
  url: string;
}

const ImageSchema = SchemaFactory.createForClass(Image);

export default ImageSchema;