import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CustomCarousel.css';
import { Card, CardMedia } from '@mui/material';

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
                        <Card className='customCarouselCard'>
                            <CardMedia
                            component='img'
                                image={items[0]}
                                // className='customCarouselImage'
                            />
                            {/* <img src={items[0]} alt='' className='customCarouselImage' /> */}
                        </Card>
                    </SwiperSlide>
                )) :
                items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card className='customCarouselCard'>
                            <CardMedia
                            component='img'
                                image={item}
                                // className='customCarouselImage'
                            />
                        </Card>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default CustomCarousel;