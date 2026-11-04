import { navItems } from "@/lib/data";
import { ArrowRight, LeafMark } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-[1500px] px-6 py-16 sm:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.6fr_0.7fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Ботаник — на главную">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-sage">
                <LeafMark className="h-8 w-8" />
              </span>
              <span>
                <span className="block font-display text-[1.7rem] font-semibold leading-none tracking-[-0.02em] text-cream">
                  Ботаник
                </span>
                <span className="mt-1 block text-[8px] uppercase tracking-[0.34em] text-cream/45">
                  садовый центр
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-cream/70">
              Живой дом начинается с растения, к которому хочется возвращаться.
            </p>
            <p className="mt-6 max-w-sm text-xs leading-6 text-cream/40">
              Демонстрационная главная страница садового центра. Данные о ценах,
              наличии и контактах появятся позже.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-sage">
              Навигация
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/55 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#categories"
                  className="text-sm text-cream/55 transition-colors hover:text-cream"
                >
                  Каталог
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-sage">
              Связь
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-cream/55">
              <li>
                <span className="block text-[9px] uppercase tracking-[0.18em] text-cream/30">
                  Телефон
                </span>
                Демонстрационный номер
              </li>
              <li>
                <span className="block text-[9px] uppercase tracking-[0.18em] text-cream/30">
                  Почта
                </span>
                <a
                  href="mailto:hello@botanik.example"
                  className="break-all transition-colors hover:text-cream"
                >
                  hello@botanik.example
                </a>
              </li>
              <li>
                <span className="block text-[9px] uppercase tracking-[0.18em] text-cream/30">
                  Адрес
                </span>
                Уточняется
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[9px] uppercase tracking-[0.2em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 «Ботаник» · демонстрационный проект</p>
          <p>Фотографии: Unsplash · демонстрационные материалы</p>
        </div>

        <div className="relative mt-6 overflow-hidden border-t border-cream/10 pt-10">
          <p className="select-none font-display text-[clamp(4.5rem,17vw,14rem)] font-medium leading-none tracking-[-0.07em] text-cream/[0.06]">
            Ботаник
          </p>
          <a
            href="#top"
            className="group absolute right-0 top-10 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/40 transition-colors hover:text-cream"
          >
            Наверх
            <ArrowRight className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
