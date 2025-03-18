"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/images/syndeologo.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and background change on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["about", "what-we-do", "services"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  // CSS for gradient text
  const gradientTextStyle = {
    background: "linear-gradient(to right, #2A007A, #6642EC, #F15A29)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#F5F5F5]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      // Remove the redundant style={{ position: 'fixed' }} as it's already in the className
    >
      <div className="container mx-auto flex items-center justify-between max-w-[1440px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center z-20">
            <div className="relative h-10 w-32">
              <Image
                src={Logo}
                alt="Syndeo Logo"
                width={128}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden text-[#252C32] md:flex items-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovering("home")}
            onMouseLeave={() => setIsHovering("")}
          >
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                activeSection === ""
                  ? "text-[#F15A29]"
                  : isHovering === "home"
                  ? ""
                  : "text-[#252C32] hover:text-[#F15A29]"
              }`}
              style={isHovering === "home" ? gradientTextStyle : {}}
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovering("about")}
            onMouseLeave={() => setIsHovering("")}
          >
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === "about"
                  ? "text-[#F15A29]"
                  : isHovering === "about"
                  ? ""
                  : "text-[#252C32] hover:text-[#F15A29]"
              }`}
              style={isHovering === "about" ? gradientTextStyle : {}}
            >
              About us
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovering("what-we-do")}
            onMouseLeave={() => setIsHovering("")}
          >
            <Link
              href="#what-we-do"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("what-we-do");
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === "what-we-do"
                  ? "text-[#F15A29]"
                  : isHovering === "what-we-do"
                  ? ""
                  : "text-[#252C32] hover:text-[#F15A29]"
              }`}
              style={isHovering === "what-we-do" ? gradientTextStyle : {}}
            >
              What we do
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovering("services")}
            onMouseLeave={() => setIsHovering("")}
          >
            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === "services"
                  ? "text-[#F15A29]"
                  : isHovering === "services"
                  ? ""
                  : "text-[#252C32] hover:text-[#F15A29]"
              }`}
              style={isHovering === "services" ? gradientTextStyle : {}}
            >
              Services
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onMouseEnter={() => setIsHovering("contact")}
            onMouseLeave={() => setIsHovering("")}
          >
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isHovering === "contact"
                  ? ""
                  : "text-[#252C32] hover:text-[#F15A29]"
              }`}
              style={isHovering === "contact" ? gradientTextStyle : {}}
            >
              Contact Us
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger Menu - Moved to extreme right */}
        <motion.div
          className="md:hidden flex items-center z-20 ml-auto"
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-2 w-8">
              <motion.div
                className="h-1 rounded-full bg-gradient-to-r from-[#2A007A] to-[#6642EC]"
                animate={{ width: isMenuOpen ? "100%" : "100%" }}
              ></motion.div>
              <motion.div
                className="h-1 rounded-full bg-gradient-to-r from-[#6642EC] to-[#6642EC]"
                animate={{
                  width: isMenuOpen ? "80%" : "100%",
                  x: isMenuOpen ? 5 : 0,
                }}
              ></motion.div>
              <motion.div
                className="h-1 rounded-full bg-gradient-to-r from-[#F15A29] to-[#F15A29]"
                animate={{
                  width: isMenuOpen ? "60%" : "100%",
                  x: isMenuOpen ? 10 : 0,
                }}
              ></motion.div>
            </div>
          </button>
        </motion.div>

        {/* Overlay when menu is open */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            ></motion.div>
          )}
        </AnimatePresence>

        {/* Slide-in Mobile Menu from Right */}
        <motion.div
          className="md:hidden fixed top-0 right-0 bottom-0 w-2/3 bg-white shadow-lg z-20"
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <motion.button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 focus:outline-none"
            aria-label="Close menu"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-6 h-1 bg-gradient-to-r from-[#2A007A] to-[#F15A29] absolute transform rotate-45"></div>
              <div className="w-6 h-1 bg-gradient-to-r from-[#2A007A] to-[#F15A29] absolute transform -rotate-45"></div>
            </div>
          </motion.button>

          <div className="pt-20 px-6 h-full overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering("mobile-home")}
                onMouseLeave={() => setIsHovering("")}
              >
                <Link
                  href="/"
                  className="text-base font-medium text-[#252C32] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  style={isHovering === "mobile-home" ? gradientTextStyle : {}}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering("mobile-about")}
                onMouseLeave={() => setIsHovering("")}
              >
                <Link
                  href="#about"
                  className="text-base font-medium text-[#252C32] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  style={isHovering === "mobile-about" ? gradientTextStyle : {}}
                >
                  About us
                </Link>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering("mobile-what-we-do")}
                onMouseLeave={() => setIsHovering("")}
              >
                <Link
                  href="#what-we-do"
                  className="text-base font-medium text-[#252C32] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("what-we-do");
                  }}
                  style={
                    isHovering === "mobile-what-we-do" ? gradientTextStyle : {}
                  }
                >
                  What we do
                </Link>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering("mobile-services")}
                onMouseLeave={() => setIsHovering("")}
              >
                <Link
                  href="#services"
                  className="text-base font-medium text-[#252C32] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  style={
                    isHovering === "mobile-services" ? gradientTextStyle : {}
                  }
                >
                  Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
                onMouseEnter={() => setIsHovering("mobile-contact")}
                onMouseLeave={() => setIsHovering("")}
              >
                <Link
                  href="/contact"
                  className="text-base font-medium text-[#252C32] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  style={
                    isHovering === "mobile-contact" ? gradientTextStyle : {}
                  }
                >
                  Contact Us
                </Link>
              </motion.div>

              <motion.div
                className="pt-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/contact">
                  <Button 
                    className="w-full bg-white outline outline-2 outline-offset-2 outline-[#F15A29] hover:bg-white/90"
                    style={isHovering === "get-started" ? gradientTextStyle : { color: '#F15A29' }}
                    onMouseEnter={() => setIsHovering("get-started")}
                    onMouseLeave={() => setIsHovering("")}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="hidden md:block"
        >
          <Link href="/contact">
            <Button 
              className="bg-white outline outline-2 outline-offset-2 outline-[#F15A29] hover:bg-white/90"
              style={isHovering === "desktop-get-started" ? gradientTextStyle : { color: '#F15A29' }}
              onMouseEnter={() => setIsHovering("desktop-get-started")}
              onMouseLeave={() => setIsHovering("")}
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
