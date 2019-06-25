import * as React from 'react'
import Helmet from 'react-helmet'
import { Header, H1 } from '../styles/header'
import Tab from './tab'

export default () => {
  return <Header>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>React with Typescript and Webpack</title>
    </Helmet>
    <H1>Demo application</H1>
    <Tab />
  </Header>
}
