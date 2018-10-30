import headerReducer from '../components/header/headerStore/headerReducer'
import homeReducer from '../pages/home/homeStore/homeReducer'
import {combineReducers} from 'redux-immutable'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})

export default reducer