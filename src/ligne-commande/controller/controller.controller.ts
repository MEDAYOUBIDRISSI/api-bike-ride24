import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateLigneCommandetDTO } from '../../ligne-commande/dto/create-ligne-commande.dto';
import { LigneCommandeServiceService } from '../../ligne-commande/ligne-commande-service/ligne-commande-service.service' 

@Controller('lignecommande')
export class ControllerController {

    constructor(private LigneCommandeService:LigneCommandeServiceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createLigneCommandetDTO:CreateLigneCommandetDTO)
    {
        const LigneCommande = await this.LigneCommandeService.createLigneCommande(createLigneCommandetDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'LigneCommande successfuly created',
               LigneCommande:LigneCommande
            }
        )
    }

    @Get('/all')
    async getLigneCommandes(@Res() res)
    {
        const ligneCommandes = await this.LigneCommandeService.getLigneCommandes()
        return res.status(HttpStatus.OK).json(
            {
               message: 'ligneCommandes successfuly get',
               ligneCommandes
            }
        )
    }

    @Get('/:ligneCommandeID')
    async getLigneCommande(@Res() res,@Param('ligneCommandeID') ligneCommandeID)
    {
        const LigneCommande = await this.LigneCommandeService.getLigneCommande(ligneCommandeID)
        if(!LigneCommande) throw new NotFoundException('LigneCommande Does not existe');
        return res.status(HttpStatus.OK).json({LigneCommande});
    }    

    @Delete('/delete')
    async deleteLigneCommande(@Res() res ,@Query('ligneCommandeID') ligneCommandeID)
    {
        const ligneCommandeDeleted = await this.LigneCommandeService.deleteLigneCommande(ligneCommandeID)
        if(!ligneCommandeDeleted) throw new NotFoundException('LigneCommande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'LigneCommande Deleted successfuly',
            ligneCommandeDeleted});
    }

    @Put('/update')
        async updateLigneCommande(@Res() res ,@Body() createLigneCommandetDTO:CreateLigneCommandetDTO,@Query('ligneCommandeID') ligneCommandeID)
    {
        const ligneCommandeUpdated = await this.LigneCommandeService.updateLigneCommande(ligneCommandeID,createLigneCommandetDTO)
        if(!ligneCommandeUpdated) throw new NotFoundException('LigneCommande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'LigneCommande Updated successfuly',
            ligneCommandeUpdated});
    }

}
