import * as React from 'react'
import * as Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const AsyncOverview = Loadable({
  loader: () => import(/* webpackChunkName: 'overview' */ '../containers/overview'),
  modules: ['../containers/overview'],
  loading: Loading
})

const AsyncInformation = Loadable({
  loader: () => import(/* webpackChunkName: 'information' */ '../containers/information'),
  modules: ['../containers/information'],
  loading: Loading
})

export default [
  {
    component: AsyncOverview,
    path: '/overview',
    exact: true
  },
  {
    component: AsyncInformation,
    path: '/info',
    exact: true
  }
]
