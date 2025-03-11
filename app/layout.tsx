import type React from "react"
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Syndeo Solutions International LTD",
  description: "High-Performance Internet Solutions Provider",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${plusJakartaSans.variable} ${montserrat.className}`}>{children}</body>
    </html>
  )
}



import './globals.css'