import Image from "next/image";
import { ArrowRight, LeafMark } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function VisitSection() {
  return (
    <section id="visit" className="relative overflow-hidden bg-forest py-24 text-cream sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sage/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Приезжайте в гости"
            tone="light"
            title={
              <>
                Проведите утро{" "}
                <em className="font-normal italic text-sage">среди</em> растений
              </>
            }
          />
          <p className="mt-7 max-w-lg text-pretty text-[15px] leading-7 text-cream/65 sm:text-base sm:leading-8">
            В «Ботанике» можно не спеша рассмотреть коллекцию, задать вопросы и
            уйти с идеей для дома или сада. Адрес и график работы появятся на
            сайте позже — сейчас это демонстрационная версия.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacts"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cream px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest transition-colors duration-300 hover:bg-sage"
            >
              Связаться с нами
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/85 transition-colors duration-300 hover:border-cream/50 hover:bg-cream/5"
            >
              О садовом центре
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-cream/15 pt-6">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-sage">
              <LeafMark className="h-7 w-7" />
            </span>
            <p className="text-[10px] uppercase leading-5 tracking-[0.2em] text-cream/45">
              Пространство для растений
              <br />
              и людей, которые их любят
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-forest-deep sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/category-trees.jpg"
              alt="Тёмная зелень листьев в саду — атмосфера садового центра"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/10"
            />
          </div>

          <div className="relative -mt-14 ml-5 mr-5 border border-cream/15 bg-forest-deep/70 p-5 backdrop-blur-md sm:absolute sm:-bottom-8 sm:left-8 sm:right-auto sm:mt-0 sm:ml-0 sm:mr-0 sm:max-w-xs sm:p-6">
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-sage">
              Визит в «Ботаник»
            </p>
            <p className="mt-2 font-display text-2xl leading-tight text-cream">
              Адрес и график работы уточняются
            </p>
            <p className="mt-3 text-xs leading-5 text-cream/50">
              Демонстрационная информация. Контакты появятся позже.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
