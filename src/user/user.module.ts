import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { UserserviceService } from './userservice/userservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import  UserSchema  from './schemas/user.schema'
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature(
      [{ name: 'User', schema: UserSchema }]
    ),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [ControllerController],
  providers: [UserserviceService],
})
export class UserModule {}
