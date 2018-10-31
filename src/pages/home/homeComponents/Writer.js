import React, {Component} from 'react'
import {
    WriterWrapper,
    WriterText,
    WriterInfo,
    WriterItem,
    AddWriter
} from "../homeStyle";
import {connect} from 'react-redux'
import * as actionFunc from '../homeStore/actionCreator'

class Writer extends Component{
    componentDidMount(){
        this.props.getWriterList()
    }
    render () {
        return (
            <WriterWrapper>
                <WriterText>
                    <div className="IntroWriter">推荐作者</div>
                    <div className="refreshIcon">
                        <i className="iconfont">&#xe705;</i>
                        <span>换一批</span>
                    </div>
                </WriterText>
                <WriterInfo>
                    {this.getWriter()}
                </WriterInfo>
            </WriterWrapper>
        )
    }
    getWriter () {
        const {writerList, page} = this.props
        const newList = []
        const jsList = writerList.toJS()
        if (jsList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                const item = jsList[i]
                newList.push(
                    <WriterItem key={item.id}>
                        <img className="Img" src={item.avatar_source} alt=""/>
                        <div className="text">
                            <h3 className="title">{item.nickname}</h3>
                            <p className="content">写了
                                <span>{item.total_wordage}</span>
                                K字~
                                <span>{item.total_likes_count}</span>
                                喜欢
                            </p>
                        </div>
                        <AddWriter>
                            <i className="iconfont">&#xe641;</i>
                            关注
                        </AddWriter>
                    </WriterItem>
                )
            }
        }
        return newList
    }
}

export const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList']),
        page: state.getIn(['home', 'page']),
        totalPage: state.getIn(['home', 'totalPage'])
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        getWriterList(){
            dispatch(actionFunc.getWriterList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Writer)
