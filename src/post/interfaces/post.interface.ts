import { User } from "src/user/schemas/user.schema";

export interface Post extends Document{

    typePost:string;
    post:string;
    Images?:string[];
    user:User;
    usersTag?:User[];
    comments?:{userComment:User,comment:string}[];
    reacteds?:User[];
}