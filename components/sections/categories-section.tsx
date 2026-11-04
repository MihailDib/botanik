import { categories } from "@/lib/data";
import { CategoryCard } from "@/components/category-card";
import { ArrowRight } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-paper py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Категории"
            title={
              <>
                Найдите{" "}
                <em className="font-normal italic text-moss">своё</em> растение
              </>
            }
            description="От комнатных любимцев до сезонных посадок для сада и балкона. Начните с категории, которая вам ближе."
          />
          <a
            href="#popular"
            className="group inline-flex shrink-0 items-center gap-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest transition-colors hover:text-moss"
          >
            Смотреть подборку
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-16 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-forest/35">
          Демонстрационные категории · состав коллекции уточняется
        </p>
      </div>
    </section>
  );
}
