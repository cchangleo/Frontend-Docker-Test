import * as React from 'react'
import Helmet from 'react-helmet'
import { Content } from '../styles/content'
import { UserInterface } from '../interfaces/users'

interface Props {
  users: Array<UserInterface>,
  loading: boolean,
  fetchUsers: () => void
}

class Overview extends React.Component<Props> {

  handleFetchUsers = () => {
    const { fetchUsers } = this.props
    fetchUsers()
  }

  render() {
    const { users, loading } = this.props
    return <React.Fragment>
      <Helmet title='Overview Page' />
      <Content>
        <div>
          <button onClick={this.handleFetchUsers}>Fetch Users</button>
          {
            loading ? <span>LOADING...</span> :
            users && users.map((user) => <div>
              <span>{ user.name }</span> / <span>{ user.username }</span> / <span>{ user.email }</span>
            </div>)
          }
        </div>
      </Content>
    </React.Fragment>
  }
}

export default Overview
