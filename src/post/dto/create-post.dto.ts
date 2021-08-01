import { User } from "src/user/schemas/user.schema";

export class CreatePostDTO
{
    typePost:string;
    post:string;
    Images?:string[];
    user:User;
    usersTag?:User[];
    comments?:{userComment:User,fullName:string,imgProfile:string,comment:string}[];
    reacteds?:User[];
    affiliateDrivers?:User[];
    titlePost?:string;
    from?:string;
    to?:string;
    startTripeLat?:number;
    startTripeLng?:number;
    endTripeLat?:number;
    endTripeLng?:number;
    dateTripe?:string;
}