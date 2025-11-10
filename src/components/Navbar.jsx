import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AutoAwesome } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', to: 'home' },
    { text: 'About Us', to: 'about' },
    { text: 'Services', to: 'services' },
    { text: 'Contact Us', to: 'contact' },
  ];

  const drawer = (
    <Box
      sx={{ width: 250, bgcolor: '#000', height: '100%', borderLeft: '1px solid', borderColor: 'primary.main' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ScrollLink
            key={item.text}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleDrawer(false)}
          >
            <ListItem button>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  color: 'white', 
                  textAlign: 'center',
                  fontFamily: "'Orbitron', sans-serif",
                }} 
              />
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <style>
        {`
          .active-link > button {
            color: #00e5ff !important;
            text-shadow: 0 0 8px #00e5ff;
          }
        `}
      </style>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? alpha('#000', 0.85) : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? `1px solid ${alpha('#00e5ff', 0.3)}` : 'none',
          transition: 'background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <AutoAwesome sx={{ mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TRUZEN
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <ScrollLink key={item.text} to={item.to} spy={true} smooth={true} offset={-70} duration={500} activeClass="active-link">
                  <Button sx={{ color: 'white', fontWeight: 600, fontFamily: "'Rajdhani', sans-serif", fontSize: '1rem', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                    {item.text}
                  </Button>
                </ScrollLink>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}