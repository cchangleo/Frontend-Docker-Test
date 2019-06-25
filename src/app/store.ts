import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import { rootSaga } from './sagas'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (preloadedState: Object = {}) => {
  const store = createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ))

  sagaMiddleware.run(rootSaga)
  return store
}
