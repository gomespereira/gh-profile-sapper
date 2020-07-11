import { config } from 'dotenv'
import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

config()

const { PORT, NODE_ENV, GITHUB_TOKEN } = process.env
const dev = NODE_ENV === 'development'

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req, res) => ({ GITHUB_TOKEN })
    })
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
