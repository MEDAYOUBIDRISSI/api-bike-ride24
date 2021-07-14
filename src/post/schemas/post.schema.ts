import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from "src/user/schemas/user.schema";

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post { 

    @Prop({ default:null })
    typePost: string;

    @Prop({ default:null })
    post:string;

    @Prop({ default:null })
    Images:string[];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User",autopopulate: { maxDepth: 1 }})
    user:User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    usersTag:User[];

    @Prop({
        type:[{ userComment:{type:mongoose.Schema.Types.ObjectId}, comment:{type:String}}]
      })
      comments: { userComment: User, comment: string }[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    reacteds:User[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    affiliateDrivers:User[];
}

const PostSchema = SchemaFactory.createForClass(Post);

export default PostSchema;