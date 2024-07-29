import React from 'react'
import Hero from './UI/Hero'
import CTA from './UI/CTA'
import Teams from './UI/Teams'
import Contact from './UI/Contact'
import Footer from './UI/Footer'
import Features from './UI/Features'

function Welcome() {
  return (
    <div>
      <Hero />
      <Features />
      <Teams />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default Welcome
