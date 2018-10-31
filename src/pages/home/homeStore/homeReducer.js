import {fromJS} from 'immutable'
import * as types from './actionTypes'
const defaultState = fromJS({
    topList: [],
    contentList: [],
    recommendList: [],
    page: 1,
    DownloadMoveIn: false,
    writerPage: 1,
    totalPage: 1,
    writerList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_TOP_LIST:
            return state.set('topList', action.list)
        case types.GET_RECOMMEND_LIST:
            return state.set('recommendList', action.list)
        case types.GET_CONTENT_LIST:
            return state.merge({
                contentList: state.get('contentList').concat(action.list),
                page: action.page
            })
        case types.DOWNLOAD_MOUSE_ENTER:
            return state.set('DownloadMoveIn', action.downloadMouse)
        case types.DOWNLOAD_MOUSE_LEAVE:
            return state.set('DownloadMoveIn', action.downloadMouse)
        case types.GET_WRITER_LIST:
            return state.merge({
                writerList: action.list,
                totalPage: action.pageNum
            })
        default:
            return state
    }
}