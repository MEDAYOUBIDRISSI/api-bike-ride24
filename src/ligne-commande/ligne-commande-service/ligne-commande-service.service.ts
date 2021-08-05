import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { LigneCommande } from '../../ligne-commande/interfaces/ligne-commande.interface'
import { Commande } from '../../commande/interfaces/commande.interfaces'
import { CreateLigneCommandetDTO } from '../../ligne-commande/dto/create-ligne-commande.dto';

class CommandeSale{
    commande:Commande;
    ligneCommandeTotal:LigneCommande[];
    
    constructor(commande:Commande,ligneCommandes:LigneCommande[])
    {
        this.commande=commande
        this.ligneCommandeTotal=ligneCommandes
    }
  }

@Injectable()
export class LigneCommandeServiceService {

    constructor(@InjectModel('LigneCommande') private readonly ligneCommandeModel:Model<LigneCommande>,
    @InjectModel('Commande') private readonly commandeModel:Model<Commande>){}

    async getLigneCommandes():Promise<LigneCommande[]>{
        const LigneCommandes= await this.ligneCommandeModel.find().populate("commande").populate("product"); 
        return LigneCommandes; 
    }

    async getAllLigneCommandesByUser(UserID:any,):Promise<any[]>{
        var ListCommandeSale:CommandeSale[] = [] 

        const commandes= await this.commandeModel.find({user:UserID}).populate("user").sort({updatedAt: -1}); 
        for(var i=0;i<commandes.length;i++)
        {
           const LigneCommandes = await this.ligneCommandeModel.find({commande:commandes[i]}).populate("product").sort({updatedAt: -1}); 
           var CommandeLigneCommandes=new CommandeSale(commandes[i],LigneCommandes)
           ListCommandeSale.push(CommandeLigneCommandes)
        }
        return ListCommandeSale; 
    }
  
     async getLigneCommande(ligneCommandeID:string):Promise<LigneCommande>{
         const LigneCommande= await this.ligneCommandeModel.findById(ligneCommandeID);
         return LigneCommande;
      }

      async getLigneCommandeByProduct(CommandeID:any,ProduitID:any):Promise<LigneCommande>{
        const LigneCommande= await this.ligneCommandeModel.findOne({commande:CommandeID,product:ProduitID})
        return LigneCommande;
     }

     async getLigneCommandeByCommande(CommandeID:any):Promise<LigneCommande[]>{
        const LigneCommande= await this.ligneCommandeModel.find({commande:CommandeID}).populate("commande").populate("product");
        return LigneCommande;
     }

    async createLigneCommande(createLigneCommandetDTO:CreateLigneCommandetDTO):Promise<LigneCommande>{
        const LigneCommande = new this.ligneCommandeModel(createLigneCommandetDTO);
        return await LigneCommande.save();
    }

    async updateLigneCommande(ligneCommandeID:string,createLigneCommandetDTO:CreateLigneCommandetDTO){
        const updateLigneCommande = await this.ligneCommandeModel.findByIdAndUpdate(ligneCommandeID,createLigneCommandetDTO,
            {new:true});
        return updateLigneCommande;
    }

    async deleteLigneCommande(ligneCommandeID:string){
        const deleteLigneCommande = await this.ligneCommandeModel.findByIdAndRemove(ligneCommandeID);
        return deleteLigneCommande; 
    }

    async AddQteLigneCommande(ligneCommandeID:string,createLigneCommandetDTO:CreateLigneCommandetDTO){
        const updateLigneCommande = await this.ligneCommandeModel.findByIdAndUpdate(ligneCommandeID,createLigneCommandetDTO,
            {new:true});
        return updateLigneCommande;
    }

    async MinusQteLigneCommande(ligneCommandeID:string,createLigneCommandetDTO:CreateLigneCommandetDTO){
        const updateLigneCommande = await this.ligneCommandeModel.findByIdAndUpdate(ligneCommandeID,createLigneCommandetDTO,
            {new:true});
        return updateLigneCommande;
    }

}
