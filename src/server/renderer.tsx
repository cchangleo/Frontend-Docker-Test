import { Request, Response } from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import * as Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'
import Layout from '../app/components/layout'
import Routes from '../app/router/routes'
import { configureStore } from '../app/store'
//@ts-ignore
import * as stats from '../../dist/react-loadable.json'

export async function get(req: Request, res: Response) {
  const store = configureStore()
  const helmetContent = Helmet.renderStatic()
  const sheet = new ServerStyleSheet()
  let modules = []
  try {
    const html = renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            <Layout>
              {renderRoutes(Routes)}
            </Layout>
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    )
    const meta = `
      ${helmetContent.meta.toString()}
      ${helmetContent.title.toString()}
      ${helmetContent.link.toString()}
    `.trim()
    const style = sheet.getStyleTags()
    // TODO determine which actions should be executed on server
    const preloadedState = store.getState()
    const bundles = getBundles(stats, modules)
    res.send(renderFullPage(html, meta, style, preloadedState, bundles))
  } catch (e) {
    res.status(500).send(e.message)
  }
}

const renderFullPage = (html, meta, style, preloadedState, bundles) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${meta}
        ${style}
      </head>
      <body>
        <div id="root">${html}</div>
        <script id="initial-data" type="text/plain" data-json="${escape(JSON.stringify(preloadedState))}"></script>
        <script src="/js/main.bundle.js"></script>
        ${bundles.map(bundle => {return `<script src="/${bundle.file}"></script>`}).join('')}
      </body>
    </html>
  `
}

const escape = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
