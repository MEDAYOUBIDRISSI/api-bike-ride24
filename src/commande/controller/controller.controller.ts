import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateCommandeDTO } from '../../commande/dto/create-commande.dto';
import { CommandeServiceService } from '../../commande/commande-service/commande-service.service'

@Controller('commande')
export class ControllerController {

    constructor(private CommandeService:CommandeServiceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createCommandeDTO:CreateCommandeDTO)
    {
        var commandeExiste = await this.CommandeService.getCommandebyUser(createCommandeDTO.user)
        if(commandeExiste)
        {
            return res.status(HttpStatus.OK).json(
                {
                   message: 'commandes successfuly get',
                   commandeExiste
                }
            )
        }
        else
        {
            commandeExiste = await this.CommandeService.createCommande(createCommandeDTO)
            return res.status(HttpStatus.OK).json(
            {
               message: 'commande successfuly created',
               commandeExiste
            }
            )
        }
    }

    @Put('/update')
        async updateLigneCommande(@Res() res ,@Body() createCommandeDTO:CreateCommandeDTO,@Query('CommandeID') ligneCommandeID)
    {
        createCommandeDTO.etat=true;
        const commandeUpdated = await this.CommandeService.updateCommande(ligneCommandeID,createCommandeDTO)
        if(!commandeUpdated) throw new NotFoundException('Commande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Commande Updated successfuly',
            commandeUpdated});
    }

    @Get('/all')
    async getCommandes(@Res() res)
    {
        const commandes = await this.CommandeService.getCommandes()
        return res.status(HttpStatus.OK).json(
            {
               message: 'commandes successfuly get',
               commandes
            }
        )
    }

    @Get('/byuser/:userID')
    async getCommandeByUser(@Res() res,@Param('userID') userID)
    {
        const commande = await this.CommandeService.getCommandebyUser(userID)
        if(!commande) throw new NotFoundException('commande Does not existe8');
        return res.status(HttpStatus.OK).json({commande});
    }   


    @Get('/:commandeID')
    async getCommande(@Res() res,@Param('commandeID') commandeID)
    {
        const commande = await this.CommandeService.getCommande(commandeID)
        if(!commande) throw new NotFoundException('commande Does not existe6');
        return res.status(HttpStatus.OK).json({commande});
    }    

    @Delete('/delete')
    async deleteCommande(@Res() res ,@Query('commandeID') commandeID)
    {
        const commandeDeleted = await this.CommandeService.deleteCommande(commandeID)
        if(!commandeDeleted) throw new NotFoundException('commande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'commande Deleted successfuly',
            commandeDeleted});
    }

}
