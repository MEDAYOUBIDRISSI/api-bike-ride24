import { User } from "src/user/schemas/user.schema";

export class CreateCommandeDTO
{

    etat:boolean;
    readonly user:User;
}