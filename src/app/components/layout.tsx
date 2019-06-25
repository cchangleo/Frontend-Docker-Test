import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
  background: papayawhip;
}`

class Layout extends React.Component<any, any>{
  render() {
    return <React.Fragment>
      <GlobalStyle />
      <Header />
      { this.props.children }
      <Footer />
    </React.Fragment>
  }
}

export default Layout
