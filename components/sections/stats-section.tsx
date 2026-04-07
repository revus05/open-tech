import { COMPANY_STATS } from "@/lib/data"

export function StatsSection() {
  return (
    <section className="bg-white py-20 relative">
      {/* Top decorative diagonal lines */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-brand"
        style={{ opacity: 0.15 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-brand" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Цифры
            </span>
            <div className="h-px w-8 bg-brand" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Компания в цифрах</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {COMPANY_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="text-center group"
            >
              <div className="relative pb-4 mb-3">
                <div className="text-3xl lg:text-4xl font-black text-brand leading-none">
                  {value}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand group-hover:w-12 transition-all duration-300" />
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide leading-tight">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
