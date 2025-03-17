"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import img1 from "@/components/images/Pt4.svg"
import img2 from "@/components/images/Pt3.svg"
import img3 from "@/components/images/Pt2.svg"
import img4 from "@/components/images/Pt1.svg"

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const partnerImages = [
    { src: img1, alt: "Google" },
    { src: img2, alt: "Microsoft" },
    { src: img3, alt: "Amazon" },
    { src: img4, alt: "Sky" },
    // Duplicate for continuous marquee effect on mobile/tablet
    { src: img1, alt: "Google" },
    { src: img2, alt: "Microsoft" },
    { src: img3, alt: "Amazon" },
    { src: img4, alt: "Sky" },
  ];

  const containerVariants = {
    animate: {
      x: isMobile || isTablet ? [0, -1000] : 0,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isMobile ? 20 : isTablet ? 25 : 0,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-6 mx-auto  md:py-8 bg-[#252C32] text-white overflow-hidden">
      <div className="container px-4 md:mx-auto  w-full">
        <motion.div 
          className={`flex items-center ${isMobile || isTablet ? 'space-x-8' : 'justify-around space-x-2'} flex-nowrap`}
          variants={containerVariants}
          animate="animate"
        >
          {partnerImages.slice(0, isMobile || isTablet ? 8 : 4).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ scale: 1.1 }}
              className={isMobile ? 'min-w-[150px]' : isTablet ? 'min-w-[180px]' : ''}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.alt === "Sky" ? (isTablet ? 120 : 100) : 
                       img.alt === "Amazon" ? (isTablet ? 220 : 200) : 
                       img.alt === "Microsoft" ? (isTablet ? 260 : 242) : 
                       (isTablet ? 210 : 196)}
                height={img.alt === "Amazon" ? (isTablet ? 65 : 60) : (isTablet ? 55 : 50)}
                className="object-contain filter brightness-0 invert"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
