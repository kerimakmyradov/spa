import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import postReducer from './reducers'
import { watchFetchPosts } from './sagas'


const sagaMiddleware=createSagaMiddleware()
const store=createStore(postReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchPosts)

export default store