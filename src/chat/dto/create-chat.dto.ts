import { User } from "src/user/schemas/user.schema";

export class CreateChatdto
{
   readonly fromUser:User;
   readonly toUser:User;
   readonly message:string;
}