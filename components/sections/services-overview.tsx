import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_CREATION, SERVICES_SUPPORT } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(213,0,55,0.02) 40px, rgba(213,0,55,0.02) 41px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-brand" />
              <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
                Направления
              </span>
            </div>
            <h2 className="text-3xl font-black text-gray-900">Наши услуги</h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            Все услуги <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Creation & Integration */}
          <div className="bg-white border border-gray-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand" />
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              Создание, внедрение и интеграция
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_CREATION.slice(0, 6).map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2.5 text-sm text-gray-600"
                >
                  <div className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                  {service}
                </li>
              ))}
              {SERVICES_CREATION.length > 6 && (
                <li className="text-sm text-gray-400 pl-3.5">
                  и ещё {SERVICES_CREATION.length - 6} направлений...
                </li>
              )}
            </ul>
          </div>

          {/* Service & Outsourcing */}
          <div className="bg-white border border-gray-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand" />
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              Сервис и аутсорсинг
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_SUPPORT.slice(0, 6).map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2.5 text-sm text-gray-600"
                >
                  <div className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                  {service}
                </li>
              ))}
              {SERVICES_SUPPORT.length > 6 && (
                <li className="text-sm text-gray-400 pl-3.5">
                  и ещё {SERVICES_SUPPORT.length - 6} направления...
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
