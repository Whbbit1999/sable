import { defineEventHandler, readBody } from 'h3'
import { errorResponse, successResponse } from '../utils/response'

export default defineEventHandler((event) => {
  const notices = Array.from({ length: 10 }).map(() => Math.random)
  return successResponse(notices, { currentPage: 1, pageSize: 10, total: 49 })
})
