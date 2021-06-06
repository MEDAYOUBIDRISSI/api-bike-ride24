import { Document } from 'mongoose';
export interface User extends Document{

   nom?:string;
   prenom?:string;
   cne?:string;
   tel?:string;
   dateNaissance?:Date;
   adresse?:string;
   email?:string;
   password?:string;
   typeUser?:string;
   salaire?:number;
   dateEmbouche?:Date;
   etat?:boolean;
   imgProfile?:string;
}