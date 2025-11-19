const services = [
  {
    title: 'Software Development',
    desc: 'Custom software solutions tailored to your business needs',
  },
  {
    title: 'System Integration',
    desc: 'Seamless integration of your existing systems and platforms',
  },
  {
    title: 'Cloud Computing',
    desc: 'Scalable cloud infrastructure and migration services',
  },
  {
    title: 'ICT Consultancy',
    desc: 'Expert guidance for your technology strategy',
  },
  {
    title: 'Database Management',
    desc: 'Robust database solutions and optimization',
  },
  {
    title: 'Cybersecurity',
    desc: 'Comprehensive security solutions to protect your assets',
  },
]

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Proven, Step-by-Step Approach</h2>
            <p className="text-blue-100/80 mt-1">The reliable process for delivering high-quality services to clients</p>
          </div>
          <a href="#services" className="hidden md:inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">View All Services</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
