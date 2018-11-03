import * as types from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'
const topList = (list) => ({
    type: types.GET_TOP_LIST,
    list: fromJS(list)
})

const contentList = (list, page) => ({
    type: types.GET_CONTENT_LIST,
    list: fromJS(list),
    page: fromJS(page)
})

const recommendList = (list) => ({
    type: types.GET_RECOMMEND_LIST,
    list: fromJS(list)
})

const writerList = (list, pageNum) => ({
    type: types.GET_WRITER_LIST,
    list: fromJS(list),
    pageNum
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

export const getContentList = (page) => {
    return (dispatch) => {
        axios.get('/api/list.json?page=' + page).then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const action = contentList(data, page)
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

export const getMoreContentList = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json?page=' + page).then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const action = contentList(data, page)
                dispatch(action)
            }
        })
    }
}

export const getDownloadMouseIn = () => ({
    type: types.DOWNLOAD_MOUSE_ENTER,
    downloadMouse: true
})

export const getDownloadMouseOut =() => ({
    type: types.DOWNLOAD_MOUSE_LEAVE,
    downloadMouse: false
})

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('/api/writerList.json').then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const totalPage = Math.ceil(res.data.list.length / 5)
                const action = writerList(data, totalPage)
                dispatch(action)
            }
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const changeWriter = (page) => ({
    type: types.CHANGE_WRITER,
    page
})

export const writerMore = () => ({
    type: types.MORE_WRITER
})