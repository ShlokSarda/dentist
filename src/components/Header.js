import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaDirections, FaBars } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bg="#502626"
      p={4}
      color="white"
      height="80px"
      display="flex"
      alignItems="center"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        width="100%"
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Qualiteeth Logo"
          height={{ base: "250px", md: "300" }}
        />

        {/* Desktop Nav */}
        <Flex
          as="nav"
          gap={8}
          align="center"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          justify="center"
        >
          <Link
            href="#home"
            fontSize="lg"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            Home
          </Link>

          <Menu isOpen={isOpen}>
            <MenuButton
              fontSize="lg"
              bg="transparent"
              color="#F5C7A9"
              _hover={{ color: "#c49d84" }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Services <ChevronDownIcon />
            </MenuButton>
            <MenuList
              bg="#502626"
              border="none"
              boxShadow="none"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {[
                { label: "Teeth Cleaning", href: "#cleaning" },
                { label: "Teeth Whitening", href: "#whitening" },
                { label: "Braces & Aligners", href: "#braces" },
                { label: "Dental Implants", href: "#implants" },
              ].map((item, index) => (
                <MenuItem
                  key={index}
                  as={Link}
                  href={item.href}
                  bg="transparent"
                  _hover={{ color: "#c49d84", bg: "transparent" }}
                  color="#F5C7A9"
                  _focus={{ bg: "transparent", boxShadow: "none" }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Link
            href="#about"
            fontSize="lg"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            About Us
          </Link>
        </Flex>

        {/* Contact & Location Icons */}
        <Flex gap={6} align="center">
          <Link
            href="tel:+919256491206"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            <Icon as={FaPhoneAlt} boxSize={5} />
          </Link>
          <Link
            href="https://www.google.com/maps/place/Qualiteeth+Dental+Care"
            target="_blank"
            _hover={{ color: "#c49d84" }}
            color="#F5C7A9"
          >
            <Icon as={FaDirections} boxSize={6} />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <Icon
            as={FaBars}
            boxSize={6}
            cursor="pointer"
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            color="#F5C7A9"
          />
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#502626" color="#F5C7A9">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={5}>
              <Link
                href="#home"
                fontSize="lg"
                _hover={{ color: "#c49d84" }}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href="#about"
                fontSize="lg"
                _hover={{ color: "#c49d84" }}
                onClick={onClose}
              >
                About Us
              </Link>
              <Menu isOpen={isOpen}>
                <MenuButton
                  fontSize="lg"
                  bg="transparent"
                  color="#F5C7A9"
                  _hover={{ color: "#c49d84" }}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Services <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  bg="#502626"
                  border="none"
                  boxShadow="none"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {[
                    { label: "Teeth Cleaning", href: "#cleaning" },
                    { label: "Teeth Whitening", href: "#whitening" },
                    { label: "Braces & Aligners", href: "#braces" },
                    { label: "Dental Implants", href: "#implants" },
                  ].map((item, index) => (
                    <MenuItem
                      key={index}
                      as={Link}
                      href={item.href}
                      bg="transparent"
                      _hover={{ color: "#c49d84", bg: "transparent" }}
                      color="#F5C7A9"
                      _focus={{ bg: "transparent", boxShadow: "none" }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
