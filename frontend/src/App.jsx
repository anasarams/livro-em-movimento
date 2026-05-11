// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './components/Hero'
import HelpSection from './components/HelpSection'
import MissionSection from './components/MissionSection'
import CTASection from './components/CTASection'

import Sobre from './components/Sobre'
import Voluntarios from './components/Voluntarios'
import Noticias from './components/Noticias'
import Biblioteca from './components/Biblioteca'
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

  <Route
    path="/voluntarios"
    element={<Voluntarios />}
  />

  <Route
    path="/noticias"
    element={<Noticias />}
  />

  <Route
    path="/biblioteca"
    element={<Biblioteca />}
  />

</Routes>
      <Footer />

    </BrowserRouter>
  )
}