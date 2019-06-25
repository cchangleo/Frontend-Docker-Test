import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/router'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from './store'
import Layout from './components/layout'

const initialData = JSON.parse(document.getElementById('initial-data')!.getAttribute('data-json')!)
const store = configureStore(initialData)

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept()
}
