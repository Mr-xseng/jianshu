import React, {Component} from 'react'
import {
    WriterWrapper,
    WriterText,
    WriterInfo,
    WriterItem,
    AddWriter,
    WriterMore
} from "../homeStyle";
import {connect} from 'react-redux'
import * as actionFunc from '../homeStore/actionCreator'

class Writer extends Component{
    componentDidMount(){
        this.props.getWriterList()
    }
    render () {
        const {changeWriterBtn, page, totalPage, moreClick} = this.props
        return (
            <WriterWrapper>
                <WriterText>
                    <div className="IntroWriter">推荐作者</div>
                    <div className="refreshIcon">
                        <i className="iconfont"
                           ref={(spin) => {this.refreshIcon = spin}}
                        >&#xe705;
                        </i>
                        <span onClick={() => changeWriterBtn(page, totalPage, this.refreshIcon)}>
                            换一批</span>
                    </div>
                </WriterText>
                <WriterInfo>
                    {this.getWriter()}
                </WriterInfo>
                <WriterMore onClick={moreClick}>
                    查看更多
                </WriterMore>
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
        },
        changeWriterBtn(page, totalPage, spin){
            let originAngle = parseFloat(spin.style.transform.replace(/[^0-9]/g, " "))
            console.log(spin.style.transform)
            if (originAngle) {
                originAngle = originAngle + 360
            } else {
                originAngle = 360
            }
            spin.style.transform = `rotate(${originAngle}deg)`
            if (page < totalPage) {
                dispatch(actionFunc.changeWriter(page + 1))
            } else {
                dispatch(actionFunc.changeWriter(1))
            }
        },
        moreClick () {

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Writer)
