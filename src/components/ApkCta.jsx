import React from 'react'

// Replace with your actual APK URL when you host the file (e.g. '/BrokerJodo.apk' or a CDN link)
const APK_DOWNLOAD_URL = '/BrokerJodo.apk'

const ApkCta = () => {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-primary-50 border-b border-primary-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-200 text-2xl" aria-hidden="true">
            📱
          </span>
          <div>
            <p className="text-gray-900 font-bold text-base sm:text-lg">Get the app on your phone</p>
            <p className="text-gray-600 text-sm">Install BrokerJodo on Android</p>
          </div>
        </div>
        <a
          href={APK_DOWNLOAD_URL}
          download
          className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download APK for Android
        </a>
      </div>
    </section>
  )
}

export default ApkCta
