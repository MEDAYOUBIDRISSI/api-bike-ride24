import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { CommentServiceService } from './comment-service/comment-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  CommentSchema  from './schemas/comment.schemas'


@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Comment', schema: CommentSchema }]
    )
  ], 
  controllers: [ControllerController],
  providers: [CommentServiceService]
})
export class CommentModule {}
