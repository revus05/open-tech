import { ADVANTAGES } from "@/lib/data"

export function AdvantagesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-brand" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Наши преимущества
            </span>
          </div>
          <h2 className="text-3xl font-black text-gray-900">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map(({ title, description }, index) => (
            <div
              key={title}
              className="group border border-gray-200 p-6 hover:border-brand transition-colors relative overflow-hidden"
            >
              {/* Index number */}
              <div className="absolute top-4 right-4 text-5xl font-black text-gray-100 group-hover:text-red-50 transition-colors leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                <div className="w-6 h-0.5 bg-brand mb-4" />
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
