import { Document } from 'mongoose';
import { User } from "src/user/schemas/user.schema";

export interface Comment extends Document{

    readonly userComment?:User;
    readonly comment?:string
}