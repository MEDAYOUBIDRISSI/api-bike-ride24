import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateUniverDTO } from '../dto/create-univer.dto';
import { UniverserviceService } from '../universervice/universervice.service' 

@Controller('univer')
export class ControllerController {

    
    constructor(private univerService:UniverserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeUniverDTO:CreateUniverDTO)
    {
        const univer = await this.univerService.createUniver(cretaeUniverDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Univer successfuly created',
               univer:univer
            }
        )
    }

    @Get('/all')
    async getUnivers(@Res() res)
    {
        const univers = await this.univerService.getUnivers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Univers successfuly get',
               univers
            }
        )
    }

    @Get('/:univerID')
    async getUniver(@Res() res,@Param('univerID') univerID)
    {
        const univer = await this.univerService.getUniver(univerID)
        if(!univer) throw new NotFoundException('Univer Does not existe');
        return res.status(HttpStatus.OK).json({univer});
    }    

    @Delete('/delete')
    async deleteUniver(@Res() res ,@Query('univerID') univerID)
    {
        const univerDeleted = await this.univerService.deleteUniver(univerID)
        if(!univerDeleted) throw new NotFoundException('Univer Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Univer Deleted successfuly',
            univerDeleted});
    }

    @Put('/update')
        async updateUniver(@Res() res ,@Body() cretaeUniverDTO:CreateUniverDTO,@Query('univerID') univerID)
    {
        const univerUpdated = await this.univerService.updateUniver(univerID,cretaeUniverDTO)
        if(!univerUpdated) throw new NotFoundException('Univer Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Univer Updated successfuly',
            univerUpdated});
    }
}
