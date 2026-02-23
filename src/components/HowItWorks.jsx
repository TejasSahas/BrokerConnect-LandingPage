import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Broker A has a Requirement',
      description: 'A broker has a client looking for a property - they post the requirement with details like location, budget, property type, and preferences.',
      icon: '📝'
    },
    {
      number: '2',
      title: 'Broker B has a Listing',
      description: 'Another broker has a property listing that matches the requirement. They can see the requirement and submit their listing.',
      icon: '🏠'
    },
    {
      number: '3',
      title: 'Smart Algorithm Matches',
      description: 'Our algorithm analyzes location, budget, property type, and other factors to calculate a match percentage between requirement and listing.',
      icon: '🤖'
    },
    {
      number: '4',
      title: 'Connect & Close Deals',
      description: 'Both brokers get notified with match details. They connect, discuss, and close the deal - all organized in one platform.',
      icon: '🤝'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and effective. Get started in minutes and start closing deals.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-4 text-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
