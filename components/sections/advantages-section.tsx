import { advantages } from "@/lib/data";
import { AdvantageCard } from "@/components/advantage-card";
import { LeafMark } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="relative overflow-hidden bg-sage-light py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 hidden text-forest/[0.04] lg:block"
      >
        <LeafMark className="h-[26rem] w-[26rem]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Почему «Ботаник»"
            title={
              <>
                Спокойно.{" "}
                <em className="font-normal italic text-moss">Со знанием</em>{" "}
                дела
              </>
            }
          />
          <p className="max-w-xl text-pretty text-[15px] leading-7 text-ink/65 lg:justify-self-end lg:pb-2">
            Мы не торопим с выбором и не обещаем невозможного. Вместо этого
            помогаем понять, что нужно растению, и сделать первый шаг к
            зелёному дому.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.index} advantage={advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}
