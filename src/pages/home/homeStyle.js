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
    margin-top: 60px;
    margin-bottom: 200px;
`

export const HomeRight = styled.div`
    width: 290px;
    float: right;
     margin-top: 60px;
    
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
    margin-top:-4px;
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

export const DownloadWrapper = styled.div`
    width: 280px;
    margin-top: 5px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    overflow: hidden;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    .Img{
        float: left;
        width: 60px;
        height: 60px;
    }
`

export const ContentWrapper = styled.div`
    float: left;
    margin-left: 10px;
    font-size: 14px;
    margin-top: 12px;
    cursor: pointer;
    position: relative;
    .title{
        .iconfont{
            font-size: 12px;
            margin-left: 8px;
            font-weight: bold;
        }
    }
    .content{
        color: #a69999
        margin-top: 5px;
    }
`

export const DownloadBig = styled.div`
    position: absolute;
    top: 183px;
    right: 233px;
    width: 190px;
    height:190px;
    box-shadow: 2px 2px 29px rgba(0,0,0,.6);
    box-sizing: border-box;
    padding: 5px 0 0 5px;
    background: #fff;
    .Img{
        display: inline-block;
        width: 180px;
        height:180px;
    }
    &.slide-enter{
        transition: all .3s;
    }
    &.slide-enter-active{
        opacity: 0
    }
    &.slide-enter{
        transition: all .3s;
    }
    &.slide-enter-active{
        opacity: 1
    }
`

export const ContentBorder = styled.div`
    &.download-tip::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 373px;
        right: 315px;
        border: 12px solid transparent;
        border-bottom-color: white;
        transform: rotate(180deg);
        z-index: 100;
    }
`

export const WriterWrapper = styled.div`
    width: 280px;
    margin-top: 30px;
    cursor: pointer;
`

export const WriterText = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: -3px;
    .IntroWriter{
        float:left;
        font-size: 14px;
        color: #969696;
    }
    .refreshIcon{
        float:right;
        font-size: 14px;
        color: #969696;
        .iconfont{
            font-size: 12px;
            margin-right: 5px;
            transition: all .5s;
            transform: rotate(180deg);
        }
    }
`

export const WriterInfo = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 15px;
`
export const WriterItem = styled.div`
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    .Img{
        float:left;
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .text{
        float: left;
        margin-left: 10px;
        .title{
            font-size:14px;
            color:#333333
            margin-top: 5px;
        }
        .content{
            margin-top: 9px;
            font-size: 12px;
            color: #969696;
        }
    }
`
export const AddWriter = styled.div`
    float:right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    .iconfont{
        font-size: 12px;
        font-weight: bold;
        margin-top: -1px;
        margin-right: 1px;
    }
`
export const WriterMore = styled.a.attrs({
    href: '/detail/writer'
})`
    width: 100%;
    display: block;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
`