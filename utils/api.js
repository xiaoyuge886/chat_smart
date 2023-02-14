import { post, get } from './request'

export const getToken = (params) => post('/v1/token/', params)
export const chatList = (params) => get('/v1/chat/', params)
