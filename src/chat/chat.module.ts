import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ChatServiceService } from './chat-service/chat-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  ChatSchema  from '../chat/schemas/chat.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Chat', schema: ChatSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [ChatServiceService]
})
export class ChatModule {}
