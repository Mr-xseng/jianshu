import headerReducer from '../components/header/headerStore/headerReducer'
import homeReducer from '../pages/home/homeStore/homeReducer'
import detailReducer from '../pages/detail/detailStore/detailReducer'
import {combineReducers} from 'redux-immutable'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer