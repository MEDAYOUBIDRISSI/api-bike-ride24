import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserserviceService } from '../userservice/userservice.service' 

@Controller('user')
export class ControllerController {

    
    constructor(private userService:UserserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeUserDTO:CreateUserDTO)
    {
        const User = await this.userService.createUser(cretaeUserDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'User successfuly created',
               User:User
            }
        )
    }

    @Get('/all')
    async getUsers(@Res() res)
    {
        const Users = await this.userService.getUsers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Users successfuly get',
               Users
            }
        )
    }

    @Get('/:UserID')
    async getUser(@Res() res,@Param('UserID') UserID)
    {
        const User = await this.userService.getUser(UserID)
        if(!User) throw new NotFoundException('User Does not existe');
        return res.status(HttpStatus.OK).json({User});
    }    

    @Delete('/delete')
    async deleteUser(@Res() res ,@Query('UserID') UserID)
    {
        const UserDeleted = await this.userService.deleteUser(UserID)
        if(!UserDeleted) throw new NotFoundException('User Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'User Deleted successfuly',
            UserDeleted});
    } 

    @Put('/update')
        async updateUser(@Res() res ,@Body() cretaeUserDTO:CreateUserDTO,@Query('UserID') UserID)
    {
        const UserUpdated = await this.userService.updateUser(UserID,cretaeUserDTO)
        if(!UserUpdated) throw new NotFoundException('User Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'User Updated successfuly',
            UserUpdated});
    }
}
