import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from './counterReducer';


const store = createStore(counterReducer, applyMiddleware(thunk))

export default store;