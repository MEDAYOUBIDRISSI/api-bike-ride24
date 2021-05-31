import { Document } from 'mongoose';
export interface Categorie extends Document{
    readonly libelle:string;
    readonly description:string;
}