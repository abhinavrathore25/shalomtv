import React from 'react'
import CustomCarousel from '../CustomCarousel/CustomCarousel';
import './LandingPageCarousels.css';

import abhishek from '../../assets/AbhinshekAgni/abhishek.jpeg';

import channel1 from '../../assets/channels/channel1.jpeg';
import channel2 from '../../assets/channels/channel2.jpeg';

import night1 from '../../assets/Night/night1.jpeg';
import night2 from '../../assets/Night/night2.jpeg';
import night3 from '../../assets/Night/night3.jpeg';

import movies from '../../assets/kids/movies/movies.jpeg'

import kp1 from '../../assets/kids/kidsprogram/kp1.jpeg';
import kp2 from '../../assets/kids/kidsprogram/kp2.jpeg';
import kp3 from '../../assets/kids/kidsprogram/kp3.jpeg';
import kp4 from '../../assets/kids/kidsprogram/kp4.jpeg';
import kp5 from '../../assets/kids/kidsprogram/kp5.jpeg';

import c1 from '../../assets/kids/cartoons/c1.jpeg';
import c2 from '../../assets/kids/cartoons/c2.jpeg';
import c3 from '../../assets/kids/cartoons/c3.jpeg';

const carouselsArrayLanding = [
    {
        name: 'Our Channels',
        image: [channel1, channel2],
    },
    {
        name: 'Night Vigil',
        image: [night1, night2, night3],
    },
    {
        name: 'Abhishekagni',
        image: [abhishek],
    },
]

const carouselsArrayKids = [
    {
        name: 'Movies',
        image: [movies],
    },
    {
        name: 'Kids Program',
        image: [kp1, kp2, kp3, kp4, kp5, kp1, kp2, kp3, kp4, kp5, ],
    },
    {
        name: 'Cartoons',
        image: [c1, c2, c3, c1, c1, c2, c3, c3, c3, c1, c2, c2],
    },
]

const LandingPageCarousels = ({ page }) => {
    const carouselsArray = page === 'home' ? carouselsArrayLanding : carouselsArrayKids;

    return (
        <>
            {
                carouselsArray.map((carousel, index) => (
                    <section key={index} id={carousel.name} className='carouselSections'>
                        <div className='carouselHeading'>
                            <h4 style={{ color: 'white', margin: '10px 0px' }}>{carousel.name}</h4>
                            <h4 className='viewAll'>View All</h4>
                        </div>
                        <CustomCarousel items={carousel.image} channelName={carousel.name} />
                    </section>
                ))
            }
        </>
    )
}

export default LandingPageCarousels;