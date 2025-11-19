import Navbar from './components/Navbar'
import Background3D from './components/Background3D'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Principles from './components/Principles'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Careers from './components/Careers'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100 relative">
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Principles />
        <Benefits />
        <Services />
        <Careers />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}

export default App
