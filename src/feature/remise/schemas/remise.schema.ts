import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RemiseDocument = Remise & Document;

@Schema({ timestamps: true })
export class Remise {
  
  @Prop({ default:'null' })
  libelle: string;

  @Prop({ default:'null' })
  pourcentage: number;

  @Prop({ default:'null' })
  dateDebut: Date;

  @Prop({ default:'null' })
  dateFine: Date;
  
}

const RemiseSchema = SchemaFactory.createForClass(Remise);

export default RemiseSchema;