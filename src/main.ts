import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { Logger } from '@nestjs/common'

const appHost: string = process.env.APP_HOST || '127.0.0.1'
const appPort: number = Number(process.env.APP_PORT) || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(appPort, appHost)

  Logger.log(
    `Server running on http://${appHost}:${appPort}`,
    'Nest Application'
  )
}

bootstrap()
