import React, {Component} from 'react'
import {
    ToplistWrapper,
    TopItem,
    HotTop
} from '../homeStyle'

class TopList extends Component{
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

export default TopList