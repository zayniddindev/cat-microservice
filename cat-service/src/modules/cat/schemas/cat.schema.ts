import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Cat {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, min: 1, max: 30 })
  age: number;
}

export type CatDocument = HydratedDocument<Cat>;

export const CatSchema = SchemaFactory.createForClass(Cat);
