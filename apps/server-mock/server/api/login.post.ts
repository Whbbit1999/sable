import { Buffer } from 'node:buffer'
import { defineEventHandler, readBody } from 'h3'
import { errorResponse, successResponse } from '../utils/response'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)
  if (username !== 'sable') {
    return errorResponse('用户名错误')
  }
  const token = Buffer.from(`${username}&${password}`).toString('base64')

  return successResponse({
    token,
  })
})
