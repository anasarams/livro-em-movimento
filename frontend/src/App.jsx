import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './components/Hero'
import HelpSection from './components/HelpSection'
import MissionSection from './components/MissionSection'
import CTASection from './components/CTASection'

import Sobre from './components/Sobre'

function Home() {
  return (
    <>
      <Hero />
      <HelpSection />
      <MissionSection />
      <CTASection />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}