import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import DentalServices from "./components/Services";
import InfoSection from "./components/InfoSection";
import Visit from "./components/Visit";
import BookingSection from "./components/Booking";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    // Load Google Analytics script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-3DKPYM38ZY";
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "G-3DKPYM38ZY");
    };
  }, []);
  return (
    <ChakraProvider>
      <Router>
        <ScrollToTop />
        <Box position="fixed" top="0" left="0" width="100%" zIndex="1000">
          <Header />
        </Box>

        {/* Content with padding to avoid overlap */}
        <Box paddingTop="80px" paddingBottom="40px">
          <HeroSection />
          <DentalServices />

          <Testimonials />
          <InfoSection />
          <Visit />
          <BookingSection />
          <Footer />
        </Box>
        <BottomNav />
      </Router>
    </ChakraProvider>
  );
}

export default App;
