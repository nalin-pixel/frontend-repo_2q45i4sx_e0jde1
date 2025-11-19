export default function Benefits() {
  const benefits = [
    {
      title: 'End-to-End Expertise',
      desc: 'From strategy to deployment, we cover the full lifecycle with a senior, multidisciplinary team.'
    },
    {
      title: 'Local Presence, Global Standards',
      desc: 'We combine on-the-ground insight in Liberia with world-class delivery practices.'
    },
    {
      title: 'Security & Reliability',
      desc: 'Hardened architectures, audits, and observability by default to keep your business safe.'
    },
    {
      title: 'Faster Time-to-Value',
      desc: 'Battle-tested templates and automation reduce risk and accelerate delivery.'
    }
  ]

  return (
    <section className="relative py-20" id="benefits">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm text-blue-200/80">Why Choose Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Benefits that move your business forward</h2>
          <p className="mt-2 text-blue-100/80">Delivering measurable outcomes through reliability, speed, and expertise.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
