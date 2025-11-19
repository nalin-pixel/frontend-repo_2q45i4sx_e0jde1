import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Principles from './components/Principles'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Principles />
        <Services />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}

export default App
