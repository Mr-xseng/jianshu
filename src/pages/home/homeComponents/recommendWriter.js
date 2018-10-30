import React, {Component} from 'react'
import {
    RecommendWrapper,
    RecommendItem
} from '../homeStyle'

class RecommendList extends Component{
    render () {
        const {recommendList} = this.props
        return (
            <RecommendWrapper>
                {
                    recommendList.toJS().map((item) => {
                        return (
                            <RecommendItem key={item}>
                                <img className="Img" src={item.pit} alt=""/>
                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

export default RecommendList