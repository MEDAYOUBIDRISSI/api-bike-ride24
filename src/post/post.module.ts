import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { PostServiceService } from './post-service/post-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import PostSchema from './schemas/post.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'Post', schema: PostSchema }]
    )
  ], 
  controllers: [ControllerController],
  providers: [PostServiceService]
})
export class PostModule {}
