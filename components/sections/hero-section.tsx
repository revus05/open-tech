"use client";

import { useContactModal } from "@/components/contact-modal";
import FloatingLines from "../floating-lines";

export function HeroSection() {
  const { open: openModal } = useContactModal();
  return (
    <section
      className="relative lg:min-h-svh min-h-[60svh] -mb-25 flex items-center overflow-hidden bg-surface-dark"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
    >
      <div
        className="absolute inset-x-0 top-0 opacity-50"
        style={{ bottom: "-25%" }}
      >
        <FloatingLines
          colorCycleSpeed={0.18}
          lineCount={[8, 10, 6]}
          lineDistance={[4, 5, 6]}
          animationSpeed={0.8}
          bendStrength={-0.4}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -translate-y-12.5">
        <div className="max-w-3xl">
          {/* Accent line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              С 1994 года
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Открытые
            <br />
            <span className="text-brand">технологии</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
            Эффективные комплексные IT-решения любой сложности. Системная
            интеграция, инфраструктура и аутсорсинг для среднего и крупного
            бизнеса.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center px-8 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold text-sm transition-colors rounded-sm"
            >
              Оставить заявку
            </button>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-sm transition-colors rounded-sm"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
