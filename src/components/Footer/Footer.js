import React from 'react'
import './Footer.css';
import footerButton1 from '../../assets/Footer/footerButton1.svg';
import footerButton2 from '../../assets/Footer/footerButton2.svg';
import footerButton3 from '../../assets/Footer/footerButton3.png';
import { Grid } from '@mui/material';
import logo_shalom from '../../assets/logo_shalom.jpeg'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
        document.getElementsByTagName('body')[0].scrollTo(0, 0);
    }

    return (
        <Grid container sx={{
            alignItems: { lg: 'center' },
            padding: { lg: '0 70px' },
        }}>

            <Grid item sx={{ display: { xs: 'none', lg: 'block' } }} className='footerLogo'
                lg={4}>
                <img src={logo_shalom} alt="shalomtv logo" style={{ width: '60px' }} onClick={handleNavigation} />
            </Grid>

            <Grid item xs={12} lg={4}>
                <ul style={{ listStyle: 'none', direction: 'column' }} className='horizontalList'>
                    <li>Terms and condition</li>
                    <li>Privacy Policy</li>
                    <li>Faq</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </Grid>

            <Grid item xs={12} lg={4}>
                <div className='downloadButtons'>
                    {
                        [footerButton1, footerButton2, footerButton3].map((button, index) => (
                            <img key={index} src={button} alt='download button' className='downloadButton' loading='lazy' />
                        ))
                    }
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer;