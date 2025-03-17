"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Heroimg from "@/components/images/heroimage.svg"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-28 pb-12 md:pt-35 md:pb-16">
      <div className="container mx-auto md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            className="space-y-4 pl-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At last, a{" "}
              <motion.span 
                className="text-[#6642EC]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                faster
              </motion.span>, more
              <br />
              <motion.span 
                className="text-[#F15A29]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                reliable
              </motion.span> internet experience
              <br />
              designed just for{" "}
              <motion.span 
                className="text-[#2A007A]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                you
              </motion.span>.
            </motion.h1>
            <motion.p 
              className="-foreground max-w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              We Strive To Provide High-Performance Solutions To Keep You Connected Anywhere, Anytime!
            </motion.p>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#F15A29] hover:bg-[#F15A29]/90 text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Image
                src={Heroimg}
                alt="Internet Service Illustration"
                width={600}
                height={500}
                className="object-contain mx-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 