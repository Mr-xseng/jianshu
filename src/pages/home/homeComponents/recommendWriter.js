import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem
} from '../homeStyle'
import * as actionFunc from '../homeStore/actionCreator'

class RecommendList extends Component{
    componentDidMount(){
        this.props.getRecommendList()
    }
    render () {
        const {recommendList} = this.props
        return (
            <RecommendWrapper>
                {
                    recommendList.toJS().map((item) => {
                        return (
                            <RecommendItem key={item.pit}>
                                <img className="Img" src={item.pit} alt=""/>
                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList'])
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendList(){
            const action = actionFunc.getRecommendList()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendList)