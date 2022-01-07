import { combineReducers } from 'redux'
//Import individual reducers
import langReducer from './langReducer'
import themeReducer from './themeReducer'
import loginReducer from './loginReducer'
import layoutReducer from './layoutReducer'
import hintReducer from './hintReducer'
import mapReducer from './mapReducer'

const rootReducer = combineReducers({
    lang: langReducer,
    theme: themeReducer,
    login: loginReducer,
    layout: layoutReducer,
    hint: hintReducer,
    map: mapReducer
})
export default rootReducer