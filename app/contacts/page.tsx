import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { ContactFormInline } from "@/components/contact-form-inline";
import { CONTACT_INFO } from "@/lib/data";

export const metadata = {
  title: "Контакты — Открытые технологии",
  description:
    "Контакты компании Открытые технологии. Минск, ул. Белорусская 15.",
};

export default function ContactsPage() {
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
              Связь с нами
            </span>
          </div>
          <h1 className="text-4xl font-black text-white">Контакты</h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Мы работаем в Минске и готовы обсудить ваш проект — оставьте заявку
            или свяжитесь напрямую.
          </p>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-brand" />
              <h2 className="text-xl font-black text-gray-900">Реквизиты</h2>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Адрес
                  </p>
                  <p className="text-sm text-gray-700">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Телефон
                  </p>
                  {CONTACT_INFO.phones.map((p) => (
                    <p key={p}>
                      <a
                        href={`tel:${p.replace(/\D/g, "")}`}
                        className="text-sm text-gray-700 hover:text-brand transition-colors"
                      >
                        {p}
                      </a>
                    </p>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand/10 flex items-center justify-center shrink-0">
                  <Printer size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Факс
                  </p>
                  <p className="text-sm text-gray-700">{CONTACT_INFO.fax}</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-gray-700 hover:text-brand transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand/10 flex items-center justify-center shrink-0">
                  <ExternalLink size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    LinkedIn
                  </p>
                  <a
                    href={`https://www.linkedin.com/company/${CONTACT_INFO.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-brand transition-colors"
                  >
                    @{CONTACT_INFO.linkedin}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-brand/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Режим работы
                  </p>
                  <p className="text-sm text-gray-700">Пн–Пт: 9:00 – 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map placeholder + CTA */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="aspect-video bg-gray-100 border border-gray-200 flex items-center justify-center">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2f4afa237a597b21a23edd227209862531e045bfebeb7346703ba6cdc50c3c92&amp;source=constructor"
                width="600"
                height="400"
                frameBorder="0"
              ></iframe>
            </div>

            {/* Inline contact form */}
            <ContactFormInline />
          </div>
        </div>
      </section>
    </>
  );
}
