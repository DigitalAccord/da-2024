    import React from 'react'
    import './craousel.scss'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import card from '../../assets/card.png'
    import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

    const Craousel = () => {
    return (
        <>
        <div className='container1'>
            <h1>Discover Our:</h1>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            leftSlides={true}
            loop={true}
            slidesPerView={"auto"}
        
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
            <SwiperSlide>
            <div className='scard'>
            <img src={card} />
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='scard'>
            <img src={card} />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='scard'>
            <img src={card} />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='scard'>
            <img src={card} />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='scard'>
            <img src={card} />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='scard'>
            <img src={card} />
            </div>
            </SwiperSlide>
            
            <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            </div>
            <div className="swiper-button-next slider-arrow">
                {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            </div>
            <div className="swiper-pagination"></div>
            </div>
        </Swiper>
        </div>
        </>
    )
    }

    export default Craousel