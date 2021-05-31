import { User } from "src/user/schemas/user.schema";
import { CategorieArticle } from "src/feature/categorie-article/schemas/categorieArticle.schema";


export class CreateArticleDTO
{
   readonly titre:string;
   readonly text:string;
   readonly author:User;
   readonly categorieArticle:CategorieArticle;
}