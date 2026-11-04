"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { ArrowUpRight, CloseIcon, LeafMark, MenuIcon } from "@/components/icons";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur-md">
      <div className="hidden border-b border-forest/10 bg-forest-deep text-cream/70 sm:block">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2 text-[10px] uppercase tracking-[0.24em] lg:px-10">
          <span>Садовый центр «Ботаник»</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
            Демонстрационная версия сайта
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-8 px-6 lg:h-24 lg:px-10">
          <a
            href="#top"
            className="group flex items-center gap-3 text-forest"
            aria-label="Ботаник — на главную"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 transition-colors duration-300 group-hover:border-forest/45 group-hover:bg-forest group-hover:text-paper">
              <LeafMark className="h-8 w-8" />
            </span>
            <span>
              <span className="block font-display text-[1.7rem] font-semibold leading-none tracking-[-0.02em]">
                Ботаник
              </span>
              <span className="mt-1 block text-[8px] uppercase tracking-[0.34em] text-forest/55">
                садовый центр
              </span>
            </span>
          </a>

          <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-forest/70 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-forest after:transition-all after:duration-300 hover:text-forest hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#categories"
              className="group hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-forest-deep lg:inline-flex"
            >
              Каталог
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-paper lg:hidden"
            >
              {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!isOpen}
          className="absolute inset-x-0 top-full border-t border-forest/10 bg-paper shadow-[0_24px_60px_rgba(14,36,26,0.16)] lg:hidden"
        >
          <nav aria-label="Мобильная навигация" className="mx-auto max-w-[1500px] px-6 py-6">
            <ul className="divide-y divide-forest/10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-2xl text-forest"
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-forest/45" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#categories"
              onClick={() => setIsOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-paper"
            >
              Смотреть каталог
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-5 text-center text-[10px] uppercase tracking-[0.22em] text-forest/45">
              Демонстрационная версия сайта
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
