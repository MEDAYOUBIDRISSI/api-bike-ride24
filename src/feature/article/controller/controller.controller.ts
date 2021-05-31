import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateArticleDTO } from '../dto/create-article.dto';
import { ArticleserviceService } from '../articleservice/articleservice.service' 


@Controller('article')
export class ControllerController {

    constructor(private articleService:ArticleserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createArticleDTO:CreateArticleDTO)
    {
        const Article = await this.articleService.createArticle(createArticleDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Article successfuly created',
               Article:Article
            }
        )
    }

    @Get('/all')
    async getArticles(@Res() res)
    {
        const Articles = await this.articleService.getArticles()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Articles successfuly get',
               Articles
            }
        )
    }

    @Get('/:ArticleID')
    async getArticle(@Res() res,@Param('ArticleID') ArticleID)
    {
        const Article = await this.articleService.getArticle(ArticleID)
        if(!Article) throw new NotFoundException('Article Does not existe');
        return res.status(HttpStatus.OK).json({Article});
    }    

    @Delete('/delete')
    async deleteArticle(@Res() res ,@Query('ArticleID') ArticleID)
    {
        const ArticleDeleted = await this.articleService.deleteArticle(ArticleID)
        if(!ArticleDeleted) throw new NotFoundException('Article Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Article Deleted successfuly',
            ArticleDeleted});
    } 
 
    @Put('/update')
        async updateArticle(@Res() res ,@Body() createArticleDTO:CreateArticleDTO,@Query('ArticleID') ArticleID)
    {
        const ArticleUpdated = await this.articleService.updateArticle(ArticleID,createArticleDTO)
        if(!ArticleUpdated) throw new NotFoundException('Article Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Article Updated successfuly',
            ArticleUpdated});
    }


    @Get('/articlebyuser/:UserID')
    async getArticleByUser(@Res() res,@Param('UserID') UserID)
    {
        const Articles = await this.articleService.getArticleByUser(UserID)
        //console.log(Articles)
        if(!Articles) throw new NotFoundException('Articles Does not existe');
        return res.status(HttpStatus.OK).json({Articles});
    }
}
