import img1 from '../assets/about 1.jpeg'
import img2 from '../assets/about 2.jpg'
import img3 from '../assets/about 3.jpg'
import img4 from '../assets/about 4.jpeg'
import img5 from '../assets/about 5.jpg'
import img6 from '../assets/about 6.jpeg'
import img7 from '../assets/about 7.jpeg'
import img8 from '../assets/about 8.jpeg'
import img9 from '../assets/about 9.jpeg'

import { useState, useEffect } from "react"

const About = () => {
  const [activeStory, setActiveStory] = useState(0)
  const [countersStarted, setCountersStarted] = useState(false)
  const [stats, setStats] = useState({
    stores: 0,
    countries: 0,
    cups: 0,
    donuts: 0,
  })

  // Company timeline/story
  const storyTimeline = [
    {
      year: "1950",
      title: "The Beginning",
      description: "Bill Rosenberg opened the first Dunkin' Donuts in Quincy, Massachusetts",
      image: img1,
      color: "from-orange-500 to-yellow-500",
    },
    {
      year: "1955",
      title: "Franchise Growth",
      description: "The first franchise location opened, beginning our expansion journey",
      image: img2,
      color: "from-pink-500 to-purple-500",
    },
    {
      year: "1970s",
      title: "Coffee Revolution",
      description: "We became America's favorite coffee destination with our signature blends",
      image: img3,
      color: "from-amber-600 to-orange-600",
    },
    {
      year: "2000s",
      title: "Global Expansion",
      description: "Dunkin' went international, bringing our flavors to the world",
      image: img4,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "Today",
      title: "Innovation Continues",
      description: "Leading with new flavors, technology, and sustainable practices",
      image: img5,
      color: "from-green-500 to-teal-500",
    },
  ]

  // Final stats
  const finalStats = {
    stores: 12000,
    countries: 40,
    cups: 1800000000,
    donuts: 2900000000,
  }

  // Product categories showcase
  const productCategories = [
    {
      name: "Signature Donuts",
      description: "Handcrafted daily with premium ingredients",
      image: img6,
      items: ["Original Glazed", "Boston Kreme", "Chocolate Frosted", "Jelly Filled"],
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Premium Coffee",
      description: "Expertly roasted beans for the perfect cup",
      image: img7,
      items: ["Hot Coffee", "Iced Coffee", "Cold Brew", "Espresso"],
      color: "from-amber-600 to-orange-600",
    },
    {
      name: "Refreshing Beverages",
      description: "Cool and fruity drinks for every season",
      image: img8,
      items: ["Fruit Refreshers", "Iced Tea", "Frozen Coffee", "Smoothies"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fresh Food",
      description: "Delicious breakfast and snacks made fresh",
      image:img9,
      items: ["Breakfast Sandwiches", "Wraps", "Muffins", "Bagels"],
      color: "from-yellow-500 to-orange-500",
    },
  ]

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true)
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    const statsElement = document.getElementById("stats-section")
    if (statsElement) {
      observer.observe(statsElement)
    }

    return () => observer.disconnect()
  }, [countersStarted])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        stores: Math.floor(finalStats.stores * progress),
        countries: Math.floor(finalStats.countries * progress),
        cups: Math.floor(finalStats.cups * progress),
        donuts: Math.floor(finalStats.donuts * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setStats(finalStats)
      }
    }, stepDuration)
  }

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B"
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25 animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-orange-500">ABOUT</span>{" "}
              <span className="text-pink-700 relative">
                DUNKIN'
                <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 to-pink-700 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              More than just coffee and donuts - we're a part of your daily ritual, your morning fuel, your afternoon
              pick-me-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Our Story
              </button>
              <button className="border-2 border-pink-700 text-pink-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 hover:text-white transition-all duration-200">
                Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-8">
              <span className="text-pink-700">OUR</span> MISSION
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <p className="text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                "To be the leading provider of the wide range of delicious beverages & baked goods, served in a
                welcoming environment that makes each guest smile."
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl mb-2">☕</div>
                  <p className="text-sm font-bold text-gray-600">QUALITY</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">❤️</div>
                  <p className="text-sm font-bold text-gray-600">COMMUNITY</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-sm font-bold text-gray-600">ENERGY</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌟</div>
                  <p className="text-sm font-bold text-gray-600">EXCELLENCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              <span className="text-orange-500">OUR</span> <span className="text-pink-700">JOURNEY</span>
            </h2>
            <p className="text-xl text-gray-600">From a single store to a global phenomenon</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {storyTimeline.map((story, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    activeStory === index
                      ? `bg-gradient-to-r ${story.color} text-white shadow-lg`
                      : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                  }`}
                >
                  {story.year}
                </button>
              ))}
            </div>

            {/* Active Story Display */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div
                    className={`inline-block bg-gradient-to-r ${storyTimeline[activeStory].color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit`}
                  >
                    {storyTimeline[activeStory].year}
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">{storyTimeline[activeStory].title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{storyTimeline[activeStory].description}</p>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={storyTimeline[activeStory].image || "/placeholder.svg"}
                    alt={storyTimeline[activeStory].title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${storyTimeline[activeStory].color} opacity-20`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section id="stats-section" className="py-16 bg-gradient-to-r from-orange-500 to-pink-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">BY THE NUMBERS</h2>
            <p className="text-xl text-white/90">Our impact around the world</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-black text-white mb-2">{formatNumber(stats.stores)}+</div>
              <p className="text-white/90 font-bold text-lg">STORES WORLDWIDE</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-black text-white mb-2">{stats.countries}+</div>
              <p className="text-white/90 font-bold text-lg">COUNTRIES</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-black text-white mb-2">{formatNumber(stats.cups)}</div>
              <p className="text-white/90 font-bold text-lg">CUPS OF COFFEE ANNUALLY</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-black text-white mb-2">{formatNumber(stats.donuts)}</div>
              <p className="text-white/90 font-bold text-lg">DONUTS MADE ANNUALLY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              <span className="text-orange-500">OUR</span> <span className="text-pink-700">PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-600">Crafted with love, served with a smile</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border-2 border-transparent hover:border-pink-200"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${category.color} p-6 h-64`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                <span className="text-pink-700">OUR</span> VALUES
              </h2>
              <p className="text-xl text-gray-600">What drives us every day</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl text-white">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">SUSTAINABILITY</h3>
                <p className="text-gray-600">
                  Committed to responsible sourcing and environmental stewardship in everything we do.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">COMMUNITY</h3>
                <p className="text-gray-600">
                  Supporting local communities and creating connections that matter, one cup at a time.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl text-white">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">INNOVATION</h3>
                <p className="text-gray-600">
                  Constantly evolving our menu, technology, and experience to exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">JOIN THE DUNKIN' FAMILY</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that quality, community, and passion make in every cup and every bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Find a Store
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-700 transition-all duration-200">
              Join DD Rewards
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
