import { ExternalLink, Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/data";
import logo from "@/public/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 h-16 py-2"
            >
              <Image
                src={logo.src}
                height={100}
                width={200}
                className="h-full w-auto"
                alt="logo"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Комплексные IT-решения любой сложности с 1994 года. Системная
              интеграция для среднего и крупного бизнеса.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-brand transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-brand mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  {CONTACT_INFO.address}
                </span>
              </li>
              {CONTACT_INFO.phones.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Phone size={15} className="text-brand shrink-0" />
                  <a
                    href={`tel:${p.replace(/\D/g, "")}`}
                    className="text-sm text-gray-300 hover:text-brand transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Printer size={15} className="text-brand shrink-0" />
                <span className="text-sm text-gray-300">
                  {CONTACT_INFO.fax}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-brand shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-300 hover:text-brand transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ExternalLink size={15} className="text-brand shrink-0" />
                <a
                  href={`https://www.linkedin.com/company/${CONTACT_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-brand transition-colors"
                >
                  @{CONTACT_INFO.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Открытые технологии. Все права
            защищены.
          </span>
          <span>220006, Минск, Республика Беларусь</span>
        </div>
      </div>
    </footer>
  );
}
