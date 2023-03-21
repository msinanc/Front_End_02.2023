import { legacy_createStore as createStore } from 'redux';
import holderReducer from './holderReducer'



const store = createStore(holderReducer)

export default store;