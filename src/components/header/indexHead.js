import React, {Component} from 'react'
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

class Header extends Component{
    render () {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <SearchInput/>
                        <i className="iconfont">&#xe604;</i>
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
}
export default Header