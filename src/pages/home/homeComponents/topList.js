import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    ToplistWrapper,
    TopItem,
    HotTop
} from '../homeStyle'
import * as actionFunc from '../homeStore/actionCreator'

class TopList extends Component{
    componentDidMount(){
        this.props.getTopList()
    }
    render () {
        const {topList} = this.props
        return (
            <ToplistWrapper>
                {
                    topList.toJS().map((item) => {
                        return (
                            <TopItem key={item.name}>
                                <img className="Img" src={item.pit} alt=""/>
                                <h3 className="dec">{item.name}</h3>
                            </TopItem>
                        )
                    })
                }
                <HotTop>更多热门专题
                    <i className="iconfont">&#xe625;</i>
                </HotTop>
            </ToplistWrapper>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        topList: state.getIn(['home', 'topList'])
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getTopList () {
            const action = actionFunc.getTopList()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopList)