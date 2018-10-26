import styled from 'styled-components'
import LogoPic from '../../static/image/jianshulogo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
   href: '/'
})` position: absolute;
    top: 0;
    left:0;
    display: block;
    width:100px;
    height: 56px;
    background: url(${LogoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 945px;
    height: 56px;
    margin 0 auto;
    padding-right: 20px;
`

export const NavItem = styled.div`
    font-size: 17px;
    padding:0 15px;
    box-sizing: border-box;
    line-height: 56px;
    color: #333;
    &.left{
        float: left;
    };
    &.active{
        color: #ea6f5a;
    };
    &.right{
        float: right;
        color: #969696;
    };
`
export const Adding = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 0 10px;
`

export const Login = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 38px;
    border: 1px solid #ea6f5a;
    display: inline-block;
    border-radius: 19px;
    color: #ea6f5a;
    margin-top: 9px;
    margin-right: 20px;
`
export const Writing = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 38px
    border: 1px solid #ea6f5a;
    display: inline-block;
    border-radius: 19px;
    color: white;
    background: #ea6f5a;
    margin-top: 9px;
`
export const SearchWrapper = styled.div`
    float: left;
    height: 38px;
    position: relative;
    .iconfont{
        position:absolute;
        right: 5px;
        top: 12px;
        width: 30px;
        line-height: 30px;
        border: 1px solid #eee;
        box-sizing: border-box;
        border-radius: 15px;
        text-align: center;
    }
`

export const SearchInput = styled.input.attrs({
    placeholder: "search"
})`
    width; 160px;
    height: 38px;
    border: none;
    border-radius:19px;
    box-sizing: border-box;
    outline: none;
    padding: 0 30px 0 20px;
    font-size; 17px;
    background: #eeeeee;
    margin-left: 30px;
    margin-top: 9px;
    &::placeholder{
        color: #999;
    }
`