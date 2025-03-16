import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Con from "@/components/images/syndeocontact.svg"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-14">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl mt-9 md:text-4xl font-bold text-[#2A007A]">Get in touch</h2>
              <p className="text-muted-foreground">Our friendly team would love to hear from you.</p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      placeholder="First name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      placeholder="Last name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone number
                  </label>
                  <div className="flex">
                    <select className="px-3 py-2 border border-gray-300 rounded-l-md w-[80px]">
                      <option value="US">US</option>
                      <option value="NG">NG</option>
                      <option value="UK">UK</option>
                      <option value="CA">CA</option>
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="privacy" className="h-4 w-4 rounded border-gray-300" required />
                  <label htmlFor="privacy" className="text-sm">
                    You agree to our friendly{" "}
                    <a href="#" className="text-[#6642EC] underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white">
                  Send message
                </Button>
              </form>
            </div>

            <div className="relative h-[700px] rounded-xl overflow-hidden">
              <Image
                src={Con}
                alt="Abstract geometric pattern"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 