import * as React from 'react'
import Helmet from 'react-helmet'
import { Content } from '../styles/content'

interface Props {
  userName: string,
  setUserName: (name: string) => void
}

class Information extends React.Component<Props> {

  handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { setUserName } = this.props
    setUserName(e.currentTarget.value)
  }

  render() {
    const { userName } = this.props
    return <React.Fragment>
      <Helmet title='Information Page' />
      <Content>
        <div>
          Name: <input value={userName} onChange={this.handleInputChange}/>
          <br/>
        {
          userName && `Your name is ${userName}`
        }
        </div>
      </Content>
    </React.Fragment>
  }
}

export default Information
