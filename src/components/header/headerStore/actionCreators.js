import * as types from './actionTypes'

export const inputFocused = () => ({
    type: types.INPUT_FOCUSED,
    focused: true
})

export const inputBlur = () => ({
    type: types.INPUT_BLUR,
    blur: false
})



