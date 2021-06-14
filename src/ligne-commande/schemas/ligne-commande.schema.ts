import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from "src/product/schemas/product.schema";
import { Univer } from "src/feature/univer/schemas/univer.schema";

export type LigneCommandeDocument = LigneCommande & Document;

@Schema({ timestamps: true })
export class LigneCommande {
  
    @Prop({ default:'null' })
    qte: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Product",autopopulate: { maxDepth: 1 }})
    product:Product;

    // @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Univer",autopopulate: { maxDepth: 1 }})
    // Univer:Univer;
}

const LigneCommandeSchema = SchemaFactory.createForClass(LigneCommande);

export default LigneCommandeSchema;