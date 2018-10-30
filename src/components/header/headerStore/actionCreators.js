import * as types from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'

const searchList = (data, pageNum) => ({
    type: types.SEARCH_LIST,
    data: fromJS(data),
    totalPage: pageNum
})

export const refreshList = (page) => ({
    type: types.SEARCH_LIST_REFRESH,
    page
})

export const inputFocused = () => ({
    type: types.INPUT_FOCUSED,
    focused: true
})

export const inputBlur = () => ({
    type: types.INPUT_BLUR,
    blur: false
})


export const searchAxios = () => {
    return (dispatch) => {
        axios.get('/api/searchlist.json').then((res) => {
            if (res.data.success) {
                const pageNum = Math.ceil(res.data.list.length / 10)
                const action = searchList(res.data.list, pageNum)
                dispatch(action)
            }
        }).catch(() => {
            console.log('error');
        })
    }
}

export const mouserEnter = () => ({
    type: types.MOUSE_ENTER,
    mouseIn: true
})

export const mouseLeave = () => ({
    type: types.MOUSE_LEAVE,
    mouseIn: false
})

