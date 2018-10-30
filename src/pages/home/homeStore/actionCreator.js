import * as types from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'
const topList = (list) => ({
    type: types.GET_TOP_LIST,
    list: fromJS(list)
})

const contentList = (list) => ({
    type: types.GET_CONTENT_LIST,
    list: fromJS(list)
})

const recommendList = (list) => ({
    type: types.GET_RECOMMEND_LIST,
    list: fromJS(list)
})

export const getTopList = () => {
    return (dispatch) => {
        axios.get('/api/topList.json').then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const action = topList(data)
                dispatch(action)
            }
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const getContentList = () => {
    return (dispatch) => {
        axios.get('/api/list.json').then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const action = contentList(data)
                dispatch(action)
            }
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        axios.get('/api/recommendList.json').then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const action = recommendList(data)
                dispatch(action)
            }
        }).catch((e) => {
            console.log(e)
        })
    }
}