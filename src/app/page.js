"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, MapPin, Users, Calendar, Star, MessageSquare, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen mx-auto overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#FFCB45] py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Travel <br />
                differently.
              </h1>
              <p className="text-lg md:text-xl text-gray-800 max-w-md">
                Plan your perfect trip with personalized recommendations and collaborative tools.
              </p>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full flex justify-center items-center">
              <Image src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2000&auto=format&fit=crop"
  alt="Travel planning interface"
  width={300}
  height={300}
  className="rounded-full object-cover"
  priority
/>
</div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-l-full"
        />
      </section>

{/* How It Works */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      How It Works
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-10"
    >
      <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
        <div className="relative h-48 w-48 mb-6">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=300&auto=format&fit=crop"
            alt="Start curating"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Start curating</h3>
        <p className="text-gray-600">Discover destinations and save your favorite places to visit.</p>
      </motion.div>

      <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
        <div className="relative h-48 w-48 mb-6">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=300&auto=format&fit=crop"
            alt="Get personalized recommendations"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Get personalized recommendations</h3>
        <p className="text-gray-600">Our AI suggests places based on your preferences and travel style.</p>
      </motion.div>

      <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
        <div className="relative h-48 w-48 mb-6">
          <Image
            src="https://images.unsplash.com/photo-1527631120902-378417754324?q=80&w=300&auto=format&fit=crop"
            alt="Guide with friends"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Guide with friends</h3>
        <p className="text-gray-600">Collaborate with friends to plan the perfect trip together.</p>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Unravel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2000&auto=format&fit=crop"
  alt="Travel itinerary planning"
  fill
  className="object-cover rounded-lg"
/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Unravel and plan your travel itinerary</h2>
              <p className="text-lg text-gray-600">
                Our intuitive tools help you organize your trip day by day, with smart suggestions for activities based
                on location and timing.
              </p>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New at Mindtrip */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            New at Mindtrip
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "AI Trip Planner",
                description: "Let our AI create the perfect itinerary based on your preferences.",
                icon: <Compass className="h-6 w-6" />,
              },
              {
                title: "Group Planning",
                description: "Collaborate with friends to create a trip everyone will love.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Local Insights",
                description: "Get recommendations from locals who know the area best.",
                icon: <MapPin className="h-6 w-6" />,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFCB45] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Everything you need for your next adventure
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Flexible, ready-to-use templates",
                description: "Start with pre-made itineraries for popular destinations.",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                title: "Tailored recommendations",
                description: "Get suggestions that match your travel style and preferences.",
                icon: <Star className="h-6 w-6" />,
              },
              {
                title: "Customizable trip plans",
                description: "Easily modify and adapt your itinerary as your plans change.",
                icon: <Compass className="h-6 w-6" />,
              },
              {
                title: "Collaboration tools",
                description: "Plan together with friends and family in real-time.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Popular itineraries",
                description: "Browse trips created by other travelers for inspiration.",
                icon: <MapPin className="h-6 w-6" />,
              },
              {
                title: "Travel community",
                description: "Connect with fellow travelers and share experiences.",
                icon: <MessageSquare className="h-6 w-6" />,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFCB45] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organize Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Organize it all in one place.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep all your travel plans, ideas, and inspiration organized in a single, easy-to-use platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Trip Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-32">Destination</span>
                    <span className="font-medium">Kyoto, Japan</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Dates</span>
                    <span className="font-medium">May 10-20, 2025</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Travelers</span>
                    <span className="font-medium">2 Adults</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Accommodations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-32">Hotel</span>
                    <span className="font-medium">Kyoto Ryokan</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Check-in</span>
                    <span className="font-medium">May 10, 3:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Check-out</span>
                    <span className="font-medium">May 20, 11:00 AM</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Transportation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-32">Flight</span>
                    <span className="font-medium">JL 718</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Departure</span>
                    <span className="font-medium">May 9, 10:30 PM</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Return</span>
                    <span className="font-medium">May 21, 1:45 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Inspired */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Get inspired
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
  <motion.div
    key={item}
    variants={fadeIn}
    className="relative overflow-hidden rounded-lg aspect-square group"
  >
    <Image
      src={[
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600", // Kyoto
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600", // Bali
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600", // Paris
        "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?q=80&w=600", // New York
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600", // Tokyo
        "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=600", // Rome
        "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=600", // Barcelona
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600", // Sydney
      ][item - 1]}
      alt={`Travel inspiration ${item}`}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Badge className="bg-white text-black hover:bg-gray-100">
                    {["Kyoto", "Bali", "Paris", "New York", "Tokyo", "Rome", "Barcelona", "Sydney"][item - 1]}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What kind of traveler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
  alt="Travel styles"
  fill
  className="object-cover rounded-lg"
/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">What kind of traveler are you?</h2>
              <p className="text-lg text-gray-600">
                Take our quick quiz to discover your travel style and get personalized recommendations that match your
                preferences.
              </p>
              <Button className="bg-[#FFCB45] text-black hover:bg-[#E6B840]">
                Take the quiz <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Create Share Plan */}
      <section className="py-20 bg-[#F8D7CE]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Create. Share. Plan.</h2>
            <p className="text-lg text-gray-800">
              Start planning your dream trip today with Mindtrip's collaborative tools and personalized recommendations.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tag us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Tag us on your next trip
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
           {[1, 2, 3, 4].map((item) => (
  <motion.div key={item} variants={fadeIn} className="relative overflow-hidden rounded-lg aspect-square">
    <Image
      src={[
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600",
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=600",
        "https://images.unsplash.com/photo-1534329539061-64caeb388c42?q=80&w=600",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600"
      ][item - 1]}
      alt={`User travel photo ${item}`}
      fill
      className="object-cover"
    />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-white text-black">@traveler{item}</Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Developers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-2 bg-[#FFCB45] w-8 h-8 rounded-full flex items-center justify-center">
                <Compass className="h-5 w-5 text-black" />
              </div>
              <span className="font-bold text-xl">Mindtrip</span>
            </div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Mindtrip. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

