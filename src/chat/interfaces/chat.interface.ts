import { User } from "src/user/schemas/user.schema";

export interface Chat extends Document{

    readonly fromUser:User;
    readonly toUser:User;
    readonly message:string;
    readonly updatedAt?:Date;
}