
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../styles/navbar.css'; // Ensure this imports your custom CSS file
import logo from '../assets/img/logo.jpg'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';




const pages = ['Products', 'Pricing', 'Blog'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <img src={logo} alt='' height={'70px'} width={'200px'}/>
        </div>    
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#home">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>       
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="nav-link scrollto" href="#medicines">Medicines</a></li> {/* Link to the medicines section */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {/* Decorative and Attractive Book Appointment Button */}
        <a href="#appointment" className="appointment-btn scrollto">
          <span className="button-text">Book Appointment</span>
        </a>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="sukanya">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="sukanya" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}

            >
<button><a href='/'>Logout</a></button>
            </Menu>
          </Box>
      </div>
    </header>
  );
}
