import * as types from './actionTypes'

const defaultState = {
    focused: false
}
export default (state = defaultState, action) => {
    if (action.type === types.INPUT_FOCUSED) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = action.focused
        return newState
    }
    if (action.type === types.INPUT_BLUR) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = action.blur
        return newState
    }
    return state
}
