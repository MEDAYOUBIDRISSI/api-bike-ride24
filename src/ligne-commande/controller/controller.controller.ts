import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateLigneCommandetDTO } from '../../ligne-commande/dto/create-ligne-commande.dto';
import { LigneCommandeServiceService } from '../../ligne-commande/ligne-commande-service/ligne-commande-service.service' 

@Controller('lignecommande') 
export class ControllerController {

    constructor(private LigneCommandeService:LigneCommandeServiceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createLigneCommandetDTO:CreateLigneCommandetDTO)
    {

        var LigneCommande = await this.LigneCommandeService.getLigneCommandeByProduct(createLigneCommandetDTO.commande,createLigneCommandetDTO.product)

        if(LigneCommande)
        {
            LigneCommande.qte = LigneCommande.qte+createLigneCommandetDTO.qte
            return res.status(HttpStatus.OK).json(
                {
                   message: 'LigneCommande successfuly Add Qte',
                   LigneCommande
                }
            )
        }
        else{
            LigneCommande = await this.LigneCommandeService.createLigneCommande(createLigneCommandetDTO)
            return res.status(HttpStatus.OK).json(
                {
                message: 'LigneCommande successfuly created  Befor add Qte',
                LigneCommande
                }
            )
        }

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

    @Get('/bycommande/:commandeID')
    async getLigneCommandeByCommande(@Res() res,@Param('commandeID') commandeID)
    {
        const LigneCommande = await this.LigneCommandeService.getLigneCommandeByCommande(commandeID)
        if(!LigneCommande) throw new NotFoundException('LigneCommande Does not existe');
        return res.status(HttpStatus.OK).json({LigneCommande});
    }

    @Get('/byuser/:userID')
    async getAllLigneCommandesByUser(@Res() res,@Param('userID') userID)
    {
        const LigneCommandes = await this.LigneCommandeService.getAllLigneCommandesByUser(userID)
        if(!LigneCommandes) throw new NotFoundException('LigneCommandes Does not existe');
        return res.status(HttpStatus.OK).json({LigneCommandes});
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

    @Put('/addqte')
        async AddQteLigneCommande(@Res() res ,@Body() createLigneCommandetDTO:CreateLigneCommandetDTO,@Query('ligneCommandeID') ligneCommandeID)
    {
        createLigneCommandetDTO.qte = createLigneCommandetDTO.qte + 1;
        const ligneCommandeUpdated = await this.LigneCommandeService.updateLigneCommande(ligneCommandeID,createLigneCommandetDTO)
        if(!ligneCommandeUpdated) throw new NotFoundException('LigneCommande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'LigneCommande Add qte successfuly',
            ligneCommandeUpdated});
    }

    @Put('/minusqte')
        async MinusQteLigneCommande(@Res() res ,@Body() createLigneCommandetDTO:CreateLigneCommandetDTO,@Query('ligneCommandeID') ligneCommandeID)
    {
        createLigneCommandetDTO.qte = createLigneCommandetDTO.qte - 1;
        const ligneCommandeUpdated = await this.LigneCommandeService.updateLigneCommande(ligneCommandeID,createLigneCommandetDTO)
        if(!ligneCommandeUpdated) throw new NotFoundException('LigneCommande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'LigneCommande Minus qte successfuly',
            ligneCommandeUpdated});
    }

    

}
