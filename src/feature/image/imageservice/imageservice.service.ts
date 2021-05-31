import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Image } from '../../image/interfaces/image.interface'
import { CreateImageDTO } from '../../image/dto/create-image.dto';

@Injectable()
export class ImageserviceService {

    constructor(@InjectModel('Image') private readonly ImageModel:Model<Image>){}

    async getImages():Promise<Image[]>{
        const Images= await this.ImageModel.find();
        return Images;
     }
 
     async getImage(ImageID:string):Promise<Image>{
         const Image= await this.ImageModel.findById(ImageID);
         return Image;
      }

    async createImage(CreateImageDTO:CreateImageDTO):Promise<Image>{
        const Image = new this.ImageModel(CreateImageDTO);
        return await Image.save();
    }

    // async createMultipleImage(CreateImageDTO:CreateImageDTO[]):Promise<Image[]>{
    //     const Image = new this.ImageModel(CreateImageDTO);
    //     return await Image.save();
    // }

    async deleteImage(ImageID:string){
        const deleteImage = await this.ImageModel.findByIdAndRemove(ImageID);
        return deleteImage;
    }
}
