export type Actions =
  { type: 'USERS__SET_USER_NAME', name: string } |
  { type: 'USERS__FETCH_USERS' } |
  { type: 'USERS__FETCH_USERS_SUCCESS', data: any }

export const setUserName = (name: string): Actions => ({ type: 'USERS__SET_USER_NAME', name })

export const fetchUsers = (): Actions => ({ type: 'USERS__FETCH_USERS' })

export const fetchUsersSuccess = (data: any): Actions => ({ type: 'USERS__FETCH_USERS_SUCCESS', data })
