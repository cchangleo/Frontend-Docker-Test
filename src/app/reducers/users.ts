import { Actions } from '../actions/users'
import { UserInterface } from '../interfaces/users'

export interface State {
  name: string,
  users: Array<UserInterface>,
  loading: boolean
}

export const initialState: State = {
  name: '',
  users: [],
  loading: false
}

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case 'USERS__SET_USER_NAME':
      return { ...state, name: action.name }
    case 'USERS__FETCH_USERS':
      return { ...state, loading: true }
    case 'USERS__FETCH_USERS_SUCCESS':
      return { ...state, users: action.data, loading: false }
    default:
      return state
  }
}
