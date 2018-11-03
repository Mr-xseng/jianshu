import * as types from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

const writerList = (list) => ({
    type: types.WRITER_MORE_LIST,
    list: fromJS(list)
})

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('/api/writerMoreList.json').then((res) => {
            if (res.data.success) {
                const data = res.data.list
                const action = writerList(data)
                dispatch(action)
            }
        }).catch((e) => {
            console.log(e)
        })
    }
}