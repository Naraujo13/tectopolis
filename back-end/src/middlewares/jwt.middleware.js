import jwt from 'jsonwebtoken'
import { unauthorized } from './../utils/errorHandler'

require('dotenv').config()

export default function (ctx, next) {
  let token = ctx.request.headers['authorization']

  if (token === undefined) {
    unauthorized(ctx, 'token required')
    return
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) { unauthorized(ctx, 'Invalid Token') } else {
        ctx.request.decoded = decoded
        next()
      }
    })
  } else {
    unauthorized(ctx, 'token required')
  }
}
