import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateCategorieArticleDTO } from '../dto/create-categorieArticle.dto';
import { CategorieArticleserviceService } from '../categorie-articleservice/categorie-articleservice.service' 

@Controller('categoriearticle')
export class ControllerController {

    constructor(private CategorieArticleService:CategorieArticleserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeCategorieArticleDTO:CreateCategorieArticleDTO)
    {
        const CategorieArticle = await this.CategorieArticleService.createCategorieArticle(cretaeCategorieArticleDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Categorie ofArticle successfuly created',
               CategorieArticle:CategorieArticle
            }
        )
    }

    @Get('/all')
    async getCategorieArticles(@Res() res)
    {
        const CategorieArticles = await this.CategorieArticleService.getCategorieArticles()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Categorie of Articles successfuly get',
               CategorieArticles
            }
        )
    }

    @Get('/:CategorieArticleID')
    async getCategorieArticle(@Res() res,@Param('CategorieArticleID') CategorieArticleID)
    {
        const CategorieArticle = await this.CategorieArticleService.getCategorieArticle(CategorieArticleID)
        if(!CategorieArticle) throw new NotFoundException('Categorie of Article Does not existe');
        return res.status(HttpStatus.OK).json({CategorieArticle});
    }    

    @Delete('/delete')
    async deleteCategorieArticle(@Res() res ,@Query('CategorieArticleID') CategorieArticleID)
    {
        const CategorieArticleDeleted = await this.CategorieArticleService.deleteCategorieArticle(CategorieArticleID)
        if(!CategorieArticleDeleted) throw new NotFoundException('Categorie of Article Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Categorie of Article Deleted successfuly',
            CategorieArticleDeleted});
    } 

    @Put('/update')
        async updateCategorieArticle(@Res() res ,@Body() cretaeCategorieArticleDTO:CreateCategorieArticleDTO,@Query('CategorieArticleID') CategorieArticleID)
    {
        const CategorieArticleUpdated = await this.CategorieArticleService.updateCategorieArticle(CategorieArticleID,cretaeCategorieArticleDTO)
        if(!CategorieArticleUpdated) throw new NotFoundException('Categorie of Article Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Categorie of Article Updated successfuly',
            CategorieArticleUpdated});
    }
}
