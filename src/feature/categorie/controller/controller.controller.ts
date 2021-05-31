import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateCategorieDTO } from '../dto/create-categorie.dto';
import { ServiceService } from '../service/service.service' 

@Controller('categorie')
export class ControllerController {

    constructor(private categorieService:ServiceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeCategorieDTO:CreateCategorieDTO)
    {
        const categorie = await this.categorieService.createCategorie(cretaeCategorieDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Categorie successfuly created',
               categorie:categorie
            }
        )
    }

    @Get('/all')
    async getCategories(@Res() res)
    {
        const categories = await this.categorieService.getCategories()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Categories successfuly get',
               categories
            }
        )
    }

    @Get('/:categorieID')
    async getCategorie(@Res() res,@Param('categorieID') categorieID)
    {
        const categorie = await this.categorieService.getCategorie(categorieID)
        if(!categorie) throw new NotFoundException('Ctegorie Does not existe');
        return res.status(HttpStatus.OK).json({categorie});
    }    

    @Delete('/delete')
    async deleteCategorie(@Res() res ,@Query('categorieID') categorieID)
    {
        const categorieDeleted = await this.categorieService.deleteCategorie(categorieID)
        if(!categorieDeleted) throw new NotFoundException('Ctegorie Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Categorie Deleted successfuly',
            categorieDeleted});
    } 

    @Put('/update')
        async updateCategorie(@Res() res ,@Body() cretaeCategorieDTO:CreateCategorieDTO,@Query('categorieID') categorieID)
    {
        const categorieUpdated = await this.categorieService.updateCategorie(categorieID,cretaeCategorieDTO)
        if(!categorieUpdated) throw new NotFoundException('Ctegorie Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Categorie Updated successfuly',
            categorieUpdated});
    }
}
