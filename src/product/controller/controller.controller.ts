import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateProductDTO } from '../../product/dto/create-product.dto';
import { ProductserviceService } from '../../product/productservice/productservice.service' 

@Controller('product')
export class ControllerController {

    constructor(private productService:ProductserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() cretaeProductDTO:CreateProductDTO)
    {
        const product = await this.productService.createProduct(cretaeProductDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'product successfuly created',
               product:product
            } 
        )
    }

    @Get('/all')
    async getProducts(@Res() res)
    {
        const products = await this.productService.getProducts()
        return res.status(HttpStatus.OK).json(
            {
               message: 'products successfuly get',
               products
            }
        )
    }

    @Get('/:productID')
    async getProduct(@Res() res,@Param('productID') productID)
    {
        const product = await this.productService.getProduct(productID)
        if(!product) throw new NotFoundException('Product Does not existe');
        return res.status(HttpStatus.OK).json({product});
    }    

    @Delete('/delete')
    async deleteProduct(@Res() res ,@Query('productID') productID)
    {
        const categorieDeleted = await this.productService.deleteProduct(productID)
        if(!categorieDeleted) throw new NotFoundException('Product Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'product Deleted successfuly',
            categorieDeleted});
    }

    @Put('/update')
        async updateProduct(@Res() res ,@Body() createProductDTO:CreateProductDTO,@Query('productID') productID)
    {
        const categorieUpdated = await this.productService.updateProduct(productID,createProductDTO)
        if(!categorieUpdated) throw new NotFoundException('Product Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'product Updated successfuly',
            categorieUpdated});
    }


    @Get('bicyclette/all')
    async getBicycletteProducts(@Res() res)
    {
        const products = await this.productService.getBicycletteProducts()
        return res.status(HttpStatus.OK).json(
            {
               message: 'products successfuly get',
               products
            }
        )
    }

    @Get('accessoirevelo/all')
    async getAccessoireVeloProducts(@Res() res)
    {
        const products = await this.productService.getAccessoireVeloProducts()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Accessoire Velo Products successfuly get',
               products
            }
        )
    }

    @Get('accessoirecycliste/all')
    async getAccessoireCyclisteProducts(@Res() res)
    {
        const products = await this.productService.getAccessoireCyclisteProducts()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Accessoire Cycliste Products successfuly get',
               products
            }
        )
    }

    @Get('bikes/byCategorie/:paramID')
    async getProductbyCategorie(@Res() res,@Param('paramID') paramID)
    {
        const products = await this.productService.getProductbyCategorie(paramID)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }

    @Get('bikes/byUniver/:paramID')
    async getProductbyUniver(@Res() res,@Param('paramID') paramID)
    {
        const products = await this.productService.getProductbyUniver(paramID)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }

    @Get('accessoirecycliste/byCategorie/:paramID')
    async getaccessoirecyclistebyCategorie(@Res() res,@Param('paramID') paramID)
    {
        const products = await this.productService.getAccessoireCyclisteProductsByCategorie(paramID)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }

    @Get('accessoirevelo/byCategorie/:paramID')
    async getaccessoirevelobyCategorie(@Res() res,@Param('paramID') paramID)
    {
        const products = await this.productService.getAccessoireVeloProductsByCategorie(paramID)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }

    @Get('bikes/byMarque/:paramID')
    async getBikebyMarque(@Res() res,@Param('paramID') paramID)
    {
        const products = await this.productService.getBikebyMarque(paramID)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }

    @Get('accessoire/byMarque/:paramID')
    async getAccessoirebyMarque(@Res() res,@Param('paramID') paramID)
    {
        const products = await this.productService.getAccessoirebyMarque(paramID)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }

    @Get('searche/:MotsCles/:Type')
    async getProductBySearche(@Res() res,@Param('MotsCles') MotsCles,@Param('Type') Type)
    {
        const products = await this.productService.getProductBySearche(MotsCles,Type)
        if(!products) throw new NotFoundException('Products Does not existe');
        return res.status(HttpStatus.OK).json({products});
    }
}
