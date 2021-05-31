import { Document } from 'mongoose';
export interface Remise extends Document{
    readonly libelle:string;
    readonly pourcentage:number;
    readonly dateDebut:Date;
    readonly dateFine:Date;
}