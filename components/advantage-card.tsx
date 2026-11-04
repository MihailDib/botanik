import type { ComponentType } from "react";
import type { Advantage, AdvantageIcon } from "@/lib/data";
import {
  LeafIcon,
  PackageIcon,
  ScissorsIcon,
  SunIcon,
  type IconProps,
} from "@/components/icons";

const iconMap: Record<AdvantageIcon, ComponentType<IconProps>> = {
  leaf: LeafIcon,
  sun: SunIcon,
  package: PackageIcon,
  scissors: ScissorsIcon,
};

type AdvantageCardProps = {
  advantage: Advantage;
};

export function AdvantageCard({ advantage }: AdvantageCardProps) {
  const Icon = iconMap[advantage.icon];

  return (
    <article className="group border-t border-forest/20 pt-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-forest/15 bg-paper/50 text-forest transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-forest group-hover:text-paper">
          <Icon className="h-7 w-7" />
        </span>
        <span className="font-display text-sm italic text-forest/30">
          {advantage.index}
        </span>
      </div>
      <h3 className="mt-7 font-display text-[1.45rem] leading-tight text-forest">
        {advantage.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink/60">
        {advantage.description}
      </p>
    </article>
  );
}
