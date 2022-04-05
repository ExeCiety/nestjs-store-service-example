import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type StoreDocument = Store & Document

@Schema({ timestamps: true })
export class Store {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  description: string
}

export const StoreSchema = SchemaFactory.createForClass(Store)
