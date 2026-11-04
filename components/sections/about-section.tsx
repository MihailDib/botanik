import Image from "next/image";
import { LeafMark } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-paper py-24 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:px-10 xl:gap-28">
        <div>
          <div className="grid grid-cols-5 gap-3 sm:gap-5">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden bg-cream">
              <Image
                src="/images/about-interior.jpg"
                alt="Домашний уголок с комнатными растениями в горшках"
                fill
                sizes="(min-width: 1024px) 30vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/75 to-transparent p-3 pt-14 sm:p-5 sm:pt-16">
                <p className="text-[8px] uppercase tracking-[0.25em] text-cream/65 sm:text-[9px]">
                  Живая коллекция
                </p>
                <p className="mt-1 font-display text-lg leading-tight text-cream sm:text-2xl">
                  Дом, в котором есть место растениям
                </p>
              </div>
            </div>
            <div className="relative col-span-2 mt-16 aspect-[3/4] overflow-hidden bg-cream sm:mt-24">
              <Image
                src="/images/about-potting.jpg"
                alt="Совок с грунтом, мох и инструменты для пересадки растений"
                fill
                sizes="(min-width: 1024px) 20vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.22em] text-forest/40">
            <span>Фотографии · демонстрационные</span>
            <span>Botanik / collection</span>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="О садовом центре"
            title={
              <>
                Место, где растения{" "}
                <em className="font-normal italic text-moss">встречаются</em> с
                людьми
              </>
            }
          />

          <div className="mt-8 max-w-xl space-y-5 text-pretty text-[15px] leading-7 text-ink/65 sm:text-base sm:leading-8">
            <p>
              «Ботаник» — пространство для тех, кто хочет окружить себя живыми
              растениями. Мы собираем комнатные и садовые культуры, помогаем
              выбрать подходящее место и разобраться в уходе без лишней
              сложности.
            </p>
            <p>
              Здесь можно не спеша пройти между стеллажами, рассмотреть фактуру
              листьев, сравнить горшки и забрать домой растение, к которому
              хочется возвращаться.
            </p>
          </div>

          <blockquote className="mt-10 border-l border-clay/60 pl-6">
            <p className="font-display text-[1.6rem] italic leading-snug text-forest sm:text-[1.8rem]">
              «Растение — это не декор, а сосед по дому. Поэтому важно, чтобы
              вам было легко и хорошо вместе».
            </p>
            <footer className="mt-4 text-[9px] uppercase tracking-[0.26em] text-forest/45">
              Принцип «Ботаника»
            </footer>
          </blockquote>

          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-forest/10 pt-7 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <LeafMark className="mt-0.5 h-7 w-7 shrink-0 text-moss" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                  Живая коллекция
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/55">
                  Растения, за которыми интересно наблюдать
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LeafMark className="mt-0.5 h-7 w-7 shrink-0 text-moss" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                  Подход без спешки
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/55">
                  Поможем выбрать и освоить уход
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
