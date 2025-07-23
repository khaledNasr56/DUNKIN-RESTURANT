import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import img6 from'../assets/Home 6.JPEG'
import img7 from'../assets/Home 7.JPEG'
import img8 from'../assets/Home 8.JPEG'
import img9 from'../assets/Home 9.JPG'
import img10 from'../assets/Home 10.webP'
import img11 from'../assets/Home 11.jpeg'
import img12 from'../assets/Home 12.webP'
import img13 from'../assets/Home 13.webP'

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Sample products data - يمكنك تغييرها بالمنتجات الحقيقية
  const products = [
    {
      id: 1,
      name: "Original Glazed Donut",
      price: "$1.29",
      image: img6,
      category: "Donuts",
      description: "Our signature glazed donut",
    },
    {
      id: 2,
      name: "Iced Coffee",
      price: "$2.49",
      image: img7,
      category: "Coffee",
      description: "Refreshing iced coffee",
    },
    {
      id: 3,
      name: "Boston Kreme",
      price: "$1.49",
      image: img8 ,
      category: "Donuts",
      description: "Filled with bavarian kreme",
    },
    {
      id: 4,
      name: "Strawberry Refresher",
      price: "$3.29",
      image: img9,
      category: "Refreshers",
      description: "Fruity and refreshing",
    },
    {
      id: 5,
      name: "Chocolate Frosted",
      price: "$1.39",
      image: img10,
      category: "Donuts",
      description: "Classic chocolate frosted",
    },
    {
      id: 6,
      name: "Hot Coffee",
      price: "$1.99",
      image: img11,
      category: "Coffee",
      description: "Fresh brewed coffee",
    },
    {
      id: 7,
      name: "Jelly Filled",
      price: "$1.49",
      image: img12,
      category: "Donuts",
      description: "Filled with grape jelly",
    },
    {
      id: 8,
      name: "Mango Refresher",
      price: "$3.29",
      image: img13,
      category: "Refreshers",
      description: "Tropical mango flavor",
    },   
  ]

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const totalSlides = Math.ceil(products.length / itemsPerSlide.desktop)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-orange-500">OUR</span> <span className="text-pink-700">FAVORITES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items that keep our customers coming back for more
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-pink-50 text-pink-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-pink-200 hover:border-pink-700"
            aria-label="Previous products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-pink-50 text-pink-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-pink-200 hover:border-pink-700"
            aria-label="Next products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                    {products
                      .slice(slideIndex * itemsPerSlide.desktop, (slideIndex + 1) * itemsPerSlide.desktop)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                        >
                          {/* Product Image */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 p-6">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            {/* Category Badge */}
                            <div className="absolute top-3 right-3 bg-pink-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                              {product.category}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors duration-200">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-black text-pink-700">{product.price}</span>
                              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm transition-colors duration-200 transform hover:scale-105">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-pink-700 w-8" : "bg-gray-300 hover:bg-pink-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-700 hover:from-orange-600 hover:to-pink-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductSlider
