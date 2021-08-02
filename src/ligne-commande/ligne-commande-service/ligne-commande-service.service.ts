import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { LigneCommande } from '../../ligne-commande/interfaces/ligne-commande.interface'
import { Commande } from '../../commande/interfaces/commande.interfaces'
import { CreateLigneCommandetDTO } from '../../ligne-commande/dto/create-ligne-commande.dto';

@Injectable()
export class LigneCommandeServiceService {

    constructor(@InjectModel('LigneCommande') private readonly ligneCommandeModel:Model<LigneCommande>,
    @InjectModel('Commande') private readonly commandeModel:Model<Commande>){}

    async getLigneCommandes():Promise<LigneCommande[]>{
        const LigneCommandes= await this.ligneCommandeModel.find().populate("commande").populate("product"); 
        return LigneCommandes; 
    }

    async getAllLigneCommandesByUser(UserID:any,):Promise<LigneCommande[]>{
        var AllLigneCommandes=[]
        var LigneCommandes:any
        const commandes= await this.commandeModel.find({user:UserID}); 
        for(var i=0;i<commandes.length;i++)
        {
           LigneCommandes = await this.ligneCommandeModel.find({commande:commandes[i]._id}).populate("commande").populate("product").sort({updatedAt: -1}); 
           AllLigneCommandes.push(LigneCommandes)
        }
        return AllLigneCommandes; 
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
