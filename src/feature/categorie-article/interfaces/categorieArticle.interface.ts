import { Document } from 'mongoose';
export interface CategorieArticle extends Document{
    readonly libelle:string;
    readonly description:string;
}