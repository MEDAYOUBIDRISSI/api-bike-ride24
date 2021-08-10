import { Document } from 'mongoose';

export interface Coupon extends Document{

    readonly libelle?:string
    readonly code?:string
    readonly pourcentage?:number
    readonly etat?:boolean
}