import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ApkCta from './components/ApkCta'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import MatchCards from './components/MatchCards'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ApkCta />
      <div id="features"><Features /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="matches"><MatchCards /></div>
      <div id="benefits"><Benefits /></div>
      <CTA />
      <Footer />
    </div>
  )
}

export default App
