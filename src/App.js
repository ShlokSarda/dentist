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

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box position="fixed" top="0" left="0" width="100%" zIndex="1000">
          <Header />
        </Box>

        {/* Content with padding to avoid overlap */}
        <Box paddingTop="80px">
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
