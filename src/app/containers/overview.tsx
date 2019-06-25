import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import OverviewComponent from '../components/overview'
import { State } from '../reducers'
import { fetchUsers } from '../actions/users'

const mapStateToProps = (state: State) => ({
  users: state.users.users,
  loading: state.users.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewComponent)
