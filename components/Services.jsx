export default function Services() {
  const items = [
    {title: 'Cybersecurity', desc: 'Advanced threat detection, SOC services, firewalls, endpoint protection, and compliance solutions.'},
    {title: 'Systems Integration', desc: 'Design, deployment, and support for complex enterprise IT systems, from networking to datacenter.'},
    {title: 'Cloud & Infrastructure', desc: 'Cloud migration, virtualization, infrastructure optimization, and managed services.'},
    {title: 'Consulting & Training', desc: 'Advisory services, IT strategy development, and staff training to build in-house capabilities.'},
    {title: 'Support Services', desc: '24/7 technical support, maintenance contracts, and service level agreements (SLA) tailored to clients.'},
  ]
  return (
    <section id="services" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(i=> (
          <div key={i.title} className="p-5 border rounded bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{i.title}</h3>
            <p className="text-sm mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
