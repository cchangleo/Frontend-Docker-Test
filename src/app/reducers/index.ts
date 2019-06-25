import { combineReducers } from 'redux'
import { reducer as usersReducer, State as UsersState } from './users'

export interface State {
  users: UsersState
}

export const rootReducer = combineReducers({
  users: usersReducer
})
