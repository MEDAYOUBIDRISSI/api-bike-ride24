import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//import {Entity,Column, PrimaryColumn, ManyToOne,JoinColumn,OneToMany} from "typeorm";
//import { Product } from '../../../product/schemas/product.schema'

export type CategorieDocument = Categorie & Document;

@Schema({ timestamps: true })
export class Categorie {
  
  @Prop({ default:'null' })
  libelle: string;

  @Prop({ default:'null' })
  description: string;

}

const CategorieSchema = SchemaFactory.createForClass(Categorie);

export default CategorieSchema;