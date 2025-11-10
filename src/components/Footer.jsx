import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider, alpha } from '@mui/material';
import { AutoAwesome, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
  };

  return (
    <Box sx={{ bgcolor: '#000', color: 'text.secondary', py: 6, borderTop: '1px solid', borderColor: alpha('#00e5ff', 0.3) }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AutoAwesome sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                TRUZEN ALPHA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Cutting-edge trading technology meets deep market insight. We deliver scalable, intelligent, and secure trading automation.
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><LinkedIn /></IconButton>
              <IconButton href="#" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><Twitter /></IconButton>
              <IconButton href="#" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><Instagram /></IconButton>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Links</Typography>
            <MuiLink component={ScrollLink} to="home" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Home</MuiLink>
            <MuiLink component={ScrollLink} to="what-we-do" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>About</MuiLink>
            <MuiLink component={ScrollLink} to="who-we-serve" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Services</MuiLink>
            <MuiLink component={ScrollLink} to="contact" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Contact</MuiLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Offerings</Typography>
            <MuiLink component={ScrollLink} to="what-we-offer" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Indicators</MuiLink>
            <MuiLink component={ScrollLink} to="what-we-offer" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Backtesting</MuiLink>
            <MuiLink component={ScrollLink} to="what-we-offer" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Automation</MuiLink>
            <MuiLink component={ScrollLink} to="what-we-offer" {...scrollProps} display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>White-Labeling</MuiLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Contact Us</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Email: support@truzenalpha.com</Typography>
            <Typography variant="body2">Address: Gujarat, India</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: alpha('#00e5ff', 0.2) }} />
        <Typography variant="body2" align="center">
          Copyright © {new Date().getFullYear()} TruzenAlpha, All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}