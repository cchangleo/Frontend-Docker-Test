import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import InformationComponent from '../components/information'
import { State } from '../reducers'
import { setUserName } from '../actions/users'

const mapStateToProps = (state: State) => ({
  userName: state.users.name
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserName: (name: string) => {
    dispatch(setUserName(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationComponent)
