import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" id="#">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-blue-100/90 backdrop-blur">
            Technology workspace
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Committed to People, Committed to the Future
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            Where innovation meets excellence in IT. Your Success Is Our Business! Empowering businesses to thrive in the digital age with cutting-edge IT solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:from-blue-500 hover:to-indigo-500">Start a Project With Us</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Book a Demo</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <Stat label="Years Experience" value="10+" />
            <Stat label="Projects Delivered" value="100+" />
            <Stat label="Support" value="24/7" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-blue-100/80">{label}</div>
    </div>
  )
}
