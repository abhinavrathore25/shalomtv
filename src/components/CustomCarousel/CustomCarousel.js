import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CustomCarousel.css';
import { Card, CardMedia } from '@mui/material';
import playButton from '../../assets/playButton.svg';

const CustomCarousel = ({ channelName, items }) => {
    return (
        <Swiper
            className='customCarousel'
            slidesPerView='auto'
            spaceBetween={10}
            // slidesPerGroup={3}
            // loopFillGroupWithBlank={true}
            navigation
            modules={[Navigation]}
        >
            {['Abhishekagni'].includes(channelName) ?
                Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide key={index}>
                    <div className='carouselOverlay'>
                        <img src={playButton} alt='play button' />
                    </div>
                        <Card className='customCarouselCard'>
                            <CardMedia
                            component='img'
                                image={items[0]}
                            />
                        </Card>
                    </SwiperSlide>
                )) :
                items.map((item, index) => (
                    <SwiperSlide key={index}>
                    <div className='carouselOverlay'>
                        <img src={playButton} alt='play button' />
                    </div>
                        <Card className='customCarouselCard'>
                            <CardMedia
                            component='img'
                                image={item}
                            />
                        </Card>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default CustomCarousel;