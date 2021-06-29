import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from "src/user/schemas/user.schema";

export type ChatDocument = Chat & Document;

@Schema({ timestamps: true })
export class Chat {
  
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User",autopopulate: { maxDepth: 1 }})
    fromUser:User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "User",autopopulate: { maxDepth: 1 }})
    toUser:User;

    @Prop({ default:"" })
    message: string;
}

const ChatSchema = SchemaFactory.createForClass(Chat);

export default ChatSchema;