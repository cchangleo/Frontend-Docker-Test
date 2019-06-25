import * as React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './routes'

export default () => {
  return <Switch>
    {renderRoutes(Routes)}
  </Switch>
}
