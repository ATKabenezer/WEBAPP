export default function Vendors() {
  const vendors = [
    "Fortinet",
    "Kaspersky",
    "Microsoft",
    "VMware",
    "Cisco",
    "Dell EMC"
  ]
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Our Technology Partners</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {vendors.map(v => (
          <div key={v} className="p-4 border rounded bg-white text-center shadow-sm">
            {v}
          </div>
        ))}
      </div>
    </section>
  )
}
