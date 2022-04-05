import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { StoresService } from '@/stores/services/stores.service'
import { CreateStoreDto } from '@/stores/dto/create-store.dto'
import { UpdateStoreDto } from '@/stores/dto/update-store.dto'
import { Response } from 'express'
import {
  getFormattedResponse,
  getResponseMessageFromPurpose
} from '@/utils/formatter-response'
import { Store } from '@/stores/schemas/store.schema'

@Controller('stores')
export class StoresController {
  private dataKey: string
  private dataKeys: string

  constructor(private readonly storesService: StoresService) {
    this.dataKey = 'store'
    this.dataKeys = 'stores'
  }

  @Get()
  async findAll(@Res() res: Response) {
    const stores = await this.storesService.findAll()

    return res.json(
      getFormattedResponse(
        HttpStatus.OK,
        getResponseMessageFromPurpose('get', Store.name),
        {
          [this.dataKeys]: stores
        }
      )
    )
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const store = await this.storesService.findOne(id)

    return res.json(
      getFormattedResponse(
        HttpStatus.OK,
        getResponseMessageFromPurpose('get', Store.name),
        {
          [this.dataKey]: store
        }
      )
    )
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createStoreDto: CreateStoreDto, @Res() res: Response) {
    await this.storesService.create(createStoreDto)

    return res.json(
      getFormattedResponse(
        HttpStatus.CREATED,
        getResponseMessageFromPurpose('create', Store.name)
      )
    )
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStoreDto: UpdateStoreDto,
    @Res() res: Response
  ) {
    await this.storesService.update(id, updateStoreDto)

    return res.json(
      getFormattedResponse(
        HttpStatus.OK,
        getResponseMessageFromPurpose('update', Store.name)
      )
    )
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.storesService.remove(id)

    return res.json(
      getFormattedResponse(
        HttpStatus.OK,
        getResponseMessageFromPurpose('delete', Store.name)
      )
    )
  }
}
