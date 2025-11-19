import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 grid place-items-center text-white font-bold">T</div>
              <div className="leading-tight">
                <p className="text-white font-semibold">Tech 231 Liberia</p>
                <p className="text-xs text-blue-200/80">Innovation & Excellence</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:from-blue-500 hover:to-indigo-500">
                Get Started
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="block text-blue-100/90 hover:text-white" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
