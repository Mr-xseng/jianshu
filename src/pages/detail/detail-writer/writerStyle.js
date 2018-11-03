import styled from 'styled-components'

export const WriterWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 200px;
`

export const WriterTop = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 30px;
    position: relative;
    cursor: pointer;
    Img{
        width: 960px;
        height: 100px;
        background-size: contain;
    }
`

export const BecomeWriter = styled.div`
    position: absolute;
    right: 30px;
    top: 41px;
    color: #fff;
    font-size: 17px;
    .iconfont{
        font-size: 17px;
        margin-right: 3px;
    }
`

export const WriterContent = styled.div`
    width: 100%;
    margin-top: 40px;
    overflow: hidden;
    text-align: center; 
`

export const WriterItem = styled.div`
    cursor: pointer;
    position: relative;
    width: 297px;
    height: 300px;
    margin-right: 15px;
    margin: 40px 30px 30px 2px;
    float:left;
    border: 1px solid #e6e6e6
    border-radius: 4px;
    padding: 0 60px;
    box-sizing: border-box;
    background-color: hsla(0,0%,71%,.1); 
    // box-shadow: 0 0 10px rgba(0,0,0,.4);
    &.active{
        margin-right: 0;
    }
    .Img{
        position: absolute;
        top:-40px;
        right: 110.5px;
        width: 80px;
        height: 80px;
        background-size: contain;
        border-radius: 50%;
    }
`
export const WriterInfo = styled.div`
    text-align: center;
    margin-top: 60px;
    .title{
        font-size: 21px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .content{
            margin-top: 20px;
            min-height: 50px;
            font-size: 13px;
            line-height: 25px;
    }
`

export const WriterLove = styled.div`
    display: inline-block;
    width: 100px;
    padding: 8px 0;
    background: #42c02e;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #42c02e
    border-radius: 40px;
    margin-top: 15px;
    color: #fff;
    .iconfont{
        font-size: 13px;
        font-weight: bold;
        margin-right: 3px;
    }
`