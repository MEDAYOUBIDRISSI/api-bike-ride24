import { User } from "src/user/schemas/user.schema";

export class CreateCommentDTO
{
    readonly userComment?:User;
    readonly comment?:string
}