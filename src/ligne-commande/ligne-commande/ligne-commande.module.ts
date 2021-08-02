import { Module } from '@nestjs/common';
import { ControllerController } from '../controller/controller.controller';
import { LigneCommandeServiceService } from '../ligne-commande-service/ligne-commande-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  LigneCommandeSchema  from '../schemas/ligne-commande.schema'
import  CommandeSchema  from '../../commande/schemas/commande.schema'

@Module({
    imports:[
      MongooseModule.forFeature(
        [{ name: 'LigneCommande', schema: LigneCommandeSchema },
        { name: 'Commande', schema: CommandeSchema }]
      )
    ],
    controllers: [ControllerController],
    providers: [LigneCommandeServiceService]
  })
export class LigneCommandeModule {}
