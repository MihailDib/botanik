import Image from "next/image";
import { ArrowRight, ArrowUpRight, LeafMark, SproutIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[42rem] w-[42rem] rounded-full bg-moss/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[46%] hidden w-px bg-cream/10 lg:block"
      />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex min-w-0 flex-col justify-center px-6 pb-16 pt-20 sm:px-10 lg:px-14 lg:pb-20 lg:pt-16 xl:px-20">
          <p className="animate-rise flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-sage sm:text-[10px] sm:tracking-[0.3em]">
            <span aria-hidden="true" className="h-px w-9 shrink-0 bg-sage/60" />
            Коллекция растений
            <span className="hidden sm:inline">· демонстрационно</span>
          </p>

          <h1 className="animate-rise animate-rise-delay-1 mt-8 max-w-[11ch] text-balance font-display text-[clamp(3.4rem,7.2vw,7rem)] font-medium leading-[0.88] tracking-[-0.04em]">
            Живой дом
            <span className="mt-2 block text-cream/90">начинается</span>
            <span className="mt-2 block italic text-sage">с растения</span>
          </h1>

          <p className="animate-rise animate-rise-delay-2 mt-9 max-w-lg text-pretty text-[15px] leading-7 text-cream/65 sm:text-base sm:leading-8">
            Растения, горшки, грунт и всё для сада — в одном пространстве, где
            хочется задержаться. Поможем найти растение, которое подойдёт именно
            вашему дому.
          </p>

          <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start xl:flex-row">
            <a
              href="#popular"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cream px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest transition-colors duration-300 hover:bg-sage"
            >
              Смотреть растения
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/25 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/90 transition-colors duration-300 hover:border-cream/55 hover:bg-cream/5"
            >
              О садовом центре
            </a>
          </div>

          <div className="animate-rise animate-rise-delay-3 mt-14 flex flex-col gap-5 border-t border-cream/15 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center xl:justify-between">
            <p className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-cream/55">
              <SproutIcon className="h-5 w-5 text-sage" />
              Комнатные · Садовые · Суккуленты
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-cream/35">
              Подбор и советы по уходу
            </p>
          </div>
        </div>

        <div className="relative min-h-[62vh] overflow-hidden sm:min-h-[70vh] lg:min-h-0">
          <Image
            src="/images/hero-foliage.jpg"
            alt="Крупные полосатые листья калатеи — фактура живой коллекции"
            fill
            preload
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-forest-deep/15 lg:bg-gradient-to-r lg:from-forest-deep/35 lg:via-transparent lg:to-transparent"
          />

          <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
            <div className="flex items-end justify-between gap-4 border border-cream/20 bg-forest-deep/45 p-5 backdrop-blur-md sm:p-6">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-sage">
                  Подборка сезона
                </p>
                <p className="mt-2 max-w-xs font-display text-2xl leading-tight text-cream sm:text-[1.7rem]">
                  Листья, которые меняют настроение комнаты
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-cream/45">
                  Демонстрационное изображение
                </p>
              </div>
              <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-full border border-cream/25 text-cream sm:grid">
                <LeafMark className="h-9 w-9" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="group absolute bottom-8 left-6 hidden items-center gap-3 text-[9px] uppercase tracking-[0.26em] text-cream/40 transition-colors hover:text-cream/80 xl:flex"
        aria-label="Перейти к разделу о садовом центре"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full border border-cream/20">
          <ArrowUpRight className="h-3.5 w-3.5 rotate-[135deg]" />
        </span>
        Листайте вниз
      </a>
    </section>
  );
}
