import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    WriterWrapper,
    WriterTop,
    BecomeWriter,
    WriterContent,
    WriterItem,
    WriterInfo,
    WriterLove
} from './writerStyle'
import * as actionFunc from '../detailStore/actionCreator'

class DetailWriter extends Component{
    componentDidMount () {
        this.props.getWriterList()
    }
    onEnter (index) {
        this.refs[`spin${index}`].style.boxShadow = `0 0 10px rgba(0,0,0,.4)`
    }
    onLeave (index) {
        this.refs[`spin${index}`].style.boxShadow = ``
    }
    render () {
        const {writerMoreList} = this.props
        this.onEnter = this.onEnter.bind(this)
        this.onLeave = this.onLeave.bind(this)
        return (
            <WriterWrapper>
                <WriterTop>
                    <img className="Img" src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" alt=""/>
                    <BecomeWriter>
                        <i className="iconfont">&#xe624;</i>
                        如何成为签约作家
                    </BecomeWriter>
                </WriterTop>
                <WriterContent>
                    {
                        writerMoreList.toJS().map((item, index) => {
                            return (
                                <WriterItem key={item.id}
                                            ref={"spin" + index}
                                            className={(index + 1) % 3 === 0 ? 'active': ''}
                                            onMouseEnter={() => this.onEnter(index)}
                                            onMouseLeave={() => this.onLeave(index)}

                                >
                                    <img className="Img" src={item.avatar_source} alt=""/>
                                    <WriterInfo>
                                        <h1 className="title">{item.nickname}</h1>
                                        <p className="content">
                                            {item.total_likes_count}
                                        </p>
                                        <WriterLove>
                                            <i className="iconfont">&#xe641;</i>
                                            关注
                                        </WriterLove>
                                    </WriterInfo>
                                </WriterItem>
                            )
                        })
                    }
                </WriterContent>
            </WriterWrapper>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        writerMoreList: state.getIn(['detail', 'writerMoreList'])
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getWriterList () {
            dispatch(actionFunc.getWriterList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailWriter)