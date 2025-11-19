import Spline from '@splinetool/react-spline'

// Global 3D background that sits behind all content
export default function Background3D() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      <Spline
        scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft top/bottom gradients to ensure text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
    </div>
  )
}
