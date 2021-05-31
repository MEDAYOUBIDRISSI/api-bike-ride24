import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateRemiseDTO } from '../dto/create-remise.dto';
import { RemiseserviceService } from '../remiseservice/remiseservice.service' 

@Controller('remise')
export class ControllerController {

    constructor(private remiseService:RemiseserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeRemiseDTO:CreateRemiseDTO)
    {
        const Remise = await this.remiseService.createRemise(cretaeRemiseDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Remise successfuly created',
               Remise:Remise
            }
        )
    }

    @Get('/all')
    async getRemises(@Res() res)
    {
        const Remises = await this.remiseService.getRemises()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Remises successfuly get',
               Remises
            }
        )
    }

    @Get('/:RemiseID')
    async getRemise(@Res() res,@Param('RemiseID') RemiseID)
    {
        const Remise = await this.remiseService.getRemise(RemiseID)
        if(!Remise) throw new NotFoundException('Remise Does not existe');
        return res.status(HttpStatus.OK).json({Remise});
    }    

    @Delete('/delete')
    async deleteRemise(@Res() res ,@Query('RemiseID') RemiseID)
    {
        const RemiseDeleted = await this.remiseService.deleteRemise(RemiseID)
        if(!RemiseDeleted) throw new NotFoundException('Remise Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Remise Deleted successfuly',
            RemiseDeleted});
    } 

    @Put('/update')
        async updateRemise(@Res() res ,@Body() cretaeRemiseDTO:CreateRemiseDTO,@Query('RemiseID') RemiseID)
    {
        const RemiseUpdated = await this.remiseService.updateRemise(RemiseID,cretaeRemiseDTO)
        if(!RemiseUpdated) throw new NotFoundException('Remise Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Remise Updated successfuly',
            RemiseUpdated});
    }
}
