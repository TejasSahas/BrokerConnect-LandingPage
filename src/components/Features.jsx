import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Matching Algorithm',
      description: 'Our AI-powered algorithm connects brokers with requirements to brokers with listings, showing match percentages based on location, budget, and property type.'
    },
    {
      icon: '💼',
      title: 'Organized Collaboration',
      description: 'Say goodbye to chaotic WhatsApp groups and Facebook groups. Everything is organized in one professional platform designed for brokers.'
    },
    {
      icon: '📍',
      title: 'Location-Based Matching',
      description: 'Find brokers in your area or connect with brokers across India. Our location matching helps you find the right deals faster.'
    },
    {
      icon: '📊',
      title: 'Match Percentage System',
      description: 'See exactly how well a requirement matches a listing with our percentage-based matching system. No more guessing!'
    },
    {
      icon: '💰',
      title: 'Make More Money',
      description: 'Close more deals by connecting with the right brokers at the right time. Our platform helps you maximize your earnings.'
    },
    {
      icon: '🇮🇳',
      title: 'Built for Indian Brokers',
      description: 'Designed keeping Indian real estate market and broker behavior in mind. Simple, straightforward, and effective.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Broker Connect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to organize your brokerage business and close more deals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-xl border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
