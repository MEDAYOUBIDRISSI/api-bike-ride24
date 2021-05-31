import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { CreateImageDTO } from '../dto/create-image.dto';
import { ImageserviceService } from '../imageservice/imageservice.service' 

@Controller('image')
export class ControllerController {

    constructor(private ImageService:ImageserviceService){}

    @Post('/create')
    async createPoste(@Res() res,@Body() createImageDTO:CreateImageDTO)
    {
        const Image = await this.ImageService.createImage(createImageDTO)
        return res.status(HttpStatus.OK).json(
            {
               message: 'Image successfuly created',
               Image:Image
            }
        )
    }

    @Get('/all')
    async getImages(@Res() res)
    {
        const Images = await this.ImageService.getImages()
        return res.status(HttpStatus.OK).json(
            {
               message: 'Images successfuly get',
               Images
            }
        )
    }

    @Get('/:ImageID')
    async getImage(@Res() res,@Param('ImageID') ImageID)
    {
        const Image = await this.ImageService.getImage(ImageID)
        if(!Image) throw new NotFoundException('Image Does not existe');
        return res.status(HttpStatus.OK).json({Image});
    }    

    @Delete('/delete')
    async deleteImage(@Res() res ,@Query('ImageID') ImageID)
    {
        const ImageDeleted = await this.ImageService.deleteImage(ImageID)
        if(!ImageDeleted) throw new NotFoundException('Image Does not existe');
        return res.status(HttpStatus.OK).json({
            message:'Image Deleted successfuly',
            ImageDeleted});
    } 
}
