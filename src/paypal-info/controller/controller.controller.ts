import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreatePaypalInfoDTO } from '../dto/create-paypalinfo.dto';
import { PaypalInfoServiceService } from '../paypal-info-service/paypal-info-service.service'

@Controller('paypalinfo')
export class ControllerController {

    constructor(private PaypalInfoService:PaypalInfoServiceService){}

    @Post('/create')
    async createPaypalInfo(@Res() res,@Body() CreatePaypalInfoDTO:CreatePaypalInfoDTO)
    {
        const PaypalInfo = await this.PaypalInfoService.createPaypalInfo(CreatePaypalInfoDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'PaypalInfo successfuly created',
               PaypalInfo:PaypalInfo
            }
        )
    }

    @Get('/all')
    async getPaypalInfos()
    {
        const PaypalInfos = await this.PaypalInfoService.getPaypalInfos()
        return PaypalInfos
    }
}
