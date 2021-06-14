import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateCommandeDTO } from '../../commande/dto/create-commande.dto';
import { CommandeServiceService } from '../../commande/commande-service/commande-service.service' 

@Controller('commande')
export class ControllerController {

    constructor(private CommandeService:CommandeServiceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createCommandeDTO:CreateCommandeDTO)
    {
        const commande = await this.CommandeService.createCommande(createCommandeDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'commande successfuly created',
               commande:commande
            }
        )
    }

    @Get('/all')
    async getProducts(@Res() res)
    {
        const commandes = await this.CommandeService.getCommandes()
        return res.status(HttpStatus.OK).json(
            {
               message: 'commandes successfuly get',
               commandes
            }
        )
    }

    @Get('/:commandeID')
    async getCategorie(@Res() res,@Param('commandeID') commandeID)
    {
        const commande = await this.CommandeService.getCommande(commandeID)
        if(!commande) throw new NotFoundException('commande Does not existe');
        return res.status(HttpStatus.OK).json({commande});
    }    

    @Delete('/delete')
    async deleteCategorie(@Res() res ,@Query('commandeID') commandeID)
    {
        const commandeDeleted = await this.CommandeService.deleteCommande(commandeID)
        if(!commandeDeleted) throw new NotFoundException('commande Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'commande Deleted successfuly',
            commandeDeleted});
    }

}
