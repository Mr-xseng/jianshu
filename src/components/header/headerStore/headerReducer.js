import * as types from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case types.INPUT_FOCUSED:
            return state.set('focused', action.focused)
        case types.INPUT_BLUR:
            return  state.set('focused', action.blur)
        case types.SEARCH_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case types.MOUSE_ENTER:
            return state.set('mouseIn',action.mouseIn)
        case types.MOUSE_LEAVE:
            return state.set('mouseIn',action.mouseIn)
        case types.SEARCH_LIST_REFRESH:
            return state.set('page',action.page)
        default:
            return state
    }
}
