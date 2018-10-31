import React, {Component} from 'react'
import {connect} from 'react-redux'
import{
    ListWrapper,
    ListItem,
    ItemContent,
    ContentInfo,
    ContentWriter,
    MoreContent
} from '../homeStyle'
import * as actionFunc from "../homeStore/actionCreator";

class List extends Component{
    componentDidMount () {
        this.props.getContentList(1)
    }
    render () {
        const {contentList, getMoreContent, page} = this.props
        return (
            <ListWrapper>
                {
                    contentList.toJS().map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ItemContent>
                                    <ContentInfo>
                                        <h3 className="title">
                                            {item.title}
                                        </h3>
                                        <p className="content">
                                            {item.content}
                                        </p>
                                        <ContentWriter>
                                            <span>{item.writer}</span>
                                                <span className="commend">
                                                <i className="iconfont">&#xe61d;</i>
                                                <i className="commend-num">{item.commend}</i>
                                            </span>
                                            <span className="love">
                                                <i className="iconfont">&#xe601;</i>
                                                <i className="love-num">{item.love}</i>
                                            </span>
                                        </ContentWriter>
                                    </ContentInfo>
                                    <img className="Img" src={item.pit} alt=""/>
                                </ItemContent>
                            </ListItem>
                        )
                    })
                }
                <MoreContent
                    onClick={() => getMoreContent(page)}
                >
                    阅读更多</MoreContent>
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contentList: state.getIn(['home', 'contentList']),
        page: state.getIn(['home', 'page'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContentList (page) {
            const action = actionFunc.getContentList(page)
            dispatch(action)
        },
        getMoreContent (page) {
            dispatch(actionFunc.getMoreContentList(page + 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)