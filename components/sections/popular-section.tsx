import { plants } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { PlantCard } from "@/components/plant-card";
import { SectionHeading } from "@/components/section-heading";

export function PopularSection() {
  return (
    <section id="popular" className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Избранное"
            title={
              <>
                Растения, которые{" "}
                <em className="font-normal italic text-moss">хочется</em>{" "}
                забрать домой
              </>
            }
            description="Небольшая демонстрационная подборка, чтобы почувствовать характер коллекции."
          />
          <a
            href="#contacts"
            className="group inline-flex items-center gap-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest transition-colors hover:text-moss"
          >
            Запросить подборку
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {plants.map((plant) => (
            <PlantCard key={plant.name} plant={plant} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-forest/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-forest/50">
            Наличие, цены и состав коллекции в демонстрационной версии не
            указаны. Актуальную информацию уточняйте у специалиста садового
            центра.
          </p>
          <a
            href="#categories"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-forest transition-colors hover:text-moss"
          >
            Все категории
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
