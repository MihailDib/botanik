import Image from "next/image";
import type { Category } from "@/lib/data";
import { ArrowUpRight } from "@/components/icons";

type CategoryCardProps = {
  category: Category;
  index: number;
};

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <a
      href="#popular"
      className="group relative block overflow-hidden bg-forest-deep"
      aria-label={`${category.title} — смотреть подборку`}
    >
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[4/5]">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent"
        />
        <span className="absolute left-5 top-5 text-[9px] font-medium uppercase tracking-[0.28em] text-cream/55">
          0{index + 1}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="font-display text-[1.65rem] leading-tight text-cream">
            {category.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-cream/60">
            {category.description}
          </p>
          <span className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] translate-y-1 text-sage opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Смотреть подборку
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
