import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider, alpha } from '@mui/material';
import { LinkedIn, Twitter, Instagram, WhatsApp, Email, Phone, X } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    style: { cursor: 'pointer', display: 'block', marginBottom: '0.75rem', textDecoration: 'none' },
    color: "inherit",
    sx: { '&:hover': { color: 'primary.main' } }
  };

  return (
    <Box sx={{ bgcolor: '#000', color: 'text.secondary', py: 6, borderTop: '1px solid', borderColor: alpha('#00e5ff', 0.3) }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img src="/logo.svg" alt="Truzen Alpha Logo" style={{ height: 40, marginRight: '10px' }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, fontFamily: "'Orbitron', sans-serif" }}>
                TRUZEN ALPHA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Cutting-edge trading technology meets deep market insight. We deliver scalable, intelligent, and secure trading automation.
            </Typography>
            <Box>
              <IconButton href="https://www.linkedin.com/company/truzen-alpha-trading-solutions" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><LinkedIn /></IconButton>
              <IconButton href="https://wa.me/919106976079" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><WhatsApp /></IconButton>
              <IconButton sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><X /></IconButton>
              <IconButton sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><Instagram /></IconButton>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontFamily: "'Orbitron', sans-serif" }}>Links</Typography>
            <MuiLink component={ScrollLink} to="home" {...scrollProps}>Home</MuiLink>
            <MuiLink component={ScrollLink} to="about" {...scrollProps}>About</MuiLink>
            <MuiLink component={ScrollLink} to="services" {...scrollProps}>Services</MuiLink>
            <MuiLink component={ScrollLink} to="contact" {...scrollProps}>Contact</MuiLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontFamily: "'Orbitron', sans-serif" }}>Offerings</Typography>
            <MuiLink component={ScrollLink} to="services" {...scrollProps}>Custom Indicators</MuiLink>
            <MuiLink component={ScrollLink} to="services" {...scrollProps}>Strategy Backtesting</MuiLink>
            <MuiLink component={ScrollLink} to="services" {...scrollProps}>Full Automation</MuiLink>
            <MuiLink component={ScrollLink} to="services" {...scrollProps}>White-Labeling</MuiLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontFamily: "'Orbitron', sans-serif" }}>Contact Us</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <Email fontSize="small" sx={{ color: 'primary.main' }} />
              <MuiLink href="mailto:truzenalpha@gmail.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>truzenalpha@gmail.com</MuiLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <Phone fontSize="small" sx={{ color: 'primary.main' }} />
              <MuiLink href="tel:+919106976079" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>+91 91069 76079</MuiLink>
            </Box>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <WhatsApp fontSize="small" sx={{ color: 'primary.main' }} />
              <MuiLink href="https://wa.me/919106976079" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>WhatsApp</MuiLink>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: alpha('#00e5ff', 0.2) }} />
        <Typography variant="body2" align="center">
          Copyright © {new Date().getFullYear()} Truzen Alpha, All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}