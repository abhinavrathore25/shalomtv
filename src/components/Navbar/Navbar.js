import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo_shalom from '../../assets/logo_shalom.jpeg';
import { Search } from '@mui/icons-material';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{
    name: 'Home',
    link: '/',
}, {
    name: 'Radio',
    link: '/',
}, {
    name: 'Kids TV',
    link: '/kids',
}];

function Navbar(props) {

    const navigate = useNavigate();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', boxShadow: 'none'}}>
            <img srcSet={logo_shalom} width='50px' alt="logo" loading='lazy' />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left' }}>
                            <ListItemText primary={item.name} onClick={() => navigate(item.link)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className='customAppBar bigAppBar' component="nav" sx={{ height: '66px', backgroundColor: '#142738', boxShadow: 'none' }}>
                <Toolbar className='customToolbar' display="flex" sx={{ padding: '3px 25px' }} style={{ alignItems: 'center' ,justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img srcSet={logo_shalom} width='50px' alt="logo" className='customLogo' loading='lazy'  />
                    <p style={{marginLeft: '10px'}} className='shalomTelevision'>Shalom Television</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Search sx={{ marginRight: '20px', display: { sm: 'none' } }} />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 'auto', display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        {navItems.map((item) => (
                            <Button key={item.name} sx={{ color: '#fff' }} onClick={() => {navigate(item.link)}}>
                                {item.name}
                            </Button>
                        ))}
                        <Search sx={{ ml: '30px' }} />
                        <Button className='donation' sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, color: '#fff', textTransform: 'none', backgroundImage: 'linear-gradient(90deg,#47b9d5,#39a1bb)!important', marginLeft: '30px', padding: '10px 20px' }}>Donation</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    anchor="right"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    className='navbarDrawer'
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
