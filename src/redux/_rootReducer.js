import { combineReducers } from 'redux'
//Import individual reducers
import langReducer from './langReducer'
import themeReducer from './themeReducer'
import loginReducer from './loginReducer'
import layoutReducer from './layoutReducer'

const rootReducer = combineReducers({
    lang: langReducer,
    theme: themeReducer,
    login: loginReducer,
    layout: layoutReducer
})

export default rootReducer