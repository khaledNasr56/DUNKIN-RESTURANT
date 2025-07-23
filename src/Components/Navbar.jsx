"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Function to check if current page is active
  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "/Home")) {
      return true
    }
    return location.pathname === path
  }

  return (
    <nav className="w-full bg-white">
      {/* Top Header with Careers, Join Rewards, Sign In - Hidden on mobile */}
      <div className="hidden md:flex justify-end items-center px-4 lg:px-8 py-3 bg-white">
        <div className="flex items-center space-x-3">
          {/* Careers Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
              className={`flex items-center font-medium text-sm px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-all duration-200 ${
                isActive("/careers/working") || isActive("/careers/apply") || isActive("/careers/corporate")
                  ? "text-pink-700 border-pink-700 bg-pink-50"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Careers
              <svg
                className={`ml-2 h-3 w-3 transform transition-transform duration-200 ${
                  isCareerDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isCareerDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <Link
                    to="/careers/working"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-200"
                    onClick={() => setIsCareerDropdownOpen(false)}
                  >
                    Working at Dunkin'
                  </Link>
                  <Link
                    to="/careers/apply"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-200"
                    onClick={() => setIsCareerDropdownOpen(false)}
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/careers/corporate"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-200"
                    onClick={() => setIsCareerDropdownOpen(false)}
                  >
                    Corporate Opportunities
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* JOIN REWARDS Button */}
          <Link
            to="/join"
            className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-colors duration-200 ${
              isActive("/join") ? "bg-blue-800 text-white" : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}
          >
            JOIN REWARDS
          </Link>

          {/* SIGN IN Button */}
          <Link
            to="/signin"
            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors duration-200 ${
              isActive("/signin") ? "bg-pink-700 text-white" : "bg-pink-500 hover:bg-pink-600 text-white"
            }`}
          >
            SIGN IN
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-4 bg-white">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Left Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/Home"
            className={`font-bold text-sm lg:text-2xl transition-colors duration-200 ${
              isActive("/Home") ? "text-pink-700 border-b-2 border-pink-700 pb-1" : "text-gray-800 hover:text-pink-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className={`font-bold text-sm lg:text-2xl transition-colors duration-200 ${
              isActive("/Menu") ? "text-pink-700 border-b-2 border-pink-700 pb-1" : "text-gray-800 hover:text-pink-700"
            }`}
          >
            Menu
          </Link>
          <Link
            to="/About"
            className={`font-bold text-sm lg:text-2xl transition-colors duration-200 ${
              isActive("/About") ? "text-pink-700 border-b-2 border-pink-700 pb-1" : "text-gray-800 hover:text-pink-700"
            }`}
          >
            About
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center md:flex-none">
          <Link
            to="/"
            className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-200 ${
              isActive("/") || isActive("/Home") ? "text-pink-700" : "text-orange-500 hover:text-pink-700"
            }`}
          >
            DUNKIN'
          </Link>
        </div>

        {/* Right Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/Cards"
            className={`font-bold text-xs lg:text-2xl transition-colors duration-200 text-center leading-tight ${
              isActive("/Cards") ? "text-pink-700 border-b-2 border-pink-700 pb-1" : "text-gray-800 hover:text-pink-700"
            }`}
          >
            DUNKIN'CARD
          </Link>
          <Link
            to="/Location"
            className={`font-bold text-xs lg:text-2xl transition-colors duration-200 text-center leading-tight ${
              isActive("/Location")
                ? "text-pink-700 border-b-2 border-pink-700 pb-1"
                : "text-gray-800 hover:text-pink-700"
            }`}
          >
            Location
          </Link>
          <Link
            to="/Contact"
            className={`font-bold text-sm lg:text-2xl transition-colors duration-200 ${
              isActive("/Contact")
                ? "text-pink-700 border-b-2 border-pink-700 pb-1"
                : "text-gray-800 hover:text-pink-700"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Sign In Button */}
        <Link
          to="/signin"
          className={`md:hidden px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200 ${
            isActive("/signin") ? "bg-pink-700 text-white" : "bg-pink-500 hover:bg-pink-600 text-white"
          }`}
        >
          SIGN IN
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <Link
              to="/Home"
              className={`block font-bold text-lg py-2 transition-colors duration-200 ${
                isActive("/Home") ? "text-pink-700" : "text-gray-800 hover:text-pink-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/Menu"
              className={`block font-bold text-lg py-2 transition-colors duration-200 ${
                isActive("/Menu") ? "text-pink-700" : "text-gray-800 hover:text-pink-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MENU
            </Link>
            <Link
              to="/About"
              className={`block font-bold text-lg py-2 transition-colors duration-200 ${
                isActive("/About") ? "text-pink-700" : "text-gray-800 hover:text-pink-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/Cards"
              className={`block font-bold text-lg py-2 transition-colors duration-200 ${
                isActive("/Cards") ? "text-pink-700" : "text-gray-800 hover:text-pink-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DUNKIN' CARD
            </Link>
            <Link
              to="/Location"
              className={`block font-bold text-lg py-2 transition-colors duration-200 ${
                isActive("/Location") ? "text-pink-700" : "text-gray-800 hover:text-pink-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LOCATION
            </Link>
            <Link
              to="/Contact"
              className={`block font-bold text-lg py-2 transition-colors duration-200 ${
                isActive("/Contact") ? "text-pink-700" : "text-gray-800 hover:text-pink-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                to="/join"
                className={`block w-full py-3 rounded-full text-center font-bold transition-colors duration-200 ${
                  isActive("/join") ? "bg-blue-800 text-white" : "bg-blue-700 hover:bg-blue-800 text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                JOIN REWARDS
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
                  className={`w-full py-3 rounded-full text-center font-bold transition-colors duration-200 ${
                    isActive("/careers/working") || isActive("/careers/apply") || isActive("/careers/corporate")
                      ? "border-2 border-pink-700 text-pink-700 bg-pink-50"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  CAREERS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
