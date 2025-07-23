
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Press Room", href: "/press" },
    { name: "Mobile App", href: "/app" },
    { name: "Corporate", href: "/corporate" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "About Us", href: "/About" },
    { name: "Franchising", href: "/franchising" },
    { name: "Contact Us", href: "/Contact" },
    { name: "Site Map", href: "/sitemap" },
  ]

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/dunkindonuts",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/dunkindonuts",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/dunkindonuts",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/dunkin",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.68.333 3.938.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.88.131 5.727.072 6.958.013 8.19 0 8.597 0 12.017s.013 3.827.072 5.058c.058 1.23.26 2.078.558 2.818.306.79.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.74.297 1.587.499 2.818.558C7.989 23.988 8.396 24 12.017 24s3.827-.013 5.058-.072c1.23-.058 2.078-.26 2.818-.558.79-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.74.499-1.587.558-2.818.058-1.23.072-1.637.072-5.058s-.013-3.827-.072-5.058c-.058-1.23-.26-2.078-.558-2.818-.306-.79-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.74-.297-1.587-.499-2.818-.558C15.827.013 15.42 0 12.017 0zm0 2.17c3.312 0 3.706.012 5.017.072 1.204.055 1.858.249 2.292.415.576.224.985.492 1.417.923.431.431.699.84.923 1.417.166.434.36 1.088.415 2.292.06 1.311.072 1.705.072 5.017s-.012 3.706-.072 5.017c-.055 1.204-.249 1.858-.415 2.292-.224.576-.492.985-.923 1.417-.431.431-.84.699-1.417.923-.434.166-1.088.36-2.292.415-1.311.06-1.705.072-5.017.072s-3.706-.012-5.017-.072c-1.204-.055-1.858-.249-2.292-.415-.576-.224-.985-.492-1.417-.923-.431-.431-.699-.84-.923-1.417-.166-.434-.36-1.088-.415-2.292-.06-1.311-.072-1.705-.072-5.017s.012-3.706.072-5.017c.055-1.204.249-1.858.415-2.292.224-.576.492-.985.923-1.417.431-.431.84-.699 1.417-.923.434-.166 1.088-.36 2.292-.415 1.311-.06 1.705-.072 5.017-.072z" />
          <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zm0 10.188a4.009 4.009 0 1 1 0-8.018 4.009 4.009 0 0 1 0 8.018z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/dunkindonuts",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@dunkin",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ]



  const legalLinks = [
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Settings", href: "/cookies" },
    { name: "Your Privacy Choices", href: "/privacy-choices" },
    { name: "Consumer Health Data", href: "/health-data" },
    { name: "Do Not Sell My Info", href: "/do-not-sell" },
    { name: "Your Ad Choices", href: "/ad-choices" },
    { name: "CA Transparency in Supply Chains Act", href: "/ca-transparency" },
    { name: "Web Accessibility", href: "/accessibility" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200 mx-9">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 hover:text-pink-700 transition-colors duration-200 text-sm font-medium underline hover:no-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">FOLLOW US</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wide">STAY UPDATED</h3>
            <p className="text-gray-600 text-sm mb-4">Get the latest news, offers, and updates from Dunkin'</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-700 focus:ring-1 focus:ring-pink-700"
              />
              <button className="bg-gradient-to-r from-orange-500 to-pink-700 hover:from-orange-600 hover:to-pink-800 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

     

      {/* Legal Links Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link
                  to={link.href}
                  className="hover:text-pink-700 transition-colors duration-200 underline hover:no-underline"
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && <span className="ml-6 text-gray-300">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link
                to="/"
                className="text-2xl font-black text-orange-500 hover:text-pink-700 transition-colors duration-200"
              >
                DUNKIN'
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-500">America Runs on Dunkin'</span>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              <p>©{currentYear} DD IP Holder LLC</p>
              <p className="mt-1">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-pink-700 hover:from-orange-600 hover:to-pink-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
