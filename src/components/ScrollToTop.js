import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <IconButton
        aria-label="Scroll to top"
        icon={<ArrowUpIcon boxSize={6} />}
        onClick={scrollToTop}
        position="fixed"
        bottom={{ base: "100px", md: "20px" }}
        right={{ base: "16px", md: "20px" }}
        zIndex="1000"
        bg="#28211d"
        color="#F5C7A9"
        _hover={{ color: "#c49d84" }}
        size="lg"
        isRound={true} // Makes it circular
        boxShadow="md"
      />
    )
  );
};

export default ScrollToTop;
