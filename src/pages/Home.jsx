import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import {
  TrendingUp,
  AutoAwesome,
  Security,
  Speed,
  Assessment,
  Psychology,
  AccountBalance,
  School,
  CheckCircleOutline,
  LocationCity,
  CurrencyExchange,
  Token,
  ReceiptLong,
  ShowChart,
  Widgets,
  Language,
  HistoryEdu,
  Hub,
  Timeline,
  StackedLineChart,
  Webhook,
  Storefront,
  CandlestickChart,
  CurrencyBitcoin,
  Analytics,
  Build,
  History,
  GpsFixed,
  Bolt,
  Dashboard,
  BrandingWatermark,
  Sync,
  EditNote,
} from "@mui/icons-material";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaCode,
  FaChartLine,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKubernetes,
} from "react-icons/si";
import { TbBrandCpp, TbApi } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink } from "react-scroll";
import ContactForm from "../components/ContactForm";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("technologies");
  const [contactFormOpen, setContactFormOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const heroSlides = [
    {
      title: "Welcome to Truzen Alpha",
      subtitle: "Your All-in-One Trading Solutions Partner",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      background:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "AI-Powered Trading Automation",
      subtitle:
        "From strategy to execution, fully automated solutions that deliver results",
      image:
        "https://plus.unsplash.com/premium_photo-1664478157873-50d4963c1d11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      background:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "Multi-Market Expertise",
      subtitle: "Indian, Forex, Crypto & Global Markets Covered",
      image:
        "https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250205.jpg?t=st=1762859666~exp=1762863266~hmac=904c5901bcd43841a29a7b9aa6afb863a3684e2ebcc2d1afe5b7202f79a9833b&w=1480",
      background:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&auto=format&fit=crop&q=80",
    },
  ];

  const services = [
    {
      icon: <TrendingUp sx={{ fontSize: 50 }} />,
      title: "Individual Traders",
      description:
        "From beginners to experts, we help traders maximize their potential with custom strategies and automation tools.",
      color: "#00bcd4",
    },
    {
      icon: <AccountBalance sx={{ fontSize: 50 }} />,
      title: "Proprietary Desks & HFT Firms",
      description:
        "We provide scalable solutions for desks and firms engaging in high-frequency trading and proprietary strategies.",
      color: "#9c27b0",
    },
    {
      icon: <Psychology sx={{ fontSize: 50 }} />,
      title: "Crypto Investors & Arbitrageurs",
      description:
        "Integrate with leading crypto exchanges for seamless automation, trading, and arbitrage opportunities.",
      color: "#ff9800",
    },
    {
      icon: <Assessment sx={{ fontSize: 50 }} />,
      title: "Portfolio Managers & Hedge Funds",
      description:
        "Advanced algorithmic tools for managing portfolios, optimizing risk-return, and real-time analytics.",
      color: "#2196f3",
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 50 }} />,
      title: "Market Analysts & Strategists",
      description:
        "Access sophisticated charting, backtesting, and AI-driven tools to enhance market analysis and strategy development.",
      color: "#4caf50",
    },
    {
      icon: <School sx={{ fontSize: 50 }} />,
      title: "Trading Coaches & Educators",
      description:
        "We support educators with custom platforms, indicators, and automation tools for training and coaching traders.",
      color: "#f44336",
    },
  ];

  const features = [
    {
      icon: <AutoAwesome />,
      title: "AI-Powered Trading",
      description:
        "Machine learning algorithms that adapt to market conditions",
    },
    {
      icon: <Speed />,
      title: "High-Speed Execution",
      description: "Lightning-fast order execution with minimal latency",
    },
    {
      icon: <Security />,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee",
    },
    {
      icon: <Assessment />,
      title: "Advanced Analytics",
      description: "Real-time market insights and predictive analytics",
    },
  ];

  const offerings = [
    {
      icon: <Build />,
      title: "Custom Indicator Development",
      description: "On TradingView, MetaTrader, NinjaTrader, C Trader and more",
    },
    {
      icon: <History />,
      title: "Strategy Creation & Backtesting",
      description: "Across extensive historical datasets",
    },
    {
      icon: <GpsFixed />,
      title: "Alpha Optimization",
      description: "For maximizing risk-adjusted returns",
    },
    {
      icon: <Bolt />,
      title: "Full Automation Setup",
      description: "From signal generation to final execution",
    },
    {
      icon: <Dashboard />,
      title: "Custom Trading Dashboards",
      description: "And intuitive control panels",
    },
    {
      icon: <BrandingWatermark />,
      title: "White-Labeling",
      description: "Of platforms and tools for firms",
    },
    {
      icon: <Sync />,
      title: "Broker Integrations",
      description: "With API scripts & bridge systems",
    },
    {
      icon: <EditNote />,
      title: "Custom Requirements",
      description: "Handling unique requirements for your vision",
    },
  ];

  const markets = [
    {
      name: "Indian Markets",
      details: "NSE, BSE, MCX",
      icon: <LocationCity />,
    },
    {
      name: "Forex Markets",
      details: "Global broker integrations and hedging",
      icon: <CurrencyExchange />,
    },
    {
      name: "Crypto Markets",
      details: "Centralized & decentralized exchanges",
      icon: <Token />,
    },
    {
      name: "Bond Markets",
      details: "Algo solutions for debt instruments",
      icon: <ReceiptLong />,
    },
    {
      name: "Equity & Derivatives",
      details: "Stocks, futures, options automation",
      icon: <ShowChart />,
    },
    {
      name: "Commodities",
      details: "Gold, oil, metals, and agri-market systems",
      icon: <Widgets />,
    },
    {
      name: "Global Exchanges",
      details: "NYSE, NASDAQ, LSE, and more",
      icon: <Language />,
    },
  ];

  const technologies = [
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MQL4/MQL5", icon: <FaCode /> },
    { name: "Pine Script", icon: <FaChartLine /> },
    { name: "REST & WebSocket", icon: <TbApi /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
  ];

  const frameworks = [
    { name: "MetaEditor", icon: <FaCode /> },
    { name: "Backtrader", icon: <HistoryEdu /> },
    { name: "QuantConnect", icon: <Hub /> },
    { name: "Zipline", icon: <Timeline /> },
    { name: "MetaStock", icon: <StackedLineChart /> },
    { name: "Webhook & API", icon: <Webhook /> },
  ];

  const platforms = [
    {
      name: "Indian Brokers",
      details: "Zerodha, AngelOne, Fyers, Dhan",
      icon: <Storefront />,
    },
    {
      name: "Trading Platforms",
      details: "TradingView, MetaTrader, NinjaTrader",
      icon: <CandlestickChart />,
    },
    {
      name: "Forex Brokers",
      details: "IC Markets, Pepperstone, FXTM, XNS, Vantage",
      icon: <CurrencyExchange />,
    },
    {
      name: "Crypto Platforms",
      details: "Binance, Bybit, Coinbase Pro",
      icon: <CurrencyBitcoin />,
    },
    {
      name: "Portfolio Analytics",
      details: "QuantInsti, Amibroker, Excel",
      icon: <Analytics />,
    },
  ];

  const renderContent = (items) => (
    <Grid container spacing={items[0].details ? 3 : 2} sx={{ mt: 2 }}>
      {items.map((item, index) => (
        <Grid
          size={
            items[0].details
              ? { xs: 12, sm: 6, md: 4 }
              : { xs: 6, sm: 4, md: 3 }
          }
          key={index}
        >
          <Box
            data-aos="fade-up"
            data-aos-delay={index * 50}
            sx={{
              p: 2,
              height: "100%",
              bgcolor: alpha("#1a1f3a", 0.6),
              border: "1px solid",
              borderColor: alpha("#00bcd4", 0.2),
              borderRadius: 2,
              textAlign: "center",
              transition: "all 0.3s",
              display: "flex",
              flexDirection: item.details ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: "1.2rem",
              "&:hover": {
                borderColor: "#00bcd4",
                bgcolor: alpha("#00bcd4", 0.1),
                transform: "translateY(-5px)",
                color: "#00bcd4",
              },
            }}
          >
            {React.cloneElement(item.icon, {
              sx: {
                fontSize: item.details ? 40 : 24,
                mb: item.details ? 1 : 0,
              },
            })}
            <div>
              <p style={{ fontWeight: 500, margin: 0, fontSize: "1rem" }}>
                {item.name}
              </p>
              {item.details && (
                <p
                  style={{
                    color: "#b0bec5",
                    fontSize: "0.8rem",
                    margin: 0,
                    marginTop: "4px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.details}
                </p>
              )}
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{ height: "100vh", position: "relative", color: "white" }}
      >
        <style>
          {`
            @keyframes fadeInRight {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .swiper-slide-active .hero-text-content {
              animation: fadeInRight 0.8s ease-out 0.3s forwards;
            }
            .swiper-slide-active .hero-image-content {
              animation: fadeInRight 0.8s ease-out 0.6s forwards;
            }
          `}
        </style>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{ height: "100%" }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${slide.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.2,
                    zIndex: 1,
                    filter: "grayscale(80%)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)`,
                    zIndex: 2,
                  },
                }}
              >
                <Container
                  maxWidth="lg"
                  sx={{ position: "relative", zIndex: 3 }}
                >
                  <Grid container spacing={4} alignItems="center">
                    <Grid
                      size={{ xs: 12, md: 7 }}
                      className="hero-text-content"
                      sx={{ opacity: 0 }}
                    >
                      <h1
                        className="neon-glow"
                        style={{
                          fontWeight: 900,
                          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                          marginBottom: "1rem",
                          color: theme.palette.primary.main,
                          lineHeight: 1.2,
                        }}
                      >
                        {slide.title}
                      </h1>
                      <h5
                        style={{
                          marginBottom: "2rem",
                          color: theme.palette.text.secondary,
                          fontWeight: 400,
                          fontSize: "clamp(1rem, 2vw, 1.4rem)",
                          lineHeight: 1.4,
                        }}
                      >
                        {slide.subtitle}
                      </h5>
                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Button
                          variant="contained"
                          size="large"
                          onClick={() => setContactFormOpen(true)}
                          sx={{
                            bgcolor: "primary.main",
                            color: "#000",
                            fontWeight: 700,
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            "&:hover": {
                              bgcolor: "primary.main",
                              boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                            },
                          }}
                        >
                          Get Started
                        </Button>
                        <ScrollLink
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <Button
                            variant="outlined"
                            size="large"
                            sx={{
                              borderColor: "primary.main",
                              color: "primary.main",
                              px: 4,
                              py: 1.5,
                              fontSize: "1rem",
                              "&:hover": {
                                borderColor: "primary.main",
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                              },
                            }}
                          >
                            Learn More
                          </Button>
                        </ScrollLink>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 12, md: 5 }}
                      className="hero-image-content"
                      sx={{ opacity: 0 }}
                    >
                      <Box
                        component="img"
                        src={slide.image}
                        alt={slide.title}
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: alpha(theme.palette.primary.main, 0.5),
                          boxShadow: `0 0 25px ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )}`,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* What We Do Section */}
      <Container id="about" maxWidth="lg" sx={{ py: 10 }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: theme.palette.primary.main,
          }}
          data-aos="fade-up"
          className="neon-glow"
        >
          WHAT WE DO
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 4rem auto",
            color: theme.palette.text.secondary,
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Cutting-edge trading technology meets deep market insight. Whether
          you're an individual trader or a large desk, TruZen Alpha delivers
          scalable, intelligent, and secure trading automation.
        </p>

        <Grid container spacing={3} justifyContent="center">
          {markets.map((market, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Card
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                sx={{
                  height: "100%",
                  bgcolor: "transparent",
                  border: "1px solid",
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  transition:
                    "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 25px ${alpha(
                      theme.palette.primary.main,
                      0.5
                    )}`,
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4, flexGrow: 1 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>
                    {React.cloneElement(market.icon, { sx: { fontSize: 50 } })}
                  </Box>
                  <h6
                    style={{
                      marginBottom: "0.5rem",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    {market.name}
                  </h6>
                  <p
                    style={{
                      color: theme.palette.text.secondary,
                      fontSize: "0.9rem",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {market.details}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* What We Offer Section */}
      <Box id="about" sx={{ bgcolor: alpha("#000", 0.2), py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="stretch">
            <Grid
              size={{ xs: 12, md: 6 }}
              data-aos="fade-right"
              sx={{ display: "flex" }}
            >
              <Box
                alt="Custom Solutions"
                sx={{
                  width: "100%",
                  flexGrow: 1,
                  minHeight: { xs: 300, md: "auto" },
                  background: `url(https://img.freepik.com/free-photo/businessman-interacting-with-futuristic-graphics_23-2151003693.jpg?t=st=1762859447~exp=1762863047~hmac=6ce14aaa46008946fc54ca6c8569ac42c437de39da429f4fdfc213d134d4a970&w=1480) center center / cover`,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: alpha(theme.palette.primary.main, 0.5),
                  boxShadow: `0 0 25px ${alpha(
                    theme.palette.primary.main,
                    0.3
                  )}`,
                }}
              ></Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  p: { xs: 2, sm: 3 },
                }}
              >
                <h2
                  className="neon-glow"
                  style={{
                    marginBottom: "1rem",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: theme.palette.primary.main,
                  }}
                >
                  WHAT WE OFFER
                </h2>
                <p
                  style={{
                    marginBottom: "2.5rem",
                    color: theme.palette.text.secondary,
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2vw, 1.1rem)",
                    lineHeight: 1.7,
                  }}
                >
                  We offer end-to-end solutions for traders and firms:
                </p>
                <Grid container spacing={3}>
                  {offerings.map((offer, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                        }}
                      >
                        <Box sx={{ color: "primary.main", mt: "4px" }}>
                          {React.cloneElement(offer.icon, {
                            sx: { fontSize: "1.8rem" },
                          })}
                        </Box>
                        <div>
                          <h6
                            style={{
                              margin: 0,
                              fontWeight: 600,
                              color: "white",
                              fontSize: "1.1rem",
                            }}
                          >
                            {offer.title}
                          </h6>
                          <p
                            style={{
                              margin: 0,
                              color: theme.palette.text.secondary,
                              fontSize: "0.9rem",
                              lineHeight: 1.5,
                            }}
                          >
                            {offer.description}
                          </p>
                        </div>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <h2
            className="neon-glow"
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: theme.palette.primary.main,
            }}
            data-aos="fade-up"
          >
            WHO WE SERVE
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 4rem auto",
              color: theme.palette.text.secondary,
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our solutions are tailored to meet the unique needs of various
            market participants.
          </p>

          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    height: "100%",
                    bgcolor: "transparent",
                    border: "2px solid",
                    borderColor: alpha(service.color, 0.5),
                    transition:
                      "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      borderColor: service.color,
                      boxShadow: `0 0 30px ${alpha(service.color, 0.6)}`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 4 }}>
                    <Box sx={{ color: service.color, mb: 2 }}>
                      {service.icon}
                    </Box>
                    <h5
                      style={{
                        marginBottom: "1rem",
                        fontWeight: 600,
                        fontSize: "1.5rem",
                        color: "white",
                        minHeight: "64px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {service.title}
                    </h5>
                    <p
                      style={{
                        color: theme.palette.text.secondary,
                        fontSize: "1rem",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technologies Section */}
      <Container id="tech-stack" maxWidth="lg" sx={{ py: 10 }}>
        <h2
          className="neon-glow"
          style={{
            textAlign: "center",
            marginBottom: "0.5rem",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: theme.palette.primary.main,
          }}
          data-aos="fade-up"
        >
          TOOLS, TECH & PLATFORMS
        </h2>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 4,
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Button
            sx={{ width: "250px", fontWeight: 600, fontSize: "1.2rem" }}
            variant={activeTab === "technologies" ? "contained" : "outlined"}
            onClick={() => setActiveTab("technologies")}
          >
            Technologies
          </Button>
          <Button
            sx={{ width: "250px", fontWeight: 600, fontSize: "1.2rem" }}
            variant={activeTab === "frameworks" ? "contained" : "outlined"}
            onClick={() => setActiveTab("frameworks")}
          >
            Tools & Frameworks
          </Button>
          <Button
            sx={{ width: "250px", fontWeight: 600, fontSize: "1.2rem" }}
            variant={activeTab === "platforms" ? "contained" : "outlined"}
            onClick={() => setActiveTab("platforms")}
          >
            Platforms
          </Button>
        </Box>

        <Box>
          {activeTab === "technologies" && renderContent(technologies)}
          {activeTab === "frameworks" && renderContent(frameworks)}
          {activeTab === "platforms" && renderContent(platforms)}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        id="contact"
        sx={{
          background: `transparent`,
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md" data-aos="zoom-in">
          <h3
            className="neon-glow"
            style={{
              marginBottom: "1.5rem",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: theme.palette.primary.main,
            }}
          >
            Have a Trading Idea?
          </h3>
          <h6
            style={{
              marginBottom: "2rem",
              color: theme.palette.text.secondary,
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 300,
            }}
          >
            Transform it into reality with our automated solutions
          </h6>
          <Button
            variant="contained"
            size="large"
            onClick={() => setContactFormOpen(true)}
            sx={{
              bgcolor: "primary.main",
              color: "#000",
              fontWeight: 700,
              px: 6,
              py: 2,
              fontSize: "1.2rem",
              "&:hover": {
                bgcolor: "primary.main",
                boxShadow: `0 0 20px ${theme.palette.primary.main}`,
              },
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Contact Form Dialog */}
      <ContactForm
        open={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </Box>
  );
}
