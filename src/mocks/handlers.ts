import { rest } from 'msw'
import elements from "../models/elements"
export default [
  rest.get('/elements', (req, res, ctx) => {
    return res(
      ctx.json({
        elements: elements
      })
    )
  })
]