import { User } from "src/user/schemas/user.schema";

export class CreatePostDTO
{
    typePost:string;
    post:string;
    Images?:string[];
    user:User;
    usersTag?:User[];
    comments?:{userComment:User,comment:string}[];
    reacteds?:User[];
    affiliateDrivers?:User[];
}