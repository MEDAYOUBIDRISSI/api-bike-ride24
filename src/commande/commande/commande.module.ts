import { Module } from '@nestjs/common';
import { ControllerController } from '../controller/controller.controller';
import { CommandeServiceService } from '../commande-service/commande-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import  CommandeSchema  from '../schemas/commande.schema'

@Module({
    imports:[
      MongooseModule.forFeature(
        [{ name: 'Commande', schema: CommandeSchema }]
      )
    ], 
    controllers: [ControllerController],
    providers: [CommandeServiceService]
  })
export class CommandeModule {

}
