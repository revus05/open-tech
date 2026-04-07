import { VALUES } from "@/lib/data"

export function ValuesSection() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(213,0,55,0.015) 40px, rgba(213,0,55,0.015) 41px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-brand" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Ценности
            </span>
          </div>
          <h2 className="text-3xl font-black text-gray-900">Наши ценности</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ title, description }) => (
            <div key={title} className="bg-white border border-gray-200 p-6 relative overflow-hidden group hover:border-brand transition-colors">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
