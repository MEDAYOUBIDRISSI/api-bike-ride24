import { User } from "src/user/schemas/user.schema";

export class CreateCommandeDTO
{

    readonly etat:boolean;
    readonly user:User;
}