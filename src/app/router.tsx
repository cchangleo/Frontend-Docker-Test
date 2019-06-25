import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import * as Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const AsyncOverview = Loadable({
  loader: () => import(/* webpackChunkName: 'overview' */ './containers/overview'),
  loading: Loading,
})

const AsyncInformation = Loadable({
  loader: () => import(/* webpackChunkName: 'information' */ './containers/information'),
  loading: Loading,
})

export default () => {
  return <Switch>
    <Route path='/overview' component={AsyncOverview} />
    <Route path='/info' component={AsyncInformation} />
    <Redirect to='/overview' />
  </Switch>
}
