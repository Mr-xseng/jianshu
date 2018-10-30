import {fromJS} from 'immutable'
import * as types from './actionTypes'
const defaultState = fromJS({
    topList: [],
    contentList: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_TOP_LIST:
            return state.set('topList', action.list)
        case types.GET_CONTENT_LIST:
            return state.set('contentList', action.list)
        case types.GET_RECOMMEND_LIST:
            return state.set('recommendList', action.list)
        default:
            return state
    }
}