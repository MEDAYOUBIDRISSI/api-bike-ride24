import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from "../../../product/schemas/product.schema"

export type TageDocument = Tage & Document;

@Schema({ timestamps: true })
export class Tage {
  
  @Prop({ default:'null' })
  libelle: string;

  @Prop([{type: mongoose.Schema.Types.ObjectId, ref: "Product"}])
  product: Product[];
}

const TageSchema = SchemaFactory.createForClass(Tage);

export default TageSchema;