import { Document } from 'mongoose';
import { User } from "src/user/schemas/user.schema";

export interface Commande extends Document{

    readonly etat:boolean;
    readonly user:User;
}