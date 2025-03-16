import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/images/syndeologo.svg"

export default function Footer() {
  return (
    <footer className="bg-[#EDEFFF] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-32">
                <Image
                  src={Logo}
                  alt="Syndeo Logo"
                  width={128}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-8 text-muted-foreground">
              Thank you for your interest in Syndeo Solutions International LTD. We are grateful for your inquiry and
              are eager to address any questions you may have.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Email: support@syndeolltd.com</p>
              <p>Call: XXXXXXXXXX</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-muted-foreground font-medium mb-4 uppercase">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-sm  font-medium hover:text-[#6642EC]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#what-we-do" className="text-sm font-medium  hover:text-[#6642EC]">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm font-medium hover:text-[#6642EC]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium hover:text-[#6642EC]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-muted-foreground mb-4 uppercase">HELP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm font-medium hover:text-[#6642EC]">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-[#6642EC]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:text-[#6642EC]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-muted-foreground mb-4 uppercase">NEWSLETTER</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
              <Button className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white">Subscribe Now</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-center text-xs text-muted-foreground">© Copyright 2025, All Rights Reserved by Syndeo</p>
        </div>
      </div>
    </footer>
  )
} 