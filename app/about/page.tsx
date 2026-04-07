import { AdvantagesSection } from "@/components/sections/advantages-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { PartnersSection } from "@/components/sections/partners-section";
import { ValuesSection } from "@/components/sections/values-section";

export const metadata = {
  title: "О компании — Открытые технологии",
  description:
    "О компании Открытые технологии: история с 1994 года, миссия, преимущества и ценности.",
};

const MILESTONES = [
  { year: "1994", text: "Основание компании в Минске" },
  {
    year: "2000",
    text: "Выход на рынок корпоративных сетей и систем хранения данных",
  },
  { year: "2008", text: "Формирование отдела информационной безопасности" },
  { year: "2012", text: "Запуск направления виртуализации и облачных решений" },
  { year: "2018", text: "350+ специалистов, 10 000+ реализованных проектов" },
  { year: "Сегодня", text: "Лидер системной интеграции в Беларуси" },
];

export default function AboutPage() {
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
              О нас
            </span>
          </div>
          <h1 className="text-4xl font-black text-white">О компании</h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Более 27 лет мы помогаем предприятиям Беларуси и СНГ строить
            надёжную IT-инфраструктуру.
          </p>
        </div>
      </div>

      {/* History & Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand" />
              <h2 className="text-xl font-black text-gray-900">История</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-6">
                {MILESTONES.map(({ year, text }) => (
                  <div key={year} className="flex gap-5 items-start">
                    <div className="w-32 text-right shrink-0">
                      <span className="text-xs font-black text-brand tracking-wide">
                        {year}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[6.25rem] top-2.25 w-2 h-2 bg-brand rotate-45" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pt-0.5">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand" />
              <h2 className="text-xl font-black text-gray-900">Миссия</h2>
            </div>
            <blockquote className="relative">
              <div className="absolute -top-2 left-2 text-6xl text-brand/20 font-serif leading-none select-none">
                &ldquo;
              </div>
              <p className="text-lg font-semibold text-gray-800 leading-relaxed pl-8 border-l-4 border-brand">
                Эффективные комплексные IT-решения любой сложности, повышающие
                эффективность бизнеса, снижающие операционные расходы и
                обеспечивающие точное планирование IT-инфраструктуры.
              </p>
            </blockquote>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "350+", label: "Специалистов" },
                { value: "27+", label: "Лет опыта" },
                { value: "30 522+", label: "Проектов" },
                { value: "55 000+", label: "Сервисных обращений" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-200 p-4 text-center"
                >
                  <div className="text-2xl font-black text-brand">{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdvantagesSection />
      <ValuesSection />
      <PartnersSection />
      <CTABanner />
    </>
  );
}
