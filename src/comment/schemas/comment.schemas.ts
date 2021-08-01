import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "src/user/schemas/user.schema";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment { 
  
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User",autopopulate: { maxDepth: 1 }})
    userComment:User;
    @Prop({ default:"" })
    comment:string;
}

const CommentSchema = SchemaFactory.createForClass(Comment);

export default CommentSchema;