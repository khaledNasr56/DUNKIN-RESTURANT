const Working = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
          {/* Dunkin' Logo */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-700 mb-4">
              DUNKIN'
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-700 mx-auto rounded-full"></div>
          </div>

          {/* Working at Dunkin' Title */}
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            <span className="text-pink-700">WORKING</span> AT <span className="text-orange-500">DUNKIN'</span>
          </h2>

          {/* Coming Soon Message */}
          <div className="mb-8">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Coming Soon</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're working hard to bring you exciting career opportunities and information about working at Dunkin'.
              Stay tuned for updates!
            </p>
          </div>

          {/* Decorative Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
              ☕
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🍩
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              👥
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.6s" }}>
              💼
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-700 hover:from-orange-600 hover:to-pink-800 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </a>
            <a
              href="/Contact"
              className="inline-block border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            In the meantime, feel free to explore our other pages or contact us for any inquiries.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Working
