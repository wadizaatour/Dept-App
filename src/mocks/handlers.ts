import { rest } from 'msw'
import elements from "../models/elements"
import client from "../models/client"
export default [
  rest.get('/elements', (req, res, ctx) => {
    return res(
      ctx.json({
        elements: elements
      })
    )
  }),
  rest.get('/client', (req, res, ctx) => {
    return res(
      ctx.json({
        client: client
      })
    )
  }),
  
  rest.get('/client', (req, res, ctx) => {
    const clientId = req.url.searchParams.get('id')
    return res(
      ctx.json({
        clientId
      })
    )
  })
]