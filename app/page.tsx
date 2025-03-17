import Image from "next/image"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Partners from "@/components/Partners"
import Footer from "@/components/Footer"
import AboutUs from "@/components/AboutUs"
import OurServices from "@/components/OurServices"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      
        <Navbar />
        <Hero />
        <Partners />
        <AboutUs/>
        <OurServices />
        <Footer />
      
    </main>
  )
}

