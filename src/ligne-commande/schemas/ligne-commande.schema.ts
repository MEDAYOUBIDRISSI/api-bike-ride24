import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from "src/product/schemas/product.schema";
import { Commande } from "src/commande/schemas/commande.schema";

export type LigneCommandeDocument = LigneCommande & Document;

@Schema({ timestamps: true })
export class LigneCommande {
  
    @Prop({ default:0 })
    qte: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Product",autopopulate: { maxDepth: 1 }})
    product:Product;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Commande",autopopulate: { maxDepth: 1 }})
    commande:Commande;
}

const LigneCommandeSchema = SchemaFactory.createForClass(LigneCommande);

export default LigneCommandeSchema;