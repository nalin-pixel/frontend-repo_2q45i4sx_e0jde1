export default function CTA() {
  return (
    <section className="py-20" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated with Tech 231</h2>
              <p className="mt-2 text-blue-100/80">Subscribe to our newsletter for the latest tech insights and updates</p>
              <form className="mt-6 flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50" />
                <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50">Subscribe</button>
              </form>
            </div>
            <div className="space-y-2 text-blue-100/90">
              <p className="text-white font-semibold text-lg">Tech 231 Liberia</p>
              <p>Innovative IT solutions empowering businesses to thrive in the digital age. We deliver cutting-edge technology services tailored to your unique needs.</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-white font-medium">Quick Links</p>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About Us</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#benefits" className="hover:underline">Benefits</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-medium">Contact Us</p>
                  <ul className="mt-2 space-y-1">
                    <li>Neezoe Community, Paynesville</li>
                    <li>P.O. Box 1362, Monrovia, Liberia</li>
                    <li><a href="mailto:info@tech231liberialtd.com" className="hover:underline">info@tech231liberialtd.com</a></li>
                    <li>M: +231 888 999 334</li>
                    <li>T: +231 880 209 996</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 text-xs text-blue-200/70">© 2025 Tech 231 Liberia Limited. All rights reserved. · <a href="#" className="underline">Privacy Policy</a> · <a href="#" className="underline">Terms of Service</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
