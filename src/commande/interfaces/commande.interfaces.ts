import { Document } from 'mongoose';

export interface Commande extends Document{

    readonly etat:boolean;
}