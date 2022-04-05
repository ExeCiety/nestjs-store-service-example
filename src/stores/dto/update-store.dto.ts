import { IsString } from 'class-validator'

export class UpdateStoreDto {
  @IsString()
  name: string

  @IsString()
  description: string
}
