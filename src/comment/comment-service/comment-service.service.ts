import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Comment } from '../interfaces/comment.interface'
import { CreateCommentDTO } from '../dto/create-comment.dto';

@Injectable()
export class CommentServiceService {
    constructor(@InjectModel('Comment') private readonly commentModel:Model<Comment>){}

    async getComments():Promise<Comment[]>{
        const commandes= await this.commentModel.find(); 
        return commandes;
     }
 
     async getComment(commentID:string):Promise<Comment>{
         const Comment= await this.commentModel.findById(commentID);
         return Comment;
      }

      async getCommandebyUser(userId:any):Promise<Comment>{
        const Comment= await this.commentModel.findOne({user:userId,etat:false});
        return Comment;
     }

    async createComment(createCommentDTO:CreateCommentDTO):Promise<Comment>{
        const Comment = new this.commentModel(createCommentDTO);
        return await Comment.save();
    }

    async updateComment(CommentID:string,CreateCommentDTO:CreateCommentDTO){
        const updateComment = await this.commentModel.findByIdAndUpdate(CommentID,CreateCommentDTO,
            {new:true});
        return updateComment;
    }

    async deleteComment(commentID:string){
        const deleteComment = await this.commentModel.findByIdAndRemove(commentID);
        return deleteComment;
    }
}
