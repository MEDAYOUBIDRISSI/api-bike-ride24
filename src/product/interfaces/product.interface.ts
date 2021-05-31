import { Document } from 'mongoose';
import { Categorie } from "src/feature/categorie/interfaces/categorie.interface";
import { Univer } from "src/feature/univer/schemas/univer.schema";
import { Remise } from "src/feature/remise/schemas/remise.schema";
import { Tage } from "src/feature/tage/schemas/tage.schema";
import { Marque } from "src/feature/marque/schemas/marque.schema";
import { Image } from "src/feature/image/schemas/image.schema";

export interface Product extends Document{
    readonly codeBare:string;
   readonly libelle:string;
   readonly hideline:string;
   readonly description:string;
   readonly prixAchat:number;
   readonly prixVent:number;
   readonly qteStock:number;
   readonly anneModel:string;
   readonly etat:boolean;
   readonly typeProduct:string;
   readonly tailleRue:string;
   readonly nombreDengrenages:string;
   readonly materiau_du_cadre:string;
   readonly materiau_de_lafourche:string;
   readonly freins:string;
   readonly categorie:Categorie;
   readonly Tage:Tage[];
   readonly Remise:Remise;
   readonly Marque:Marque;
   readonly Univer:Univer;
   readonly Image:string[];
}