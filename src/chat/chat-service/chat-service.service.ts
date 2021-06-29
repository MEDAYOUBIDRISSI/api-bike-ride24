import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Chat } from '../../chat/interfaces/chat.interface'
import { CreateChatdto } from '../../chat/dto/create-chat.dto';

@Injectable()
export class ChatServiceService {

    constructor(@InjectModel('Chat') private readonly chatModel:Model<Chat>){}

    async getChats():Promise<Chat[]>{
        const Chats= await this.chatModel.find(); 
        return Chats; 
     }
  
     async getChat(chatID:string):Promise<Chat>{
         const Chat= await this.chatModel.findById(chatID);
         return Chat;
      }

    //   async getChatByFromUserToUser(CommandeID:any,ProduitID:any):Promise<Chat>{
    //     const Chat= await this.chatModel.findOne({commande:CommandeID,product:ProduitID})
    //     return Chat;
    //  }

     async getChatForInbox(FromUserID:any):Promise<Chat[]>{
        const Chat= await this.chatModel.find({fromUser:FromUserID}).populate("toUser");
        return Chat;
     }

    async createChat(createChatdto:CreateChatdto):Promise<Chat>{
        const Chat = new this.chatModel(createChatdto);
        return await Chat.save();
    }

    async updateChat(chatID:string,createChatdto:CreateChatdto){
        const updateChat = await this.chatModel.findByIdAndUpdate(chatID,createChatdto,
            {new:true});
        return updateChat;
    }

    async deleteChat(chatID:string){
        const deleteChat = await this.chatModel.findByIdAndRemove(chatID);
        return deleteChat; 
    }
}
