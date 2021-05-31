import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from "src/user/schemas/user.schema";
import { CategorieArticle } from "src/feature/categorie-article/schemas/categorieArticle.schema";

export type ArticleDocument = Article & Document;

@Schema({ timestamps: true })
export class Article {
  
    @Prop({ default:'null' })
    titre: string;

    @Prop({ default:'null' })
    text: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User",autopopulate: { maxDepth: 1 }})
    author:User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "CategorieArticle",autopopulate: { maxDepth: 1 }})
    categorieArticle:CategorieArticle;
}

const ArticleSchema = SchemaFactory.createForClass(Article);

export default ArticleSchema;