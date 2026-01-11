import React from 'react'

const MatchCards = () => {
  const matches = [
    {
      requirementBroker: 'Rajesh Kumar',
      listingBroker: 'Priya Sharma',
      propertyType: '3 BHK Apartment',
      location: 'Mumbai, Andheri',
      matchPercentage: 92,
      locationMatch: 'Perfect Match',
      budgetMatch: 'Within Range',
      propertyMatch: 'Exact Match',
      status: 'high'
    },
    {
      requirementBroker: 'Amit Patel',
      listingBroker: 'Sneha Desai',
      propertyType: '2 BHK Flat',
      location: 'Delhi, Dwarka',
      matchPercentage: 85,
      locationMatch: 'Nearby Area',
      budgetMatch: 'Within Range',
      propertyMatch: 'Good Match',
      status: 'high'
    },
    {
      requirementBroker: 'Vikram Singh',
      listingBroker: 'Anjali Mehta',
      propertyType: '4 BHK Villa',
      location: 'Bangalore, Whitefield',
      matchPercentage: 78,
      locationMatch: 'Same Locality',
      budgetMatch: 'Slightly Higher',
      propertyMatch: 'Good Match',
      status: 'medium'
    }
  ]

  const getMatchColor = (percentage) => {
    if (percentage >= 85) return 'from-green-500 to-green-600'
    if (percentage >= 70) return 'from-yellow-500 to-yellow-600'
    return 'from-orange-500 to-orange-600'
  }

  const getMatchBadgeColor = (percentage) => {
    if (percentage >= 85) return 'bg-green-100 text-green-800'
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800'
    return 'bg-orange-100 text-orange-800'
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See How Matching Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our algorithm shows you exactly how well requirements match with listings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 overflow-hidden"
            >
              {/* Header with Match Percentage */}
              <div className={`bg-gradient-to-r ${getMatchColor(match.matchPercentage)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold uppercase tracking-wide">Match Score</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getMatchBadgeColor(match.matchPercentage)}`}>
                    {match.matchPercentage >= 85 ? 'Excellent' : match.matchPercentage >= 70 ? 'Good' : 'Fair'}
                  </span>
                </div>
                <div className="text-5xl font-bold">{match.matchPercentage}%</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏠</span>
                    <span className="font-semibold text-gray-900">{match.propertyType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-lg">📍</span>
                    <span>{match.location}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Requirement Broker:</span>
                    <span className="font-semibold text-gray-900">{match.requirementBroker}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Listing Broker:</span>
                    <span className="font-semibold text-gray-900">{match.listingBroker}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">📍 Location:</span>
                    <span className="font-semibold text-gray-900">{match.locationMatch}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">💰 Budget:</span>
                    <span className="font-semibold text-gray-900">{match.budgetMatch}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">🏡 Property:</span>
                    <span className="font-semibold text-gray-900">{match.propertyMatch}</span>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                  Connect Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            These are example matches. Real matches are calculated based on your actual requirements and listings.
          </p>
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
            View All Matches
          </button>
        </div>
      </div>
    </section>
  )
}

export default MatchCards
