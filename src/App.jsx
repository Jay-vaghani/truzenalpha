import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00e5ff", // Neon Blue
    },
    secondary: {
      main: "#9e9e9e", // A neutral grey for secondary elements
    },
    background: {
      default: "#000000",
      paper: "rgba(10, 25, 47, 0.5)", // Dark, semi-transparent blue
    },
    text: {
      primary: "#ffffff",
      secondary: "#a0c4ff", // Light blue-ish grey for subtitles
    },
  },
  typography: {
    fontFamily: "'Rajdhani', sans-serif",
    h1: { fontFamily: "'Orbitron', sans-serif", textTransform: "uppercase" },
    h2: { fontFamily: "'Orbitron', sans-serif", textTransform: "uppercase" },
    h3: { fontFamily: "'Orbitron', sans-serif", textTransform: "uppercase" },
    h4: { fontFamily: "'Orbitron', sans-serif", textTransform: "uppercase" },
    h5: { fontFamily: "'Orbitron', sans-serif", textTransform: "uppercase" },
    h6: { fontFamily: "'Orbitron', sans-serif", textTransform: "uppercase" },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap');
          
          .neon-glow {
            text-shadow: 0 0 0px #00e5ff, 0 0 1px #00e5ff, 0 0 0px #00e5ff, 0 0 0px #00e5ff;
          }
          .neon-box-shadow {
            box-shadow: 0 0 15px rgba(0, 229, 255, 0.4), inset 0 0 15px rgba(0, 229, 255, 0.2);
          }
        `}
      </style>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Home />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
