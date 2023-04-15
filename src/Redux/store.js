import {legacy_createStore} from 'redux'
import counterReducer from './Reducer';

const mystore= legacy_createStore(counterReducer)

export default mystore;