import { join } from 'path'
import express = require('express')
import * as Loadable from 'react-loadable'
import * as renderer from './renderer'
import { config } from 'dotenv'
config({ path:  join(__dirname, '..', '..', '.env') })

const app: express.Application = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const config = require('../../webpack.dev.config')

  const compiler = webpack(config)
  app.use(webpackHotMiddleware(compiler))
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  )
}

app.use('/', express.static('dist'))
app.get('*', renderer.get)

Loadable.preloadAll().then(() => {
  app.listen(port, () => console.log(`App is listening on port ${port}`))
})
