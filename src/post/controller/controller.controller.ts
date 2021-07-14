import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreatePostDTO } from '../dto/create-post.dto';
import { PostServiceService } from '../post-service/post-service.service'

@Controller('post')
export class ControllerController {

    constructor(private PostService:PostServiceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createPostDTO:CreatePostDTO)
    {
        const Post = await this.PostService.createPost(createPostDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Post successfuly created',
               Post:Post
            }
        )
    }

    @Get('/all')
    async getPosts()
    {
        const posts = await this.PostService.getPosts()
        return posts
    }

    @Get('/:postID')
    async getPost(@Res() res,@Param('postID') postID)
    {
        const post = await this.PostService.getPost(postID)
        if(!post) throw new NotFoundException('post Does not existe6');
        return res.status(HttpStatus.OK).json({post});
    }   

    @Put('/update')
    async updatePost(@Res() res ,@Body() createPostDTO:CreatePostDTO,@Query('postID') postID)
{
    const postUpdated = await this.PostService.updatePost(postID,createPostDTO)
    if(!postUpdated) throw new NotFoundException('Post Does not existe');
    return res.status(HttpStatus.OK).json({
        message:'Post Updated successfuly',
        postUpdated});
}
    

    @Delete('/delete')
    async deletePost(@Res() res ,@Query('postID') postID)
    {
        const postDeleted = await this.PostService.deletePost(postID)
        if(!postDeleted) throw new NotFoundException('post Does not existe88');
        return res.status(HttpStatus.OK).json({
            message:'post Deleted successfuly',
            postDeleted});
    }
}
