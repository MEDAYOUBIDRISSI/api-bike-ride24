import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Post } from '../../post/interfaces/post.interface'
import { CreatePostDTO } from '../../post/dto/create-post.dto';

@Injectable()
export class PostServiceService {

    constructor(@InjectModel('Post') private readonly postModel:Model<Post>){}

    async getPosts():Promise<Post[]>{
        const posts= await this.postModel.find().populate("user").populate("usersTag").populate("reacteds").populate("affiliateDrivers"); 
        return posts;
     }
 
     async getPost(PostID:string):Promise<Post>{
         const Post= await this.postModel.findById(PostID);
         return Post;
      }

    async createPost(CreatePostDTO:CreatePostDTO):Promise<Post>{
        const Post = new this.postModel(CreatePostDTO);
        return await Post.save();
    }

    async updatePost(PostID:string,CreatePostDTO:CreatePostDTO){
        const updatePost = await this.postModel.findByIdAndUpdate(PostID,CreatePostDTO,
            {new:true});
        return updatePost;
    }

    async deletePost(PostID:string){
        const deletePost = await this.postModel.findByIdAndRemove(PostID);
        return deletePost;
    }
}
