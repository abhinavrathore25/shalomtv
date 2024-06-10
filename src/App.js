import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import './App.css';
import Footer from './components/Footer/Footer';
import LandingCarousel from './components/LandingCarousel/LandingCarousel';
import LandingPageCarousels from './components/LandingPageCarousels/LandingPageCarousels';
import Navbar from './components/Navbar/Navbar';
import { Home, Money, Search } from '@mui/icons-material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  useEffect } from 'react';

function App() {

const handleScroll = () => {
    const position = window.scrollY;
    let element = document.getElementsByClassName('customAppBar')[0];

    if (position < 100) {
        element.classList.add('bigAppBar');
      } else {
      element.classList.remove('bigAppBar');
    }

    console.log(position > 100)
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <main>
        <section id='shalomNavbar'>
          <header>
            <Navbar />
          </header>
        </section>
        <section id='landingPageCarouselContainer'>
          <LandingCarousel page='home' />
        </section>

        <LandingPageCarousels page='home' />
        <footer>
          <Footer />
        </footer>

        <Box sx={{ textAlign: 'center', color: 'white', fontSize: '14px' }} className='copyright'>
          <hr />
          © Copyright 2023 Shalom Television All Right Reserved
        </Box>

        <section>
          <BottomNavigation
            showLabels
            className="customBottomNav"
          >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Search" icon={<Search />} />
            <BottomNavigationAction label="Donate" icon={<Money />} />
          </BottomNavigation>
        </section>
      </main>,
    },
    {
      path: "/kids",
      element: <main>
        <section id='shalomNavbar'>
          <header>
            <Navbar />
          </header>
        </section>
        <section id='landingPageCarouselContainer'>
          <LandingCarousel page='kids' />
        </section>

        <LandingPageCarousels page='kids' />
        <footer>
          <Footer />
        </footer>

        <Box sx={{ textAlign: 'center', color: 'white', fontSize: '14px' }} className='copyright'>
          <hr />
          © Copyright 2023 Shalom Television All Right Reserved
        </Box>

        <section>
          <BottomNavigation
            showLabels
            className="customBottomNav"
          >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Search" icon={<Search />} />
            <BottomNavigationAction label="Donate" icon={<Money />} />
          </BottomNavigation>
        </section>
      </main>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;