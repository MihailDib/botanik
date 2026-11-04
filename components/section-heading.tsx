import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <p
        className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] ${
          align === "center" ? "justify-center" : ""
        } ${isLight ? "text-sage" : "text-moss"}`}
      >
        <span
          aria-hidden="true"
          className={`h-px w-8 ${isLight ? "bg-sage/60" : "bg-moss/50"}`}
        />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-balance font-display text-[clamp(2.4rem,4.4vw,4.35rem)] font-medium leading-[0.98] tracking-[-0.025em] ${
          isLight ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-pretty text-[15px] leading-7 ${
            align === "center" ? "mx-auto" : ""
          } ${isLight ? "text-cream/65" : "text-ink/65"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
