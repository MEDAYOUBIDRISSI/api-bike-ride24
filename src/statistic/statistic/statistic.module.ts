import { Module } from '@nestjs/common';
import { ControllerController } from '../controller/controller.controller';
import { StatisticServiceService } from '../statistic-service/statistic-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  CommandeSchema  from '../../commande/schemas/commande.schema'
import  LigneCommandeSchema from '../../ligne-commande/schemas/ligne-commande.schema'
import  ProductSchema  from '../../product/schemas/product.schema'
import  UserSchema  from '../../user/schemas/user.schema'
import  MarqueSchema  from '../../feature/marque/schemas/marque.schema'
import  UniverSchema  from '../../feature/univer/schemas/univer.schema'
import  CategorieSchema  from '../../feature/categorie/schemas/categorie.schema'

@Module({
    imports:[
      MongooseModule.forFeature(
        [{ name: 'Commande', schema: CommandeSchema },{ name: 'LigneCommande', schema: LigneCommandeSchema },
        { name: 'Product', schema: ProductSchema },{ name: 'User', schema: UserSchema },
        { name: 'Marque', schema: MarqueSchema },{ name: 'Univer', schema: UniverSchema },
        { name: 'Categorie', schema: CategorieSchema }]
      )
    ],
    controllers: [ControllerController],
    providers: [StatisticServiceService]
  })
export class StatisticModule {}
