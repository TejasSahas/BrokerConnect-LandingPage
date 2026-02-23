import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      title: 'No More Messy Groups',
      description: 'Stop wasting time scrolling through hundreds of WhatsApp messages. Everything is organized and searchable.',
      icon: '📱',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Professional Platform',
      description: 'Built specifically for brokers. No spam, no irrelevant messages. Only serious deals and professional connections.',
      icon: '💼',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Save Time & Money',
      description: 'Find the right matches instantly. No need to call dozens of brokers. Our algorithm does the work for you.',
      icon: '⏱️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Grow Your Network',
      description: 'Connect with brokers across India. Build relationships and expand your business network.',
      icon: '🌐',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const problems = [
    { text: 'WhatsApp groups with 500+ messages daily', icon: '❌' },
    { text: 'Facebook groups full of spam and irrelevant posts', icon: '❌' },
    { text: 'Telegram chats that are impossible to track', icon: '❌' },
    { text: 'No way to know if a requirement matches your listing', icon: '❌' },
    { text: 'Wasting time on calls that lead nowhere', icon: '❌' }
  ]

  const solutions = [
    { text: 'Organized platform with smart matching', icon: '✅' },
    { text: 'Match percentage shows compatibility instantly', icon: '✅' },
    { text: 'Location-based filtering for relevant deals', icon: '✅' },
    { text: 'Professional environment for serious brokers', icon: '✅' },
    { text: 'Close more deals, make more money', icon: '✅' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Make Indian Brokerage More Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for brokers, channel partners and builders to collaborate—so the whole ecosystem wins.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Problems */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span>❌</span> The Old Way
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl">{problem.icon}</span>
                  <span>{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
              <span>✅</span> The BrokerJodo Way
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl">{solution.icon}</span>
                  <span>{solution.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-3xl mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
