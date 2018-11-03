import {fromJS} from 'immutable'
import * as types from './actionTypes'
const defaultState = fromJS({
    writerMoreList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case types.WRITER_MORE_LIST:
            return state.set('writerMoreList', action.list)
        default:
            return state
    }
}
