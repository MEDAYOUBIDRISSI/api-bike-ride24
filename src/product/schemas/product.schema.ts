import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Categorie } from "src/feature/categorie/schemas/categorie.schema";
import { Univer } from "src/feature/univer/schemas/univer.schema";
import { Remise } from "src/feature/remise/schemas/remise.schema";
import { Tage } from "src/feature/tage/schemas/tage.schema";
import { Marque } from "src/feature/marque/schemas/marque.schema";
import { Image } from "src/feature/image/schemas/image.schema";

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  
    @Prop({ default:'null' })
    libelle: string;

    @Prop({ default:'null' })
    description: string;

    @Prop({ default:'null' })
    codeBare:string;

    @Prop({ default:'null' })
    hideline:string;

    @Prop({ default:'null' })
    prixAchat:number;

    @Prop({ default:'null' })
    prixVent:number;

    @Prop({ default:'null' })
    qteStock:number;

    @Prop({ default:'null' })
    anneModel:string;

    @Prop({ default:'null' })
    etat:boolean;

    @Prop({ default:'null' })
    typeProduct:string;

    @Prop({ default:'null' })
    tailleRue:string;

    @Prop({ default:'null' })
    nombreDengrenages:string;

    @Prop({ default:'null' })
    materiau_du_cadre:string;

    @Prop({ default:'null' })
    materiau_de_lafourche:string;

    @Prop({ default:'null' })
    freins:string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Categorie",autopopulate: { maxDepth: 1 }})
    categorie:Categorie;

    @Prop([{type: mongoose.Schema.Types.ObjectId, ref: "Tage",autopopulate: { maxDepth: 1 }}])
    Tage:Tage[];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Remise",autopopulate: { maxDepth: 1 }})
    Remise:Remise;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Marque",autopopulate: { maxDepth: 1 }})
    Marque:Marque;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Univer",autopopulate: { maxDepth: 1 }})
    Univer:Univer;

    @Prop({ default:'null' })
    Image:string[];
}

const ProductSchema = SchemaFactory.createForClass(Product);

export default ProductSchema;