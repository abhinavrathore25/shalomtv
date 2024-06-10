import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './LandingCarousel.css';
import image1 from '../../assets/LandingCarousel/image1.jpeg';
import image2 from '../../assets/LandingCarousel/image2.jpeg';
import image3 from '../../assets/LandingCarousel/image3.jpeg';

import landingkids1 from '../../assets/landingkids/landingkids1.jpeg';
import landingkids2 from '../../assets/landingkids/landingkids2.jpeg';
import landingkids3 from '../../assets/landingkids/landingkids3.jpeg';
import landingkids4 from '../../assets/landingkids/landingkids4.jpeg';
import landingkids5 from '../../assets/landingkids/landingkids5.jpeg';

function LandingCarousel({page}) {

  const homeImages = [image1, image2, image3];
  const kidsImages = [landingkids1, landingkids2, landingkids3, landingkids4, landingkids5];

  const mapimages = page === 'home' ? homeImages : kidsImages;

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={1000}
      pagination={{
        clickable: true,
      }}
      className='landingCarousel'
    >
      {
        mapimages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt='' className='landingCarouselImage' loading='lazy' />
            <div className='landingCarouselOverlay'></div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default LandingCarousel;