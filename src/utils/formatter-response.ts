import { HttpStatus } from '@nestjs/common'

export const getFormattedResponse = (
  httpStatus: HttpStatus,
  message: string,
  data: any = null
) => {
  return {
    status: httpStatus,
    message,
    errors: [],
    data
  }
}

export const getResponseMessageFromPurpose = (
  purpose: string,
  modelName?: string
) => {
  let message = ''
  if (!modelName) modelName = 'Data'

  switch (purpose) {
    case 'get':
      message = `${modelName} was successfully obtained`
      break
    case 'create':
      message = `${modelName} created successfully`
      break
    case 'update':
      message = `${modelName} updated successfully`
      break
    case 'delete':
      message = `${modelName} deleted successfully`
      break

    case 'register':
      message = `${modelName} was successfully registered`
      break

    case 'login':
      message = `${modelName} was successfully logged in`
      break
  }

  return message
}
