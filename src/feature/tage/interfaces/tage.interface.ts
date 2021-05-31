import { Document } from 'mongoose';
import { Product } from "../../../product/interfaces/product.interface"
export interface Tage extends Document{
    readonly libelle:string;
    readonly product:Product[];
}