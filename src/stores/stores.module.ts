import { Module } from '@nestjs/common'
import { StoresService } from '@/stores/services/stores.service'
import { StoresController } from '@/stores/controllers/stores.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Store, StoreSchema } from '@/stores/schemas/store.schema'
import { StoreRepository } from '@/stores/repositories/stores.repository'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])
  ],
  controllers: [StoresController],
  providers: [StoresService, StoreRepository]
})
export class StoresModule {}
