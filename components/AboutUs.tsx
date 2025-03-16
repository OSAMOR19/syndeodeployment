import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Whowe from "@/components/images/who.svg";
import Mission from "@/components/images/mission.svg";
import Vision from "@/components/images/vision.svg";
import Philosophy from "@/components/images/philosophy.svg";
import Whychose from "@/components/images/whychose.svg";
import bullet from "@/components/images/bulletpoint2.svg";

export default function AboutUs() {
  return (
    <section id="about" className="py-14 md:py-20 lg:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A007A] mb-10 md:mb-16">
          About Us
        </h2>

        {/* Who We Are Section */}
        <div
          className="relative p-6 md:p-8 lg:p-10 rounded-lg bg-white border-[4px] border-transparent"
          style={{
            borderImage: "linear-gradient(to right, #F15A29, #2A007A) 1",
          }}
        >
          <div className="flex justify-center items-center space-x-4">
            <Image src={Whowe} alt="Who We Are" width={60} height={60} />
            <h3 className="text-xl md:text-2xl font-semibold text-[#252C32]">
              Who We Are?
            </h3>
          </div>
          <p className="mt-4 text-[#252C32]">
            SYNDEO SOLUTIONS INTERNATIONAL LTD is an NCC-licensed Internet
            Service Provider and a Private Network Link operator. Syndeo's
            purpose, values, and mission serve as a blueprint to steer the daily
            performance and decisions of every single employee. These key
            philosophies enlighten and enthuse all of our actions, and discern
            us as a customer-focused leader in the telecommunication industry.
            Syndeo draws strength and direction from its strong, experienced
            management team. This team leads and inspires the company with its
            significant industry and business experience.
          </p>
        </div>

        {/* Three-Column Section - Updated for tablet responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
          {[
            {
              img: Mission,
              title: "Mission",
              text: "Syndeo's mission is to make an extraordinary impact on the world through technology. We raise the bar by making a difference in the lives of the people we serve, meeting their goals, acting with integrity, and building lifelong relationships leading to constant referrals and repeat business.",
            },
            {
              img: Vision,
              title: "Vision",
              text: "Our commitment to exceptional service, meticulous attention to detail, and outstanding performance have established us as a highly esteemed and in-demand technology company in Nigeria. Clients actively seek our expertise, fellow agents eagerly collaborate with us, and our members take pride in delivering remarkable results and experiencing continuous growth.",
            },
            {
              img: Philosophy,
              title: "Philosophy",
              text: "We aspire to lead a high-performance technology team that positively impacts our clients, our community, and ultimately the world. Our core values include family, respect, and giving back to those in need, which serve as the foundation of our lives and business.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-white border-[4px] border-transparent mx-auto sm:max-w-[500px] md:max-w-none"
              style={{
                borderImage: "linear-gradient(to right, #F15A29, #2A007A) 1",
              }}
            >
              <div className="flex flex-row justify-center items-center space-x-3">
                <Image src={item.img} alt={item.title} width={50} height={50} className="w-10 h-10 md:w-12 md:h-12" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#252C32]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 sm:mt-4 text-center text-[#252C32] text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div
          className="relative p-6 md:p-8 lg:p-10 rounded-lg bg-white border-[4px] border-transparent mt-8 md:mt-12"
          style={{
            borderImage: "linear-gradient(to right, #F15A29, #2A007A) 1",
          }}
        >
          <div className="flex justify-center items-center space-x-4 mb-6 md:mb-8">
            <Image src={Whychose} alt="Why Choose Us" width={60} height={60} />
            <h3 className="text-xl md:text-2xl font-semibold text-[#2A007A]">
              Why Choose Us
            </h3>
          </div>
          
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            {[
              "Top-Notch Customer Care: We Offer Round-The-Clock Customer Support To Our Clients.",
              "Reliable Service: We Provide Fast And Reliable Internet Service Using Cutting-Edge Technology, Ensuring 99.9% Network Uptime To Boost Your Business.",
            ].map((reason, i) => (
              <div key={i} className="flex items-start justify-center text-center max-w-3xl px-2 sm:px-4">
                <div className="flex-shrink-0 items-start mr-3 md:mr-4 mt-1">
                  <Image src={bullet} alt="Bullet point" width={20} height={20} />
                </div>
                <p className="text-sm sm:text-base">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section id="what-we-do" className="py-8 md:py-10">
        <div className="container px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2A007A] mb-6 md:mb-8">
            What we do?
          </h2>
          <p className="text-center text-black max-w-3xl mx-auto mb-2 text-sm sm:text-base">
            We are committed to empowering our clients with technology to boost
            their productivity and offering digital services that add value for
            their customers, meeting their needs and giving them a competitive
            edge.
          </p>
        </div>
      </section>
    </section>
  );
}