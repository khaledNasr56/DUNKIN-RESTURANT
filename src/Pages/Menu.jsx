"use client"
import { useState, useEffect } from "react"
import img1 from '../assets/menu 1.jpeg'
import img2 from '../assets/menu 2.jpeg'
 import img3 from '../assets/menu 3.webP'
 import img4 from '../assets/menu 4.jpg'
import img5 from '../assets/menu 5.jpg'
import img6 from '../assets/menu 6.jpg'
import img7 from '../assets/menu 7.jpeg'
import img8 from '../assets/menu 8.jpg'
import img9 from '../assets/menu 9.jpeg'
import img10 from '../assets/menu 10.jpeg'
import img11 from '../assets/menu 11.jpg'
import img12 from '../assets/menu 12.jpg'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Menu categories
  const categories = [
    { id: "all", name: "All Items", icon: "🍽️", color: "from-orange-500 to-pink-700" },
    { id: "donuts", name: "Donuts", icon: "🍩", color: "from-pink-500 to-purple-600" },
    { id: "coffee", name: "Coffee", icon: "☕", color: "from-amber-600 to-orange-600" },
    { id: "refreshers", name: "Refreshers", icon: "🥤", color: "from-blue-500 to-cyan-500" },
    { id: "breakfast", name: "Breakfast", icon: "🥪", color: "from-yellow-500 to-orange-500" },
    { id: "beverages", name: "Beverages", icon: "🧊", color: "from-teal-500 to-blue-600" },
  ]

  // Sample menu items - creative mix of different types
  const menuItems = [
    // Featured/Special Items
    {
      id: 1,
      name: "Signature Glazed",
      category: "donuts",
      price: 1.29,
      originalPrice: 1.49,
      image: img1,
      description: "Our world-famous original glazed donut",
      isSpecial: true,
      isFeatured: true,
      tags: ["Popular", "Original"],
      calories: 260,
    },
    {
      id: 2,
      name: "Iced Signature Latte",
      category: "coffee",
      price: 4.99,
      image: img2,
      description: "Premium espresso with your choice of flavor",
      isNew: true,
      tags: ["New", "Premium"],
      calories: 190,
    },
    // Regular Items
    {
      id: 3,
      name: "Boston Kreme",
      category: "donuts",
      price: 1.49,
      image: img3,
      description: "Filled with rich bavarian kreme",
      tags: ["Classic"],
      calories: 300,
    },
    {
      id: 4,
      name: "Strawberry Dragonfruit Refresher",
      category: "refreshers",
      price: 3.79,
      image: img4,
      description: "Tropical blend with real fruit flavors",
      isPopular: true,
      tags: ["Fruity", "Refreshing"],
      calories: 130,
    },
    {
      id: 5,
      name: "Sausage Egg & Cheese",
      category: "breakfast",
      price: 4.49,
      image: img5,
      description: "Warm breakfast sandwich on your choice of bread",
      tags: ["Protein", "Hearty"],
      calories: 520,
    },
    {
      id: 6,
      name: "Chocolate Frosted",
      category: "donuts",
      price: 1.39,
      image: img6,
      description: "Classic chocolate frosted donut",
      tags: ["Chocolate", "Classic"],
      calories: 280,
    },
    {
      id: 7,
      name: "Cold Brew",
      category: "coffee",
      price: 2.99,
      image: img7,
      description: "Smooth, bold cold brew coffee",
      tags: ["Bold", "Smooth"],
      calories: 15,
    },
    {
      id: 8,
      name: "Mango Pineapple Refresher",
      category: "refreshers",
      price: 3.79,
      image: img8,
      description: "Tropical paradise in a cup",
      tags: ["Tropical", "Sweet"],
      calories: 140,
    },
    {
      id: 9,
      name: "Jelly Filled",
      category: "donuts",
      price: 1.49,
      image: img9,
      description: "Filled with grape jelly",
      tags: ["Fruity", "Classic"],
      calories: 270,
    },
    {
      id: 10,
      name: "Frozen Coffee",
      category: "beverages",
      price: 3.99,
      image: img10,
      description: "Blended coffee drink with whipped cream",
      tags: ["Frozen", "Sweet"],
      calories: 420,
    },
    {
      id: 11,
      name: "Avocado Toast",
      category: "breakfast",
      price: 5.99,
      image: img11,
      description: "Fresh avocado on multigrain toast",
      isNew: true,
      tags: ["Healthy", "New"],
      calories: 340,
    },
    {
      id: 12,
      name: "Matcha Latte",
      category: "beverages",
      price: 4.49,
      image: img12,
      description: "Premium matcha with steamed milk",
      isSpecial: true,
      tags: ["Premium", "Unique"],
      calories: 230,
    },
  ]

  // Filter items based on category and search
  useEffect(() => {
    let filtered = menuItems

    if (activeCategory !== "all") {
      filtered = filtered.filter((item) => item.category === activeCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredItems(filtered)
  }, [activeCategory, searchTerm])

  // Loading effect
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const featuredItems = menuItems.filter((item) => item.isFeatured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-700/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-orange-500">OUR</span>{" "}
              <span className="text-pink-700 relative">
                MENU
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-pink-700 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our delicious selection of donuts, coffee, and refreshing beverages crafted with love
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search for your favorite..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border-2 border-pink-200 focus:border-pink-700 focus:outline-none text-lg shadow-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      {featuredItems.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-8 text-gray-900">
              ⭐ <span className="text-pink-700">FEATURED</span> FAVORITES
            </h2>
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-pink-200"
                >
                  <div className="relative p-6">
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-contain mb-4 transform hover:rotate-3 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-pink-700">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${item.originalPrice}</span>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-orange-500 to-pink-700 text-white px-4 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-200">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Navigation */}
      <section className="py-8 sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-pink-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-8 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border-2 border-transparent hover:border-pink-200 ${
                    item.isFeatured ? "ring-2 ring-pink-300" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Special Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                    {item.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </span>
                    )}
                    {item.isSpecial && (
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        SPECIAL
                      </span>
                    )}
                  </div>

                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 p-6 h-64">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-700 transition-colors duration-200">
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-500">{item.calories} cal</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-pink-700">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${item.originalPrice}</span>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-orange-500 to-pink-700 hover:from-orange-600 hover:to-pink-800 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your search or browse different categories</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Can't Decide? 🤔</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our team help you find the perfect combination for your taste buds!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get Recommendations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-700 transition-all duration-200">
              View Nutritional Info
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
