"use client"
import { useState, FormEvent } from "react";
import { Check, Zap, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function OurServices() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentService, setCurrentService] = useState("");

  const openContactModal = (service: string) => {
    setCurrentService(service);
    setShowContactModal(true);
  };

  const openQuoteModal = (service: string) => {
    setCurrentService(service);
    setShowQuoteModal(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showContactModal) {
      setShowContactModal(false);
    } else {
      setShowQuoteModal(false);
    }
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="services" className="py-2 bg-[#FEF4EE] md:py-2 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mt-8 font-bold text-center text-[#2A007A] mb-6">Our Services</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Our guiding principle is to connect you to what matters most to you. We are also committed to continue
            delivering on our promises to you by providing a better, faster, more reliable broadband Internet at
            unparalleled value for money.
          </p>
          <h3 className="text-xl font-semibold text-center mb-12">Choose a plan that's right for you</h3>
        </motion.div>

        {/* First row with main internet services - centered */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="rounded-xl shadow-lg p-6 text-white h-full flex flex-col max-w-md"
            style={{ background: "linear-gradient(18deg, #F15A29 0%, #2A007A 100%)" }}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-semibold text-center mb-4">FIBER INTERNET</h3>
            <p className="text-sm text-center mb-6 flex-grow">
              Surf the web with lightning speed using our Fiber Internet service. Experience fast browsing and
              downloads for your home or business.
            </p>
            <Button 
              className="w-full bg-white text-[#2A007A] hover:bg-white/90"
              onClick={() => openContactModal("FIBER INTERNET")}
            >
              Contact Sales
            </Button>
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Complimentary VoIP unified communication solution</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">All Bandwidth Size Available</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Versatile Deployment</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Unlimited Sharing</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Personalized Support</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Unlimited Internet</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl shadow-lg p-6 text-white h-full flex flex-col max-w-md"
            style={{ background: "linear-gradient(18deg, #F15A29 0%, #2A007A 100%)" }}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-semibold text-center mb-4">UNLIMITED WIFI INTERNET</h3>
            <p className="text-sm text-center mb-6 flex-grow">
              Offering high-speed broadband internet services to residences, businesses, events, and conferences, and
              deploying public Wi-Fi hotspots throughout Nigeria.
            </p>
            <Button 
              className="w-full bg-white text-[#2A007A] hover:bg-white/90"
              onClick={() => openContactModal("UNLIMITED WIFI INTERNET")}
            >
              Contact Sales
            </Button>
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Complimentary VoIP unified communication solution</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">All Bandwidth Size Available</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Versatile Deployment</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Unlimited Sharing</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Personalized Support</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm">Unlimited Internet</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second row with other services in grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#6642EC]/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#6642EC]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#6642EC] mb-3">
              Audio & Video Conference Solution
            </h3>
            <p className="text-sm text-center text-muted-foreground mb-6 flex-grow">
              The delivery of smooth and efficient meetings is guaranteed by our solution, ensuring high-quality audio
              and video collaboration experience for engaging with colleagues locally or internationally.
            </p>
            <Button 
              className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white"
              onClick={() => openQuoteModal("Audio & Video Conference Solution")}
            >
              Get A Quote
            </Button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#6642EC]/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#6642EC]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#6642EC] mb-3">PBX Services</h3>
            <p className="text-sm text-center text-muted-foreground mb-6 flex-grow">
              For voice services that provide local voice presence in various countries and in locations, our
              extensive network offers unmatched reach, enabling access to areas beyond the capabilities of others.
            </p>
            <Button 
              className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white"
              onClick={() => openQuoteModal("PBX Services")}
            >
              Get A Quote
            </Button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#6642EC]/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#6642EC]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#6642EC] mb-3">Virtual numbers (DID)</h3>
            <p className="text-sm text-center text-muted-foreground mb-6 flex-grow">
              Our offering includes support for call forwarding, voicemail, and call recording features. These
              international DIDs can be seamlessly integrated with BABS's netbox with Syndeo OpenVoice Cloud PBX and
              SIP Trunk Service.
            </p>
            <Button 
              className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white"
              onClick={() => openQuoteModal("Virtual numbers (DID)")}
            >
              Get A Quote
            </Button>
          </motion.div>
          
          {/* Center these two services on mobile and make them justified and centralized */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full mx-auto md:mx-0 max-w-md md:max-w-none md:col-span-1 lg:col-span-1"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#6642EC]/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#6642EC]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#6642EC] mb-3">VoIP Carrier Services</h3>
            <p className="text-sm text-center text-muted-foreground mb-6 flex-grow">
              Our VoIP solution offers your organization the opportunity to improve communication, streamline
              operations, and provide outstanding service. We would welcome the opportunity to explore how our
              solution can help your company.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Effortlessly connect with team both within and outside your organization
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Simplify the transfer of existing phone numbers to our system
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Facilitate seamless communication within your network</p>
              </div>
            </div>
            <Button 
              className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white mt-auto"
              onClick={() => openQuoteModal("VoIP Carrier Services")}
            >
              Get A Quote
            </Button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full mx-auto md:mx-0 max-w-md md:max-w-none md:col-span-1 lg:col-span-1"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#6642EC]/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#6642EC]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#6642EC] mb-3">Session Initiation Protocol</h3>
            <p className="text-sm text-center text-muted-foreground mb-6 flex-grow">
              Deliver the dependable voice calling that your customers seek, coupled with a more adaptable
              usage-based pricing model and the essential software tools required for navigating your digital
              transformation.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Ensuring high quality calling on a large scale is consistently guaranteed
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Our Dashboard's API suite streamlines ports, orders, and cost insights
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  We help enterprises navigate the cloud communications transition for long-term success
                </p>
              </div>
            </div>
            <Button 
              className="w-full bg-[#6642EC] hover:bg-[#6642EC]/90 text-white mt-auto" 
              onClick={() => openQuoteModal("Session Initiation Protocol")}
            >
              Get A Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Sales Modal */}
      {showContactModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold text-center mb-4">{currentService}</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="example@mail.com" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="1234 5678 1234" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div className="flex gap-4 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowContactModal(false)}
                    className="w-1/2 p-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="w-1/2 p-2 bg-[#F15A29] text-white rounded-md hover:bg-[#F15A29]/90"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <button 
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold text-center mb-4">{currentService}</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="quote-name" className="block text-sm text-gray-600 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="quote-name" 
                    placeholder="John Doe" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="quote-email" className="block text-sm text-gray-600 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="quote-email" 
                    placeholder="example@mail.com" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="quote-phone" className="block text-sm text-gray-600 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="quote-phone" 
                    placeholder="1234 5678 1234" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div className="flex gap-4 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowQuoteModal(false)}
                    className="w-1/2 p-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="w-1/2 p-2 bg-[#6642EC] text-white rounded-md hover:bg-[#6642EC]/90"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div 
                className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Check className="h-6 w-6 text-green-500" />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Your response has been received</h3>
            <p className="text-center text-gray-600 mb-6">
              One of our representatives will reach out to you shortly.
            </p>
            <Button 
              className="w-full bg-[#F15A29] hover:bg-[#F15A29]/90 text-white"
              onClick={closeConfirmation}
            >
              Ok
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}