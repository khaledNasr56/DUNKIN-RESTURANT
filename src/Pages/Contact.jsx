import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactReason: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactReasons = [
    { value: "general", label: "General Inquiry" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "complaint", label: "Complaint" },
    { value: "franchise", label: "Franchise Opportunities" },
    { value: "careers", label: "Career Inquiries" },
    { value: "media", label: "Media & Press" },
    { value: "partnership", label: "Partnership" },
    { value: "technical", label: "Technical Support" },
  ]

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak with our customer service team",
      contact: "1-800-DUNKIN (1-800-386-5461)",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM EST",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "✉️",
      title: "Email Us",
      description: "Send us your questions or feedback",
      contact: "customercare@dunkinbrands.com",
      hours: "We respond within 24 hours",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on our website",
      hours: "Mon-Sun: 7:00 AM - 11:00 PM EST",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Connect with us on social platforms",
      contact: "@DunkinDonuts",
      hours: "Follow us for updates & news",
      color: "from-green-500 to-teal-500",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        contactReason: "general",
      })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25 animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-orange-500">CONTACT</span>{" "}
              <span className="text-pink-700 relative">
                US
                <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 to-pink-700 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you! Get in touch with us for any questions, feedback, or just to say hello.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">⚡</span>
                <span className="font-bold text-gray-700">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🌟</span>
                <span className="font-bold text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">❤️</span>
                <span className="font-bold text-gray-700">We Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              <span className="text-pink-700">GET IN</span> <span className="text-orange-500">TOUCH</span>
            </h2>
            <p className="text-xl text-gray-600">Choose the way that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border-2 border-transparent hover:border-pink-200"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${method.color} p-6 text-center`}>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className="font-bold text-gray-900">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  <span className="text-pink-700">SEND US</span> A MESSAGE
                </h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-bold text-green-800">Message Sent Successfully!</p>
                      <p className="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Contact Reason *</label>
                    <select
                      name="contactReason"
                      value={formData.contactReason}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                    >
                      {contactReasons.map((reason) => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-200 transition-all duration-200 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-pink-700 hover:from-orange-600 hover:to-pink-800 text-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Headquarters Info */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6">
                  <span className="text-orange-500">HEADQUARTERS</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Dunkin' Brands Inc.</p>
                      <p className="text-gray-600">130 Royall Street</p>
                      <p className="text-gray-600">Canton, MA 02021</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Weekend: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Corporate Email</p>
                      <p className="text-gray-600">info@dunkinbrands.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <img
                    src="/placeholder.svg?height=256&width=400&text=Interactive+Map"
                    alt="Dunkin' Headquarters Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">🗺️</div>
                      <p className="font-bold text-gray-900">Interactive Map</p>
                      <p className="text-sm text-gray-600">Click to view in Google Maps</p>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div> 
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              <span className="text-orange-500">FREQUENTLY</span> <span className="text-pink-700">ASKED</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What are your store hours?</h3>
              <p className="text-gray-600">
                Most locations are open from 5:00 AM to 10:00 PM, but hours may vary by location. Check our store
                locator for specific hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer delivery?</h3>
              <p className="text-gray-600">
                Yes! We partner with various delivery services. You can also order through our mobile app for pickup or
                delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How can I join DD Rewards?</h3>
              <p className="text-gray-600">
                Download our mobile app or visit our website to sign up for DD Rewards and start earning points on every
                purchase.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you cater events?</h3>
              <p className="text-gray-600">
                Yes! We offer catering services for meetings, events, and parties. Contact your local store or visit our
                catering page for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
