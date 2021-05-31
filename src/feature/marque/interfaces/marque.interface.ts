import { Document } from 'mongoose';
export interface Marque extends Document{
    readonly libelle:string;
    readonly description:string;
}