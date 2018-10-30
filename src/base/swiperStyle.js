import styled from 'styled-components'

export const SwiperBtn =  styled.div`
    margin: 0 auto;
    .swiper-next,.swiper-prev{
            position: absolute;
            top: 50%;
            width: 40px;
            height: 40px;
            margin-top: -22px;
            z-index: 10;
            cursor: pointer;
            background-size: 10px 44px;
            background-position: center;
            background-repeat: no-repeat;
            font-weight: block;
            background-color: rgba(0,0,0,.4);
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            margin-right: -10px; 
        }
    .Rl{    
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            margin-left: -10px; 
    }    
`

export const SwiperPagination = styled.div`
    .swiper-pagination-bullet{
        color: white;
    }
    .swiper-pagination-bullet-active{
        color:rgba(0,0,0,.4);
    }
`