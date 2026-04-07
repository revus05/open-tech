"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/logo.png";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 h-16 py-2">
            <Image
              src={logo.src}
              height={100}
              width={200}
              className="h-full w-auto"
              alt="logo"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  pathname === href
                    ? "text-brand after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-brand"
                    : "text-gray-700 hover:text-brand",
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacts"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors rounded-sm"
            >
              Оставить заявку
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 text-gray-700 hover:text-brand transition-colors"
              aria-label="Меню"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block px-4 py-2.5 text-sm font-medium rounded-sm transition-colors",
                  pathname === href
                    ? "text-brand bg-red-50"
                    : "text-gray-700 hover:text-brand hover:bg-gray-50",
                )}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/contacts"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-2.5 text-sm font-semibold text-white text-center bg-brand hover:bg-brand-dark transition-colors rounded-sm"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
