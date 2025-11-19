export default function Principles() {
  const items = [
    {
      kpi: '10+',
      kpiLabel: 'Years of Excellence',
      metric: '100%',
      metricLabel: 'Client Satisfaction',
      title: 'Transforming Businesses, Shaping the Future',
      desc: 'Our Driving Principles guide everything we do',
    },
  ]

  return (
    <section className="py-20" id="about">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-blue-200/80">Professional team member</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">{items[0].kpi} <span className="text-blue-300/90">Years of Excellence</span></h2>
          <p className="mt-2 text-blue-100/80">{items[0].metric} Client Satisfaction</p>
          <p className="mt-6 text-blue-100/90">{items[0].title}</p>
          <p className="mt-2 text-blue-100/70">{items[0].desc}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card title="Our Mission" text="We sustainably delight our customers with information solutions powered by the best in kind talent, processes, and technologies." />
          <Card title="Our Vision" text="Transforming Businesses, Shaping the Future" />
          <Card title="Our Values" text="Delivering the full potential of your enterprise with innovative software tailored to your unique needs." />
          <Card title="Impact" text="Outstanding results, powered by highly skilled African engineers and project managers." />
        </div>
      </div>
    </section>
  )
}

function Card({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-blue-100/80">{text}</p>
    </div>
  )
}
