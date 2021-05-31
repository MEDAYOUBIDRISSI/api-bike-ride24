import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategorieArticleDocument = CategorieArticle & Document;

@Schema({ timestamps: true })
export class CategorieArticle {
  
  @Prop({ default:'null' })
  libelle: string;

  @Prop({ default:'null' })
  description: string;

}

const CategorieArticleSchema = SchemaFactory.createForClass(CategorieArticle);

export default CategorieArticleSchema;