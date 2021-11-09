import {UserReducer,ShipmentsReducer,languageReducer} from '../reducers'
import {createStore,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        UserReducer,
        ShipmentsReducer,
        languageReducer
    }),
    composeWithDevTools()
)
export default store