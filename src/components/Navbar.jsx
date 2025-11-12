import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";
import {
  Home,
  Info,
  MiscellaneousServices,
  Contacts,
  Menu,
  Close,
} from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "Home", to: "home", icon: <Home /> },
    { text: "About Us", to: "about", icon: <Info /> },
    { text: "Services", to: "services", icon: <MiscellaneousServices /> },
    { text: "Contact Us", to: "contact", icon: <Contacts /> },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
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
            activeClass="active-link"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ fontFamily: "'Orbitron', sans-serif" }}
                />
              </ListItemButton>
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
          .active-link > button, .active-link > div {
            color: #00e5ff !important;
            text-shadow: 0 0 8px #00e5ff;
            background-color: ${alpha("#00e5ff", 0.1)} !important;
          }
        `}
      </style>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: alpha("#0a0e27", 0.8),
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${alpha("#00e5ff", 0.2)}`,
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src="/logo.svg"
                alt="Truzen Alpha Logo"
                style={{ height: 40, marginRight: "10px" }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                TRUZEN
              </Typography>
            </ScrollLink>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.text}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active-link"
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: "1rem",
                      px: 2,
                      py: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        bgcolor: alpha("#00e5ff", 0.1),
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                </ScrollLink>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: alpha("#0a0e27", 0.9),
            backdropFilter: "blur(15px)",
            borderLeft: `1px solid ${alpha("#00e5ff", 0.3)}`,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "primary.main" }}
          >
            <Close />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>
    </>
  );
}
