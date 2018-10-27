import React from 'react'
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
    SearchWrapper
} from './headStyle'
import {CSSTransition} from 'react-transition-group'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={300}
                        in={props.focused}
                        classNames="slide"
                    >
                        <SearchInput onFocus={props.inputFocused}
                                     onBlur={props.inputBlur}
                                     className={props.focused ? 'focused' : ''}
                        />
                    </CSSTransition>
                    <CSSTransition
                        timeout={300}
                        in={props.focused}
                        classNames="appear"
                    >
                        <i className={props.focused ? 'focused iconfont' : 'iconfont'}
                        >&#xe604;
                        </i>
                    </CSSTransition>
                </SearchWrapper>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
            </Nav>
            <Adding>
                <Login>注册</Login>
                <Writing>
                    <i className="iconfont">&#xe606;</i>
                    写文章
                </Writing>
            </Adding>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocused () {
            const action = actionFunc.inputFocused()
            dispatch(action)
        },
        inputBlur () {
            const action = actionFunc.inputBlur()
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)