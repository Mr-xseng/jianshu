import headerReducer from '../components/header/headerStore/headerReducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer