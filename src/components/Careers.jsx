export default function Careers() {
  const roles = [
    { title: 'Full-stack Engineer', type: 'Remote / Monrovia', tags: ['React', 'FastAPI', 'MongoDB'] },
    { title: 'Cloud/DevOps Engineer', type: 'Remote / Monrovia', tags: ['AWS', 'IaC', 'CI/CD'] },
    { title: 'UI/UX Designer', type: 'Monrovia', tags: ['Figma', 'Design Systems'] },
  ]

  return (
    <section className="relative py-20" id="careers">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm text-blue-200/80">Join Our Team</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Careers at Tech 231 Liberia</h2>
          <p className="mt-2 text-blue-100/80">We are always looking for passionate people to build the future of technology in Africa.</p>
        </div>

        <div className="space-y-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold">{r.title}</h3>
                  <p className="text-sm text-blue-100/80">{r.type}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100/80">{t}</span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow">Apply</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
