import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../user/interfaces/user.interface'
import { CreateUserDTO } from '../../user/dto/create-user.dto';
 
@Injectable()
export class UserserviceService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>){}

    async getUsers():Promise<User[]>{
        const users= await this.userModel.find();
        return users;
     }
 
     async getUser(userID:string):Promise<User>{
         const User= await this.userModel.findById(userID);
         return User;
      }

    async createUser(CreateUserDTO:CreateUserDTO):Promise<User>{
        const User = new this.userModel(CreateUserDTO);
        return await User.save();
    }

    async createUser_ecommerce_google(email:string,nom:string,prenom:string,imgProfile:string):Promise<User>{
        const User = new this.userModel();
        User.nom=nom
        User.prenom=prenom
        User.email=email
        User.imgProfile=imgProfile
        User.typeUser="Client"
        return await User.save();
    }

    async updateUser(userID:string,CreateUserDTO:CreateUserDTO){
        const updateUser = await this.userModel.findByIdAndUpdate(userID,CreateUserDTO,
            {new:true});
        return updateUser;
    }

    async deleteUser(userID:string){
        const deleteUser = await this.userModel.findByIdAndRemove(userID);
        return deleteUser;
    }

    async findOne(condition:any):Promise<User>
    {
        return this.userModel.findOne(condition);
    }

    async getUserByEmail(condition:any):Promise<User>{
        return this.userModel.findOne(condition);
     }
}
