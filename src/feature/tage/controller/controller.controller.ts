import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateTageDTO } from '../dto/create-tage.dto';
import { TageserviceService } from '../tageservice/tageservice.service' 

@Controller('tage')
export class ControllerController {

    constructor(private tageService:TageserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeTageDTO:CreateTageDTO)
    {
        const Tage = await this.tageService.createTage(cretaeTageDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Tage successfuly created',
               Tage:Tage
            }
        )
    }

    @Get('/all')
    async getTages(@Res() res)
    {
        const Tages = await this.tageService.getTages()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Tages successfuly get',
               Tages
            }
        )
    }

    @Get('/:TageID')
    async getTage(@Res() res,@Param('TageID') TageID)
    {
        const Tage = await this.tageService.getTage(TageID)
        if(!Tage) throw new NotFoundException('Tage Does not existe');
        return res.status(HttpStatus.OK).json({Tage});
    }    

    @Delete('/delete')
    async deleteTage(@Res() res ,@Query('TageID') TageID)
    {
        const TageDeleted = await this.tageService.deleteTage(TageID)
        if(!TageDeleted) throw new NotFoundException('Tage Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Tage Deleted successfuly',
            TageDeleted});
    } 

    @Put('/update')
        async updateTage(@Res() res ,@Body() cretaeTageDTO:CreateTageDTO,@Query('TageID') TageID)
    {
        const TageUpdated = await this.tageService.updateTage(TageID,cretaeTageDTO)
        if(!TageUpdated) throw new NotFoundException('Tage Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Tage Updated successfuly',
            TageUpdated});
    }
}
