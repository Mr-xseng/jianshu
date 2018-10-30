import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 30px auto 0 auto;
`

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 14px;
    margin-bottom: 100px;
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const ToplistWrapper = styled.div`
    width: 625px;
    height: 104px;
    margin-top: 20px;
    overflow:hidden;
    border-bottom: 1px solid  #dcdcdc85;
    padding-bottom: 30px;
`

export const TopItem = styled.div`
    height: 32px;
    float:left;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    overflow:hidden;
    cursor: pointer;    
    margin-right: 20px;
    margin-top: 16px;
    .Img{
        width: 32px;
        height: 32px;
        float: left;
    }
    .dec{
        padding: 0 10px;
        line-height: 32px;
        float:right;
        font-size: 14px;
        text-align: center;
        background: #f7f7f7;
    }
`
export const HotTop = styled.div`
    float: left;
    padding-left: -10px;
    font-size: 14px;
    color: #787878;
    line-height: 32px;
    margin-top: 16px;
    cursor: pointer;
    .iconfont{
        font-size: 12px;
        margin-left: 5px;
        font-weight: bold;
    }
    
`

export const ListWrapper = styled.div`
    width: 625px;
    margin-top: 22px;
`
export const ListItem = styled.div`
    width: 625px;
    border-bottom: 1px solid #dcdcdc85;
    margin-top: 25px; 
    padding-bottom:20px;
    cursor: pointer;
`

export const ItemContent = styled.div`
    width: 623px;
    height: 107px;
    overflow: hidden;
    .Img{
        float: right;
        width:125px;
        height: 100px;
        background-size: contain;
    }
`

export const ContentInfo = styled.div`
    float: left;
    width: 493px;
    height: 48px;
    .title{
        margin: -5px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .content{
        font-size: 13px;
        line-height: 24px;
        color: #999; 
    }
`

export const ContentWriter = styled.div`
    margin-top: 10px;
    font-size: 11px;
    color: #999; 
    cursor: pointer;
    .commend,.love{
        margin-left: 10px;
        .commend-num, .love-num{
            margin-left: 2px;
        }
    }
`

export const MoreContent = styled.div`
    margin-top: 30px;
    width: 100%;
    line-height: 40px;
    border-radius: 20px;
    background-color: #a5a5a5;
    text-align: center;
    color: white;
    cursor: pointer;
`

export const RecommendWrapper = styled.div`
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    .Img{
        width: 100%;
        height: 50px;
        background-size: contain;
    }
`