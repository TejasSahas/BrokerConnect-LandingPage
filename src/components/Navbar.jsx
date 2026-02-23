import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">BrokerJodo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/#features" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link to="/#how-it-works" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </Link>
              <Link to="/#matches" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Matches
              </Link>
              <Link to="/#benefits" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Benefits
              </Link>
              <Link to="/enquiry" className="ml-4 px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/#features" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link to="/#matches" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
              Matches
            </Link>
            <Link to="/#benefits" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
              Benefits
            </Link>
            <Link to="/enquiry" className="block w-full mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
