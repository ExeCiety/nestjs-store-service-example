import { Injectable } from '@nestjs/common'
import { Store, StoreDocument } from '@/stores/schemas/store.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { UpdateStoreDto } from '../dto/update-store.dto'
import { CreateStoreDto } from '../dto/create-store.dto'

@Injectable()
export class StoreRepository {
  constructor(
    @InjectModel(Store.name) private storeModel: Model<StoreDocument>
  ) {}

  async findAll(): Promise<Store[]> {
    return this.storeModel.find()
  }

  async findOne(id: string): Promise<Store> {
    return this.storeModel.findOne({ _id: id })
  }

  async create(store: CreateStoreDto): Promise<Store> {
    const createdStore = new this.storeModel(store)
    return createdStore.save()
  }

  async findOneAndUpdate(id: string, store: UpdateStoreDto): Promise<Store> {
    return this.storeModel.findOneAndUpdate({ _id: id }, store)
  }

  async delete(id: string) {
    return this.storeModel.deleteOne({ _id: id })
  }
}
