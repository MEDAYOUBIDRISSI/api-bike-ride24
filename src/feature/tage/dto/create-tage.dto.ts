import { Product } from "../../../product/schemas/product.schema"
export class CreateTageDTO
{
   readonly libelle:string;
   readonly product:Product[];
}