import { all, fork } from 'redux-saga/effects'
import { usersProcess } from './users'

export function* rootSaga() {
  yield all([fork(usersProcess)]);
}
