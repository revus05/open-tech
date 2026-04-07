import { SERVICES_CREATION, SERVICES_SUPPORT } from "@/lib/data"
import { CTABanner } from "@/components/sections/cta-banner"

export const metadata = {
  title: "Услуги — Открытые технологии",
  description:
    "Создание и интеграция IT-инфраструктуры, сервис и аутсорсинг от Открытые технологии.",
}

function ServiceCard({ name, index }: { name: string; index: number }) {
  return (
    <div className="flex items-start gap-4 p-5 border border-gray-200 hover:border-brand transition-colors group">
      <div className="text-xs font-mono text-gray-300 group-hover:text-brand transition-colors mt-0.5 shrink-0 w-6 text-right">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="border-l-2 border-brand pl-4">
        <p className="text-sm font-medium text-gray-800">{name}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#0a0a0a] py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(213,0,55,0.04) 40px, rgba(213,0,55,0.04) 41px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-brand" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Направления работы
            </span>
          </div>
          <h1 className="text-4xl font-black text-white">Услуги</h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Комплексные IT-решения: от проектирования инфраструктуры до полного аутсорсинга
            IT-отдела.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Creation & Integration */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand" />
              <h2 className="text-xl font-black text-gray-900">
                Создание, внедрение и интеграция
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SERVICES_CREATION.map((service, i) => (
                <ServiceCard key={service} name={service} index={i} />
              ))}
            </div>
          </div>

          {/* Service & Outsourcing */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand" />
              <h2 className="text-xl font-black text-gray-900">Сервис и аутсорсинг</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SERVICES_SUPPORT.map((service, i) => (
                <ServiceCard key={service} name={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  )
}
