import { Document } from 'mongoose';
export interface User extends Document{

   readonly nom:string;
   readonly prenom:string;
   readonly cne:string;
   readonly tel:string;
   readonly dateNaissance:Date;
   readonly adresse:string;
   readonly email:string;
   readonly password:string;
   readonly typeUser:string;
   readonly salaire:number;
   readonly dateEmbouche:Date;
   readonly etat:boolean;
}