import {rest} from "msw"
import { categData } from "../TestFolders/CategoryApiData"
export const handlers=[
  rest.get('https://opentdb.com/api_category.php', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(
     categData
      ))
  }),
    
]