import React, {Component} from 'react'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'
import {
    SwiperBtn,
    SwiperPagination
} from "./swiperStyle";
const swiperList = [
    "//upload.jianshu.io/admin_banners/web_images/4528/cfbfae092b2d7f29a4bc52e906dfd89a5e8ac16d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    "//upload.jianshu.io/admin_banners/web_images/4486/240ebd0212e4fce11577abbe3169c9345637ee58.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    "//upload.jianshu.io/admin_banners/web_images/4520/83fadd2df821d52fb277287ac4a189e8d21b7b65.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
    "//upload.jianshu.io/admin_banners/web_images/4522/53ecdc42d68411d6b57a016b08136457eb23d5a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
]

class SwiperPit extends Component{
    constructor(props) {
        super(props);
        this.not_appearBtn = this.not_appearBtn.bind(this)
        this.appearBtn = this.appearBtn.bind(this)
    }
    componentDidMount(){
        this.appearNext.style.display = 'none'
        this.appearPrev.style.display = 'none'
        new Swiper('.swiper-container', {
            loop: true,   
            autoplay:{      
                delay: 10000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true ,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    render () {
        return (
            <div className="swiper-container"
                 onMouseLeave={this.appearBtn}
                 onMouseEnter={this.not_appearBtn}
                 style={{overflow: 'hidden'}}
                 >
                <div className="swiper-wrapper">
                    {
                        swiperList.map((item) => {
                            return (
                                <div className="swiper-slide"
                                     key={item}
                                     style={{backgroundImage: `url(${item})`,
                                         backgroundSize:'contain',
                                         width: '625px',
                                         height: '270px'
                                     }}
                                ></div>
                            )
                        })
                    }
                </div>
                <SwiperPagination className='swiper-pagination'>
                </SwiperPagination>
                <SwiperBtn>
                  <div className='swiper-button-next swiper-next' ref={(next) => {this.appearNext = next}}></div>
                  <div className='swiper-button-prev swiper-prev Rl'  ref={(prev) => {this.appearPrev = prev}}></div>
                </SwiperBtn>
            </div>
        )
    }
    appearBtn() {
        this.appearNext.style.display = 'none'
        this.appearPrev.style.display = 'none'
        // console.log(this.appearNext.style.display)
    }
    not_appearBtn() {
        this.appearNext.style.display = null
        this.appearPrev.style.display = null
        // console.log(this.appearNext.style.display)
    }
}

export default SwiperPit