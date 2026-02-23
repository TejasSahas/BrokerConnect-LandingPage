import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'broker',
    preferredDate: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative min-h-[calc(100vh-8rem)] bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: What you're enquiring for */}
            <div className="order-2 lg:order-1">
              <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to home
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Schedule a meeting with us
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                You're here because you want to get the most out of BrokerJodo. We'll walk you through everything—no commitment, no hassle.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Get onboarded on the platform</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We'll set up your profile, show you the dashboard and explain how to add and manage your listings and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Free listings for properties & requirements</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Start listing your properties and requirements at no cost. Get matched with the right brokers, channel partners and builders so you can close more deals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Collaborate and grow</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Join the ecosystem where brokers, channel partners and builders work together. One short call and you're ready to go.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-gray-500 text-sm">
                Fill in the form and we'll get back to you to fix a time that works. Usually within 24 hours.
              </p>
            </div>

            {/* Right: Enquiry form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Request received</h3>
                    <p className="text-gray-600 mb-6">
                      We'll reach out soon to schedule your onboarding call.
                    </p>
                    <Link to="/" className="text-primary-600 font-semibold hover:text-primary-700">
                      Return to home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Book your onboarding call</h2>
                    <p className="text-gray-600 mb-6">Share your details and we'll get in touch.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                        >
                          <option value="broker">Broker</option>
                          <option value="channel_partner">Channel Partner</option>
                          <option value="builder">Builder</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred date / time (optional)</label>
                        <input
                          type="text"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                          placeholder="e.g. Tomorrow 4 PM"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                          placeholder="Anything you'd like us to know..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Submit enquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Enquiry
