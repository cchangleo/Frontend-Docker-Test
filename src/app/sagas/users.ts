import { put, takeLatest } from 'redux-saga/effects'
import { get } from '../api'
import { fetchUsers, fetchUsersSuccess } from '../actions/users'

function* fetchUsersProcess() {
  const { data } = yield get('https://jsonplaceholder.typicode.com/users')
  yield put(fetchUsersSuccess(data))
}

export function* usersProcess() {
  yield takeLatest(fetchUsers().type, fetchUsersProcess)
}
