import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Commande } from '../../commande/interfaces/commande.interfaces'
import { CreateCommandeDTO } from '../../commande/dto/create-commande.dto';

@Injectable()
export class CommandeServiceService {

    constructor(@InjectModel('Commande') private readonly commandeModel:Model<Commande>){}

    async getCommandes():Promise<Commande[]>{
        const commandes= await this.commandeModel.find(); 
        return commandes;
     }
 
     async getCommande(commandeID:string):Promise<Commande>{
         const commande= await this.commandeModel.findById(commandeID);
         return commande;
      }

      async getCommandebyUser(userId:any):Promise<Commande>{
        const commande= await this.commandeModel.findOne({user:userId,etat:false});
        return commande;
     }

    async createCommande(createCommandeDTO:CreateCommandeDTO):Promise<Commande>{
        const commande = new this.commandeModel(createCommandeDTO);
        return await commande.save();
    }

    async updateCommande(CommandeID:string,CreateCommandeDTO:CreateCommandeDTO){
        const updateCommande = await this.commandeModel.findByIdAndUpdate(CommandeID,CreateCommandeDTO,
            {new:true});
        return updateCommande;
    }

    async deleteCommande(commandeID:string){
        const deleteCommande = await this.commandeModel.findByIdAndRemove(commandeID);
        return deleteCommande;
    }

    // statistic

    async getOtalOrders():Promise<any>{
        const totalOrders= await this.commandeModel.where({ 'etat': 'true' }).count();
        return totalOrders;
     }
}
