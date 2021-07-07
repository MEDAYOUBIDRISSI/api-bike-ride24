import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put, BadRequestException,Req, UnauthorizedException } from '@nestjs/common';
import { StatisticServiceService } from '../statistic-service/statistic-service.service'
import { Response,Request } from 'express'

@Controller('statistic')
export class ControllerController {

    constructor(private statisticService:StatisticServiceService){}

    @Get('/totalOrders')
    async getOtalOrders(@Res() res)
    {
        return "hello ayoub";
        // const totalOrders = await this.statisticService.getOtalOrders()
        // return res.status(HttpStatus.OK).json(
        //     {
        //        message: 'totalOrders successfuly get',
        //        totalOrders
        //     }
        // )
    }

}
