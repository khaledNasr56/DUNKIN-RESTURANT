"use client"

import { useState } from "react"

const Location = () => {
  const [selectedStore, setSelectedStore] = useState(null)

  // Store locations
  const storeLocations = [
    {
      id: 1,
      name: "Downtown Boston",
      address: "123 Washington St, Boston, MA 02108",
      phone: "(617) 555-0123",
      coordinates: { lat: 42.3601, lng: -71.0589 },
      hours: "Mon-Sun: 5:00 AM - 10:00 PM",
      image: "/placeholder.svg?height=200&width=300&text=Downtown+Boston",
    },
    {
      id: 2,
      name: "Cambridge Square",
      address: "456 Harvard Ave, Cambridge, MA 02139",
      phone: "(617) 555-0456",
      coordinates: { lat: 42.3736, lng: -71.1097 },
      hours: "Mon-Sun: 5:30 AM - 9:00 PM",
      image: "/placeholder.svg?height=200&width=300&text=Cambridge+Square",
    },
    {
      id: 3,
      name: "Quincy Center",
      address: "789 Hancock St, Quincy, MA 02169",
      phone: "(617) 555-0789",
      coordinates: { lat: 42.2529, lng: -71.0023 },
      hours: "Mon-Sun: 24 Hours",
      image: "/placeholder.svg?height=200&width=300&text=Quincy+Center",
    },
    {
      id: 4,
      name: "Back Bay Station",
      address: "145 Dartmouth St, Boston, MA 02116",
      phone: "(617) 555-0145",
      coordinates: { lat: 42.3467, lng: -71.0753 },
      hours: "Mon-Sun: 5:00 AM - 9:00 PM",
      image: "/placeholder.svg?height=200&width=300&text=Back+Bay+Station",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-orange-500">OUR</span>{" "}
              <span className="text-pink-700 relative">
                LOCATIONS
                <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 to-pink-700 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">Find your nearest Dunkin' location</p>
          </div>
        </div>
      </section>

      {/* Map & Store List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Map Header */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-700 p-6 text-white">
                  <h3 className="text-2xl font-black mb-2">STORE MAP</h3>
                  <p className="text-white/90">
                    {selectedStore ? `Showing: ${selectedStore.name}` : "Click on a store to view on map"}
                  </p>
                </div>

                {/* Map Container */}
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-cyan-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🗺️</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h4>
                      {selectedStore ? (
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-sm mx-auto">
                          <h5 className="font-bold text-gray-900 mb-2">{selectedStore.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{selectedStore.address}</p>
                          <div className="flex items-center justify-center space-x-4 text-sm">
                            <span className="flex items-center space-x-1">
                              <span className="text-green-500">📍</span>
                              <span>Lat: {selectedStore.coordinates.lat}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <span className="text-blue-500">📍</span>
                              <span>Lng: {selectedStore.coordinates.lng}</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-600">Select a store to view location</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store List */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black text-gray-900 mb-8">
                <span className="text-pink-700">STORE</span> LOCATIONS
              </h2>

              <div className="space-y-6">
                {storeLocations.map((store, index) => (
                  <div
                    key={store.id}
                    onClick={() => setSelectedStore(store)}
                    className={`group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-2 ${
                      selectedStore?.id === store.id ? "border-pink-700 bg-pink-50" : "border-transparent"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Store Image */}
                      <div className="sm:col-span-1">
                        <img
                          src={store.image || "/placeholder.svg"}
                          alt={store.name}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </div>

                      {/* Store Details */}
                      <div className="sm:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-700 transition-colors duration-200 mb-3">
                          {store.name}
                        </h3>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-pink-700 text-lg mt-1">📍</span>
                            <p className="text-gray-600">{store.address}</p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-pink-700 text-lg">📞</span>
                            <p className="text-gray-600">{store.phone}</p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-pink-700 text-lg">🕒</span>
                            <p className="text-gray-600">{store.hours}</p>
                          </div>
                        </div>

                        <div className="flex space-x-3 mt-6">
                          <button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-700 text-white py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-200">
                            Get Directions
                          </button>
                          <button className="flex-1 border-2 border-pink-700 text-pink-700 py-2 rounded-full font-bold text-sm hover:bg-pink-700 hover:text-white transition-all duration-200">
                            Call Store
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Store Details */}
      {selectedStore && (
        <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Store Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={selectedStore.image || "/placeholder.svg"}
                      alt={selectedStore.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-black mb-2">{selectedStore.name}</h3>
                      <p className="text-white/90">Selected Location</p>
                    </div>
                  </div>

                  {/* Store Details */}
                  <div className="p-8 lg:p-12">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Store Information</h4>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <span className="text-pink-700 text-2xl">📍</span>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Address</h5>
                          <p className="text-gray-600">{selectedStore.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <span className="text-pink-700 text-2xl">📞</span>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Phone</h5>
                          <p className="text-gray-600">{selectedStore.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <span className="text-pink-700 text-2xl">🕒</span>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Hours</h5>
                          <p className="text-gray-600">{selectedStore.hours}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <span className="text-pink-700 text-2xl">🗺️</span>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">Coordinates</h5>
                          <p className="text-gray-600">
                            Lat: {selectedStore.coordinates.lat}, Lng: {selectedStore.coordinates.lng}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-700 text-white py-3 rounded-full font-bold hover:shadow-lg transition-all duration-200">
                        Get Directions
                      </button>
                      <button className="flex-1 border-2 border-pink-700 text-pink-700 py-3 rounded-full font-bold hover:bg-pink-700 hover:text-white transition-all duration-200">
                        Call Store
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Location
