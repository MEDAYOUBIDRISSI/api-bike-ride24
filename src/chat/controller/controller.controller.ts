import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateChatdto } from '../../chat/dto/create-chat.dto';
import { ChatServiceService } from '../../chat/chat-service/chat-service.service' 

@Controller('chat')
export class ControllerController {

    constructor(private chatService:ChatServiceService){}

    @Post('/create')
    async createChat(@Res() res,@Body() CreateChatdto:CreateChatdto)
    {
        const chat = await this.chatService.createChat(CreateChatdto)
        return res.status(HttpStatus.OK).json(
            {
               message: 'chat successfuly created',
               chat:chat
            } 
        )
    }

    @Get('/all')
    async getChats(@Res() res)
    {
        const chats = await this.chatService.getChats()
        return res.status(HttpStatus.OK).json(
            {
               message: 'chats successfuly get',
               chats
            }
        )
    }

    @Get('/:chatID')
    async getChat(@Res() res,@Param('chatID') chatID)
    {
        const chat = await this.chatService.getChat(chatID)
        if(!chat) throw new NotFoundException('chat Does not existe');
        return res.status(HttpStatus.OK).json({chat});
    }  
    
    @Get('/inbox/:FromUserID')
    async getChatForInbox(@Res() res,@Param('FromUserID') FromUserID)
    {
        const chat = await this.chatService.getChatForInbox(FromUserID)
        if(!chat) throw new NotFoundException('chat Does not existe');
        return res.status(HttpStatus.OK).json({chat});
    }  

    @Delete('/delete')
    async deleteChat(@Res() res ,@Query('chatID') chatID)
    {
        const chatDeleted = await this.chatService.deleteChat(chatID)
        if(!chatDeleted) throw new NotFoundException('chat Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'chat Deleted successfuly',
            chatDeleted});
    }

    @Put('/update')
        async updateChat(@Res() res ,@Body() CreateChatdto:CreateChatdto,@Query('chatID') chatID)
    {
        const chatUpdated = await this.chatService.updateChat(chatID,CreateChatdto)
        if(!chatUpdated) throw new NotFoundException('chat Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'chat Updated successfuly',
            chatUpdated});
    }

}
