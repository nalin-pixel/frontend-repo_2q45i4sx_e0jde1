export default function Partners() {
  const logos = ['MTN', 'Orange', 'Lonestar Cell', 'Microsoft', 'AWS', 'MTN', 'Orange', 'Lonestar Cell', 'Microsoft', 'AWS']
  return (
    <section className="py-20" id="partners">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Trusted Partners</h2>
            <p className="text-blue-100/80">Working with world-class partners! Collaborating with industry leaders to deliver exceptional technology solutions</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="animate-[scroll_30s_linear_infinite] flex gap-12 whitespace-nowrap px-6 py-8">
            {logos.map((l, i) => (
              <span key={i} className="text-white/90 text-lg font-medium">{l} logo</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  )
}
