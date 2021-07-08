import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../user/interfaces/user.interface'
import { Product } from '../../product/interfaces/product.interface'
import { LigneCommande } from '../../ligne-commande/interfaces/ligne-commande.interface'
import { Commande } from '../../commande/interfaces/commande.interfaces'
import { Marque } from '../../feature/marque/interfaces/marque.interface'
import { Univer } from '../../feature/univer/interfaces/univer.interface'
import { Categorie } from '../../feature/categorie/interfaces/categorie.interface'

class ProductSale{
    name:string;
    value:number=0;
    
    constructor(name:string,value:number)
    {
        this.name=name
        this.value=value
    }
}

class TopClien{
    email:string;
    imgProfile:string;
    fullName:string;
    TotalSale:number;
    user:string;
    constructor(email:string,imgProfile:string,fullName:string,TotalSale:number,user:string)
    {
        this.email=email
        this.imgProfile=imgProfile
        this.fullName=fullName
        this.TotalSale=TotalSale
        this.user=user
    }
}

@Injectable()
export class StatisticServiceService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>,@InjectModel('Product') private readonly productModel:Model<Product>,
    @InjectModel('LigneCommande') private readonly ligneCommandeModel:Model<LigneCommande>,@InjectModel('Commande') private readonly commandeModel:Model<Commande>,
    @InjectModel('Categorie') private readonly categorieModel:Model<Categorie>,@InjectModel('Marque') private readonly marqueModel:Model<Marque>,
    @InjectModel('Univer') private readonly univerModel:Model<Univer>){}

    async getTotalOrders():Promise<any>{
        const totalOrders= await this.commandeModel.find().count();
        return totalOrders;
     }

     async getTotalOrdersPaid():Promise<any>{
        const totalOrders= await this.commandeModel.where({ 'etat': 'true' }).count();
        return totalOrders;
     }

    async getBuyers():Promise<any>{
        const totalBuyers= await this.commandeModel.where({ 'etat': 'true' }).populate("user").count();
        return totalBuyers;
    }

    async getProductSolde():Promise<any>{
        const LigneCommandes= await this.ligneCommandeModel.find().populate("commande").populate("product"); 
        return LigneCommandes; 
     }

     async getCountsClients():Promise<any>{
        const CountClients= await this.userModel.where({ 'typeUser': 'Client' }).count(); 
        return CountClients; 
     }

     async getTopClients():Promise<any>{
        var ListClients:TopClien[] = [] 
        const LigneCommandes= await this.ligneCommandeModel.find().populate("commande").populate("product"); 
        for(var i = 0; i < LigneCommandes.length; i++)
        {
            var ExisteVerification:boolean=false
            for(var j = 0; j < ListClients.length; j++)
            {
                   if(String(LigneCommandes[i].commande.user+"") == ListClients[j].user)
                   {
                        ListClients[j].TotalSale += (LigneCommandes[i].qte*LigneCommandes[i].product.prixVent)
                        ExisteVerification=true
                   }
            }
            
            if(ExisteVerification == false)
            {
                const userligneCommande=LigneCommandes[i].commande.user
                const commandeForUser= await this.commandeModel.findById(LigneCommandes[i].commande).populate("user");
                var fullname=commandeForUser.user.nom+" "+commandeForUser.user.prenom;
                var newClient=new TopClien(commandeForUser.user.email,commandeForUser.user.imgProfile,
                    fullname,LigneCommandes[i].qte*LigneCommandes[i].product.prixVent,String(userligneCommande+""));
                ListClients.push(newClient)
            }
        }
        return ListClients; 
     }

     async getProductSales():Promise<any>{
        var productSales:ProductSale[] = [] 
        const LigneCommandes= await this.ligneCommandeModel.find().populate("commande").populate("product"); 

        for(var i = 0; i < LigneCommandes.length; i++)
        {
            var ExisteVerification:boolean=false
            var qteSales:number
            for(var j = 0; j < productSales.length; j++)
            {
                   if(LigneCommandes[i].product.libelle == productSales[j].name)
                   {
                        productSales[j].value += LigneCommandes[i].qte
                        ExisteVerification=true
                   }
            }
            if(ExisteVerification == false)
            {
                var newProduct=new ProductSale(LigneCommandes[i].product.libelle,LigneCommandes[i].qte);
                productSales.push(newProduct)
            }
        }
        return productSales; 
     }


}
