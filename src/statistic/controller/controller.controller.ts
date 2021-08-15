import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put, BadRequestException,Req, UnauthorizedException } from '@nestjs/common';
import { StatisticServiceService } from '../statistic-service/statistic-service.service'
import { Response,Request } from 'express'

@Controller('statistic')
export class ControllerController {

    constructor(private statisticService:StatisticServiceService){}

    @Get('/totalOrders')
    async getOtalOrders(@Res() res)
    {
        const totalOrders = await this.statisticService.getTotalOrders()
        return res.status(HttpStatus.OK).json(
            {
               message: 'totalOrders successfuly get',
               totalOrders
            }
        )
    }

    @Get('/totalOrdersPaid')
    async getTotalOrdersPaid(@Res() res)
    {
        const totalOrders = await this.statisticService.getTotalOrdersPaid()
        return res.status(HttpStatus.OK).json(
            {
               message: 'getTotalOrdersPaid successfuly get',
               totalOrders
            }
        )
    }

    @Get('/totalBuyers')
    async getTotalBuyers(@Res() res)
    {
        const totalBuyers = await this.statisticService.getBuyers()
        return res.status(HttpStatus.OK).json(
            {
               message: 'totalBuyers successfuly get',
               totalBuyers
            }
        )
    }

    @Get('/productSolde')
    async getProductSolde(@Res() res)
    {
        const LigneCommandes = await this.statisticService.getProductSolde()
        var prixProduct=0;
        var ProductSolde=0;
        for(var i = 0; i < LigneCommandes.length; i++)
        {
            if(LigneCommandes[i].product)
            {
                prixProduct=LigneCommandes[i].qte*LigneCommandes[i].product.prixVent
                ProductSolde=ProductSolde+prixProduct
            }
            
        }
        return res.status(HttpStatus.OK).json(
            {
               message: 'ProductSolde successfuly get',
               ProductSolde
            }
        )
    }

    @Get('/CountClients')
    async getCountsClients(@Res() res)
    {
        const CountClients = await this.statisticService.getCountsClients()
        return res.status(HttpStatus.OK).json(
            {
               message: 'CountClients successfuly get',
               CountClients
            }
        )
    }

    @Get('/TopClients')
    async getTopClients(@Res() res)
    {
        const TopClients = await this.statisticService.getTopClients()
        return res.status(HttpStatus.OK).json(
            {
               message: 'TopClients successfuly get',
               TopClients
            }
        )
    }

    @Get('/ProductSales')
    async getProductSales(@Res() res)
    {
        const ProductSales = await this.statisticService.getProductSales()
        return res.status(HttpStatus.OK).json(
            {
               message: 'ProductSales successfuly get',
               ProductSales
            }
        )
    }

    @Get('/BestSellingProduct')
    async getBestSellingProduct(@Res() res)
    {
        const ProductSales = await this.statisticService.getBestSellingProduct()
        return res.status(HttpStatus.OK).json(
            {
               message: 'ProductSales successfuly get',
               ProductSales
            }
        )
    }

    @Get('/TypeByProduct')
    async getTypeByProduct(@Res() res)
    {
        const ProductByType = await this.statisticService.getTypeByProduct()
        return res.status(HttpStatus.OK).json(
            {
               message: 'getTypeByProduct successfuly get',
               ProductByType
            }
        )
    }

    @Get('/SalesByUniverOfProduct')
    async getSalesByUniverOfProduct(@Res() res)
    {
        const SalesByUniverOfProduct = await this.statisticService.getSalesByUniverOfProduct()
        return res.status(HttpStatus.OK).json(
            {
               message: 'getSalesByUniverOfProduct successfuly get',
               SalesByUniverOfProduct
            }
        )
    }

    @Get('/SalesProductMulti')
    async getSalesProductMulti(@Res() res)
    {
        const SalesProductMulti = await this.statisticService.getproductSalesMulti()
        return res.status(HttpStatus.OK).json(
            {
               message: 'getproductSalesMulti successfuly get',
               SalesProductMulti
            }
        )
    }

    @Get('/ProductSalesForPublication')
    async getProductSalesForPublication()
    {
        const ProductSales = await this.statisticService.getTopProductForPublication()
        return ProductSales
    }

    @Get('/getPlayers')
    async getTopPlayers()
    {
        const ProductSales = await this.statisticService.getTopPlayers()
        return ProductSales
    }

}
