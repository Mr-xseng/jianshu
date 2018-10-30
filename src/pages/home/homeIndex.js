import React, {Component} from 'react'
import SwiperPit from '../../base/swiper'
import * as actionFunc from './homeStore/actionCreator'
import {connect} from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./homeStyle"
import TopList from './homeComponents/topList'
import List from './homeComponents/list'
import RecommendList from './homeComponents/recommendWriter'

class Home extends Component{
    componentDidMount(){
        this.props.getTopList()
        this.props.getContentList()
        this.props.getRecommendList()
    }
    render () {
        const {topList, contentList, recommendList}  = this.props
        return (
            <HomeWrapper className="homeWrapper">
                <HomeLeft className="home-left">
                    <SwiperPit />
                    <TopList topList={topList}/>
                    <List contentList={contentList}/>
                </HomeLeft>
                <HomeRight className="home-right">
                    <RecommendList recommendList={recommendList}/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        topList: state.getIn(['home', 'topList']),
        contentList: state.getIn(['home', 'contentList']),
        recommendList: state.getIn(['home', 'recommendList'])
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getTopList () {
            const action = actionFunc.getTopList()
            dispatch(action)
        },
        getContentList () {
            const action = actionFunc.getContentList()
            dispatch(action)
        },
        getRecommendList () {
            const action = actionFunc.getRecommendList()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)