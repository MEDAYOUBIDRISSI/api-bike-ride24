import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { UserserviceService } from './userservice/userservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  UserSchema  from './schemas/user.schema'

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'User', schema: UserSchema }]
    )
  ],
  controllers: [ControllerController],
  providers: [UserserviceService]
})
export class UserModule {}
