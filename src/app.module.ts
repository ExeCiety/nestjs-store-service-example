import 'dotenv/config'
import { Module } from '@nestjs/common'
import { StoresModule } from '@/stores/stores.module'
import { MongooseModule } from '@nestjs/mongoose'

const dbUrl: string = String(process.env.DB_URL) || ''

@Module({
  imports: [MongooseModule.forRoot(dbUrl), StoresModule],
  controllers: [],
  providers: []
})
export class AppModule {}
