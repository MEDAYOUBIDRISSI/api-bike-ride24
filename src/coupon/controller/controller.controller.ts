import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateCouponDTO } from '../dto/create-coupon.dto';
import { CouponServiceService } from '../coupon-service/coupon-service.service'

@Controller('coupon')
export class ControllerController {

    constructor(private couponService:CouponServiceService){}

    @Post('/create')
    async createCoupon(@Res() res,@Body() createCouponDTO:CreateCouponDTO)
    {
        const Coupon = await this.couponService.createCoupon(createCouponDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Coupon successfuly created',
               Coupon:Coupon
            }
        )
    }

    @Get('/all')
    async getCoupons()
    {
        const Coupons = await this.couponService.getCoupons()
        return Coupons
    }

    @Get('/:couponID')
    async getCoupon(@Res() res,@Param('couponID') couponID)
    {
        const Coupon = await this.couponService.getCoupon(couponID)
        if(!Coupon) throw new NotFoundException('Coupon Does not existe6');
        return res.status(HttpStatus.OK).json({Coupon});
    }   

    @Get('/byCodeCoupon/:codeCoupon')
    async getCouponByCodeCoupon(@Res() res,@Param('codeCoupon') codeCoupon)
    {
        const Coupon = await this.couponService.getCouponByCodeCoupon(codeCoupon)
        if(!Coupon) throw new NotFoundException('Coupon Does not existe6');
        return res.status(HttpStatus.OK).json({Coupon});
    }

    @Put('/update')
    async updatePost(@Res() res ,@Body() createCouponDTO:CreateCouponDTO,@Query('couponID') couponID)
{
    const couponUpdated = await this.couponService.updateCoupon(couponID,createCouponDTO)
    if(!couponUpdated) throw new NotFoundException('Coupon Does not existe');
    return res.status(HttpStatus.OK).json({
        message:'Coupon Updated successfuly',
        couponUpdated});
}
    

    @Delete('/delete')
    async deleteCoupon(@Res() res ,@Query('couponID') couponID)
    {
        const CouponDeleted = await this.couponService.deleteCoupon(couponID)
        if(!CouponDeleted) throw new NotFoundException('post Does not existe88');
        return res.status(HttpStatus.OK).json({
            message:'post Deleted successfuly',
            CouponDeleted});
    }

}
