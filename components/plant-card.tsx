import Image from "next/image";
import type { Plant } from "@/lib/data";
import { ArrowUpRight } from "@/components/icons";

type PlantCardProps = {
  plant: Plant;
};

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <article>
      <a
        href="#contacts"
        className="group flex flex-col"
        aria-label={`${plant.name} — уточнить детали`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe8df]">
          <Image
            src={plant.image}
            alt={plant.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <span className="absolute left-4 top-4 border border-forest/10 bg-paper/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-forest backdrop-blur-sm">
            {plant.category}
          </span>
          <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-forest text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 border-b border-forest/15 pb-4 pt-5">
          <div>
            <h3 className="font-display text-[1.55rem] leading-tight text-forest">
              {plant.name}
            </h3>
            <p className="mt-1 text-xs italic tracking-wide text-forest/45">
              {plant.latin}
            </p>
          </div>
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-moss/50 transition-colors group-hover:bg-moss" />
        </div>

        <div className="flex items-center justify-between gap-3 py-3 text-[9px] font-medium uppercase tracking-[0.17em] text-forest/45">
          <span>{plant.care}</span>
          <span>Демо-позиция</span>
        </div>
      </a>
    </article>
  );
}
