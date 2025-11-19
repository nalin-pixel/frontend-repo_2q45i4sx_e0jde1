export default function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Client Testimonials</h2>
            <p className="mt-2 text-blue-100/80">We are trusted by numerous companies from different businesses to meet their needs.</p>
          </div>
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-blue-100/90 italic">"Tech 231 Liberia transformed our IT infrastructure completely. Their expertise and dedication to our success has been outstanding. Highly recommended!"</p>
              <div className="mt-4">
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-blue-100/70 text-sm">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
