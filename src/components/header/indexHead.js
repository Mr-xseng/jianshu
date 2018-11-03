import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionFunc from './headerStore/actionCreators'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Login,
    Writing,
    Adding,
    SearchInput,
    SearchTip,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchRefresh,
    SearchList,
    SearchItem
} from './headStyle'
import {CSSTransition} from 'react-transition-group'

class Header extends Component{
    render() {
        const {focused,inputFocused,inputBlur, list} = this.props
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={300}
                            in={focused}
                            classNames="slide"
                        >
                            <SearchInput onFocus={() => inputFocused(list)}
                                         onBlur={inputBlur}
                                         className={focused ? 'focused' : ''}
                            />
                        </CSSTransition>
                        <CSSTransition
                            timeout={300}
                            in={focused}
                            classNames="appear"
                        >
                            <i className={focused ?
                                'focused iconfont' : 'iconfont'}
                            >&#xe613;
                            </i>
                        </CSSTransition>
                        {
                            this.getSearchList()
                        }
                    </SearchWrapper>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                </Nav>
                <Adding>
                    <Login>注册</Login>
                    <Writing>
                        <i className="iconfont">&#xeee0;</i>
                        写文章
                    </Writing>
                </Adding>
            </HeaderWrapper>
        )
    }
    getSearchList () {
        const {  focused, list, page, totalPage, mouseIn, mouseEnterChange,
                 mouseLeaveChange,clickSearchRefresh} = this.props
        const searchList = []
        const jsList  = list.toJS()
        if (jsList.length) {
            for (let i = (page-1) * 10; i < (page*10); i++) {
                if (i >= jsList.length) {
                    break
                }
                searchList.push(
                    <SearchItem key={jsList[i]}>{jsList[i]}</SearchItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={mouseEnterChange}
                            onMouseLeave={mouseLeaveChange}
                >
                    <SearchTitle>
                        热门搜索
                        <i className="iconfont iconFresh"
                           ref={(spin) => {this.spinner = spin}}
                        >&#xe705;</i>
                        <SearchRefresh onClick={() => clickSearchRefresh(page, totalPage, this.spinner)}
                        >换一批</SearchRefresh>
                    </SearchTitle>
                    <SearchList>
                        {searchList}
                    </SearchList>
                    <SearchTip className="search-tip"></SearchTip>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocused (list) {
            const action = actionFunc.inputFocused()
            dispatch(action)
            const actionAxios = actionFunc.searchAxios()
            !list.toJS().length && dispatch(actionAxios)
        },
        inputBlur () {
            const action = actionFunc.inputBlur()
            dispatch(action)
        },
        mouseEnterChange () {
            const action = actionFunc.mouserEnter()
            dispatch(action)
        },
        mouseLeaveChange () {
            const action = actionFunc.mouseLeave()
            dispatch(action)
        },
        clickSearchRefresh (page, totalPage, spin) {
            let originAngle = parseFloat(spin.style.transform.replace(/[^0-9]/g, " "))
            if (originAngle) {
                originAngle = originAngle + 360
            } else {
                originAngle = 360
            }
            spin.style.transform = `rotate(${originAngle}deg)`
            if (page < totalPage) {
                const action = actionFunc.refreshList(page + 1)
                dispatch(action)
            } else {
                const action = actionFunc.refreshList(1)
                dispatch(action)
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)