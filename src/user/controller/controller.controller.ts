import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put, BadRequestException,Req, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserserviceService } from '../userservice/userservice.service' 
import { JwtService } from '@nestjs/jwt';
import { Response,Request } from 'express'

@Controller('user')
export class ControllerController {

    
    constructor(private userService:UserserviceService,private jwtService: JwtService){}

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
    ////////Admins
    @Get('admin/all')
    async getAdmins(@Res() res)
    {
        const Users = await this.userService.getAdminUsers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Admins successfuly get',
               Users
            }
        )
    }

    ////////Livreurs
    @Get('livreur/all')
    async getLivreurs(@Res() res)
    {
        const Users = await this.userService.getLivreurUsers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Livreurs successfuly get',
               Users
            }
        )
    }

    ////////Editeurs
    @Get('editeur/all')
    async getEditeurs(@Res() res)
    {
        const Users = await this.userService.getEditeurUsers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Editeurs successfuly get',
               Users
            }
        )
    }

    ////////Clients
    @Get('client/all')
    async getClients(@Res() res)
    {
        const Users = await this.userService.getClientUsers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Clients successfuly get',
               Users
            }
        )
    }

    ////////Supportr Users
    @Get('supportuser/all')
    async getSupportUsers(@Res() res)
    {
        const Users = await this.userService.getSupportrUsers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Support Users successfuly get',
               Users
            }
        )
    }

    @Get('/edite/:UserID')
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

    @Post('/login')
    async login(@Body('email') email:string,@Body('password') password:string,@Res({passthrough:true}) response:Response)
    {
        const User = await this.userService.findOne({email})
        
        if(!User)
        {
            throw new BadRequestException('Email Not Existe')
        }
        if(password != User.password)
        {
            throw new BadRequestException('Password incorect')
        }
        const payload = { id: User.id };
        const jwt = await this.jwtService.signAsync(payload)
         
        response.cookie('jwt',jwt,{httpOnly:true})

        return {
            message:'Connection valide',
            jwt,
            payload
        };
    }

    @Get('/auth/coki')
    async getCoki(@Req() req:Request)
    {
        try{
            const cookies= req.cookies['jwt']

            const data=await this.jwtService.verifyAsync(cookies)

            if(!data)
            {
                throw new UnauthorizedException()
            }

            const User=await this.userService.findOne({_id:data['id']})
            return User;
        }
        catch(e)
        {
            throw new UnauthorizedException()
        }
        
    }

    @Post('/auth/logout')
    async logout(@Res({passthrough:true}) response:Response)
    {
        response.clearCookie('jwt')
        return {
            message:"Logout success"
        }
    }


    @Get('/auth/:UserID')
    async getUserAuth(@Res() res,@Param('UserID') UserID)
    {
        const User = await this.userService.getUser(UserID)
        if(!User) throw new NotFoundException('User Does not existe');
        return res.status(HttpStatus.OK).json({User});
    }   

    @Post('/login/ecommerce')
    async loginEcommerce(@Body('email') email:string,@Body('nom') nom:string,@Body('prenom') prenom:string,@Body('imgProfile') imgProfile:string,@Res({passthrough:true}) response:Response)
    {
        var User = await this.userService.getUserByEmail({email})
        
        
        if(!User)
        {
            User = await this.userService.createUser_ecommerce_google(email,nom,prenom,imgProfile)
        }

        const payload = { id: User.id };
        const jwt = await this.jwtService.signAsync(payload)
         
        response.cookie('jwt',jwt,{httpOnly:true})

        return {
            message:'Connection valide',
            jwt,
            payload
        };
       
    }
    


}
