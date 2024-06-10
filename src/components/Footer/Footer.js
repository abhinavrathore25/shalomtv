import React from 'react'
import './Footer.css';
import footerButton1 from '../../assets/Footer/footerButton1.svg';
import footerButton2 from '../../assets/Footer/footerButton2.svg';
import footerButton3 from '../../assets/Footer/footerButton3.png';
import { Grid } from '@mui/material';

const Footer = () => {
    return (
        <Grid container>

            {/* <div className='footerLogo'>
                <img src="https://shalomtv.com/wp-content/uploads/2021/06/shalomtv-logo.png" alt="shalomtv logo" />
            </div> */}

            <Grid item xs={12}>
                <ul style={{ listStyle: 'none', direction: 'column' }} className='horizontalList'>
                    <li>Terms and condition</li>
                    <li>Privacy Policy</li>
                    <li>Faq</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </Grid>

            <Grid item xs={12}>
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