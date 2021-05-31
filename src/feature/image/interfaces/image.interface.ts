import { Document } from 'mongoose';
export interface Image extends Document{
    readonly url:string;
}