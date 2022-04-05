import { Injectable } from '@nestjs/common'
import { CreateStoreDto } from '@/stores/dto/create-store.dto'
import { UpdateStoreDto } from '@/stores/dto/update-store.dto'
import { StoreRepository } from '@/stores/repositories/stores.repository'
import { Store } from '../schemas/store.schema'

@Injectable()
export class StoresService {
  constructor(private storeRepo: StoreRepository) {}

  findAll(): Promise<Store[]> {
    return this.storeRepo.findAll()
  }

  findOne(id: string): Promise<Store> {
    return this.storeRepo.findOne(id)
  }

  create(createStoreDto: CreateStoreDto) {
    return this.storeRepo.create(createStoreDto)
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.storeRepo.findOneAndUpdate(id, updateStoreDto)
  }

  remove(id: string) {
    return this.storeRepo.delete(id)
  }
}
