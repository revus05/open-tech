import Image from "next/image";

const PARTNERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18];

export function PartnersSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-brand" />
            <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Партнёры
            </span>
          </div>
          <h2 className="text-3xl font-black text-gray-900">Наши партнёры</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl">
            Работаем с ведущими мировыми производителями IT-оборудования и программного
            обеспечения.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {PARTNERS.map((i) => (
            <div
              key={i}
              className="aspect-[3/2] border border-gray-200 flex items-center justify-center bg-gray-50 hover:border-brand transition-colors p-4"
            >
              <Image
                src={`/partners/partner-${i}.png`}
                alt={`Партнёр ${i}`}
                width={120}
                height={60}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
