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
  
    @Prop({ default:'' })
    libelle: string;

    @Prop({ default:'' })
    description: string;

    @Prop({ default:'' })
    codeBare:string;

    @Prop({ default:'' })
    hideline:string;

    @Prop({ default:0 })
    prixAchat:number;

    @Prop({ default:0 })
    prixVent:number;

    @Prop({ default:0 })
    qteStock:number;

    @Prop({ default:'' })
    anneModel:string;

    @Prop({ default:'' })
    etat:boolean;

    @Prop({ default:'' })
    typeProduct:string;

    @Prop({ default:'' })
    tailleRue:string;

    @Prop({ default:'' })
    nombreDengrenages:string;

    @Prop({ default:'' })
    materiau_du_cadre:string;

    @Prop({ default:'' })
    materiau_de_lafourche:string;

    @Prop({ default:'' })
    freins:string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Categorie",autopopulate: { maxDepth: 1 }})
    categorie:Categorie;

    @Prop({ default:'' })
    Tage:string[];

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