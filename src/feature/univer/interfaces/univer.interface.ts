import { Document } from 'mongoose';
export interface Univer extends Document{
    readonly libelle:string;
    readonly description:string;
}