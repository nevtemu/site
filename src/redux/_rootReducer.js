import { combineReducers } from 'redux'
//Import individual reducers
import langReducer from './langReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
    lang: langReducer,
    theme: themeReducer
})

export default rootReducer