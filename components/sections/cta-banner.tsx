import Link from "next/link"

export function CTABanner() {
  return (
    <section
      className="bg-[#0a0a0a] py-20 relative overflow-hidden"
      style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(213,0,55,0.04) 40px, rgba(213,0,55,0.04) 41px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand" />
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
            Готовы начать?
          </span>
          <div className="h-px w-8 bg-brand" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Обсудим ваш проект
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
          Оставьте заявку — наш специалист свяжется с вами и подберёт оптимальное решение
          для вашего бизнеса.
        </p>

        <Link
          href="/contacts"
          className="inline-flex items-center px-10 py-4 bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors rounded-sm"
        >
          Оставить заявку
        </Link>
      </div>
    </section>
  )
}
