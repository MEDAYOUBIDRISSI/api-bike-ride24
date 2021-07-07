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

      async getChatByFromUserToUser(FromUserID:any,ToUserID:any):Promise<Chat[]>{
        const Chats= await this.chatModel.find({$or: [{ fromUser: FromUserID,toUser: ToUserID },{ fromUser: ToUserID,toUser: FromUserID} ]}).populate("toUser").populate("fromUser").sort({ updatedAt : "asc"})
        return Chats;
     }

     async getChatForInbox(FromUserID:any):Promise<Chat[]>{
        const Chats= await this.chatModel.find({$or: [{ fromUser: FromUserID }, { toUser: FromUserID }]}).populate("toUser").populate("fromUser").sort({ updatedAt : "desc"})
        return Chats;
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
