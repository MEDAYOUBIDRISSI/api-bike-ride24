import { Commande } from "src/commande/schemas/commande.schema";
import { Product } from "src/product/schemas/product.schema";

export class CreateLigneCommandetDTO
{

   qte:number;
   readonly product:Product;
   readonly commande:Commande;
}