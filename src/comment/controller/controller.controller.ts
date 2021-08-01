import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateCommentDTO } from '../dto/create-comment.dto';
import { CommentServiceService } from '../comment-service/comment-service.service'

@Controller('comment')
export class ControllerController {

    constructor(private commentService:CommentServiceService){}

    @Post('/create')
    async createComment(@Res() res,@Body() cretaeCommentDTO:CreateCommentDTO)
    {
        const Comment = await this.commentService.createComment(cretaeCommentDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Comment successfuly created',
               Comment:Comment
            }
        )
    }
}
