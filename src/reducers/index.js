import counterReducer from './counter'
import loggedReducer from './isLogged'
import minuteReducer from './minutes'
import startedReducer from './start'
import ansArrayReducer from './ansArray'
import activeReducer  from './active'
import showReducer from './show'

import {combineReducers} from 'redux'

const allReducers =combineReducers({
    counter:counterReducer,
    islogged:loggedReducer,
    minutes:minuteReducer,
    start:startedReducer,
    ansArray:ansArrayReducer,
    active:activeReducer,
    show:showReducer
});

export default allReducers;