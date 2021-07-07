import { Module } from '@nestjs/common';
import { ControllerController } from '../controller/controller.controller';
import { StatisticServiceService } from '../statistic-service/statistic-service.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[],
    controllers: [ControllerController],
    providers: [StatisticServiceService]
  })
export class StatisticModule {}
