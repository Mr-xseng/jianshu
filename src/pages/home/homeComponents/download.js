import React, {Component} from 'react'
import * as actionFunc from '../homeStore/actionCreator'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import{
    DownloadWrapper,
    ContentWrapper,
    DownloadBig,
    ContentBorder
} from '../homeStyle'

class DownloadApp extends Component{
    render () {
        const {onEnter,onLeave} = this.props
        return (
            <DownloadWrapper onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img className="Img" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                <ContentWrapper>
                    <h3 className="title">下载简书App
                        <i className="iconfont">&#xe625;</i>
                    </h3>
                    <p className="content">随之随地发现和创作内容</p>
                </ContentWrapper>
                {this.getDownload()}
                <ContentBorder className="download-tip"></ContentBorder>
            </DownloadWrapper>
        )
    }
    getDownload () {
        if (this.props.DownloadMoveIn) {
            return (
                <CSSTransition
                    timeout={500}
                    classNames="slide"
                >
                    <DownloadBig>
                        <img className="Img" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    </DownloadBig>
                </CSSTransition>
            )
        }
    }
}

export const mapStateToProps = (state) => {
    return {
        DownloadMoveIn: state.getIn(['home', 'DownloadMoveIn'])
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onEnter () {
            dispatch(actionFunc.getDownloadMouseIn())
        },
        onLeave () {
            dispatch(actionFunc.getDownloadMouseOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadApp)