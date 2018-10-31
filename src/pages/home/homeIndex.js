import React, {Component} from 'react'
import SwiperPit from '../../base/swiper'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./homeStyle"
import TopList from './homeComponents/topList'
import List from './homeComponents/list'
import RecommendList from './homeComponents/recommendWriter'
import DownloadApp from './homeComponents/download'
import Writer from './homeComponents/Writer'

class Home extends Component{
    render () {
        return (
            <HomeWrapper className="homeWrapper">
                <HomeLeft className="home-left">
                    <SwiperPit />
                    <TopList/>
                    <List/>
                </HomeLeft>
                <HomeRight className="home-right">
                    <RecommendList/>
                    <DownloadApp/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home