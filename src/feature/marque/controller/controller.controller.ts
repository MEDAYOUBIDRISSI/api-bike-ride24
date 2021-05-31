import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateMarqueDTO } from '../dto/create-marque.dto';
import { MarqueserviceService } from '../marqueservice/marqueservice.service' 

@Controller('marque')
export class ControllerController {

    
    constructor(private marqueService:MarqueserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeMarqueDTO:CreateMarqueDTO)
    {
        const Marque = await this.marqueService.createMarque(cretaeMarqueDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Marque successfuly created',
               Marque:Marque
            }
        )
    }

    @Get('/all')
    async getCategories(@Res() res)
    {
        const Marque = await this.marqueService.getMarques()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Marque successfuly get',
               Marque
            }
        )
    }

    @Get('/:MarqueID')
    async getMarque(@Res() res,@Param('MarqueID') MarqueID)
    {
        const Marque = await this.marqueService.getMarque(MarqueID)
        if(!Marque) throw new NotFoundException('Marque Does not existe');
        return res.status(HttpStatus.OK).json({Marque});
    }    

    @Delete('/delete')
    async deleteMarque(@Res() res ,@Query('MarqueID') MarqueID)
    {
        const MarqueDeleted = await this.marqueService.deleteMarque(MarqueID)
        if(!MarqueDeleted) throw new NotFoundException('Marque Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Marque Deleted successfuly',
            MarqueDeleted});
    } 

    @Put('/update')
        async updateMarque(@Res() res ,@Body() cretaeMarqueDTO:CreateMarqueDTO,@Query('MarqueID') MarqueID)
    {
        const MarqueUpdated = await this.marqueService.updateMarque(MarqueID,cretaeMarqueDTO)
        if(!MarqueUpdated) throw new NotFoundException('Marque Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Marque Updated successfuly',
            MarqueUpdated});
    }
}
