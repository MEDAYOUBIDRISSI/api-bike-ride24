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

@Injectable()
export class StatisticServiceService {

    // constructor(@InjectModel('User') private readonly userModel:Model<User>,@InjectModel('Product') private readonly productModel:Model<Product>,
    // @InjectModel('LigneCommande') private readonly ligneCommandeModel:Model<LigneCommande>,@InjectModel('Commande') private readonly commandeModel:Model<Commande>,
    // @InjectModel('Categorie') private readonly categorieModel:Model<Categorie>,@InjectModel('Marque') private readonly marqueModel:Model<Marque>,
    // @InjectModel('Univer') private readonly univerModel:Model<Univer>){}

    // async getOtalOrders():Promise<any>{
    //     const totalOrders= await this.commandeModel.where({ 'etat': 'true' }).count();
    //     return totalOrders;
    //  }

}
