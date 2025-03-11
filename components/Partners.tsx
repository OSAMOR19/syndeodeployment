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

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const partnerImages = [
    { src: img1, alt: "Google" },
    { src: img2, alt: "Microsoft" },
    { src: img3, alt: "Amazon" },
    { src: img4, alt: "Sky" },
    // Duplicate for continuous marquee effect on mobile
    { src: img1, alt: "Google" },
    { src: img2, alt: "Microsoft" },
    { src: img3, alt: "Amazon" },
    { src: img4, alt: "Sky" },
  ];

  const containerVariants = {
    animate: {
      x: isMobile ? [0, -1000] : 0,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-8 bg-[#252C32] text-white overflow-hidden">
      <div className="container px-4 md:px-6 w-full">
        <motion.div 
          className={`flex items-center ${isMobile ? 'space-x-8' : 'justify-around space-x-2'} flex-nowrap`}
          variants={containerVariants}
          animate="animate"
        >
          {partnerImages.slice(0, isMobile ? 8 : 4).map((img, index) => (
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
              className={isMobile ? 'min-w-[150px]' : ''}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.alt === "Sky" ? 100 : img.alt === "Amazon" ? 200 : img.alt === "Microsoft" ? 242 : 196}
                height={img.alt === "Amazon" ? 60 : 50}
                className="object-contain filter brightness-0 invert"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
