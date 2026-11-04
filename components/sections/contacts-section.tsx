import type { ComponentType } from "react";
import type { ContactIcon } from "@/lib/data";
import { contacts } from "@/lib/data";
import {
  ArrowUpRight,
  ClockIcon,
  LeafMark,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  type IconProps,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<ContactIcon, ComponentType<IconProps>> = {
  pin: MapPinIcon,
  phone: PhoneIcon,
  clock: ClockIcon,
  mail: MailIcon,
};

export function ContactsSection() {
  return (
    <section id="contacts" className="bg-paper py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Контакты"
              title={
                <>
                  Давайте{" "}
                  <em className="font-normal italic text-moss">познакомимся</em>
                </>
              }
              description="Эта версия сайта демонстрационная. Ниже — места для настоящих контактов садового центра, которые появятся позже."
            />

            <address className="mt-10 not-italic">
              <ul className="divide-y divide-forest/10 border-y border-forest/10">
                {contacts.map((contact) => {
                  const Icon = iconMap[contact.icon];

                  return (
                    <li key={contact.label} className="flex items-start gap-4 py-5">
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-forest/15 text-moss">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-forest/40">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="mt-1 block break-words text-[15px] text-forest underline decoration-forest/20 underline-offset-4 transition-colors hover:decoration-forest"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="mt-1 break-words text-[15px] text-forest">
                            {contact.value}
                          </p>
                        )}
                        <p className="mt-1 text-xs leading-5 text-ink/45">
                          {contact.note}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </address>
          </div>

          <div className="relative overflow-hidden bg-forest p-6 text-cream sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 text-cream/[0.05]"
            >
              <LeafMark className="h-72 w-72" />
            </div>

            <div className="relative">
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-sage">
                Как нас найти
              </p>
              <h3 className="mt-4 max-w-md font-display text-[2rem] leading-tight text-cream sm:text-[2.4rem]">
                Схема проезда и настоящие контакты появятся позже
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-cream/55">
                Сейчас на сайте используются демонстрационные данные. Когда
                садовый центр будет готов поделиться адресом и телефоном, мы
                заменим эту информацию.
              </p>

              <div className="mt-8 grid aspect-[4/3] place-items-center border border-cream/10 bg-cream/[0.035]">
                <div className="px-6 text-center">
                  <LeafMark className="mx-auto h-14 w-14 text-sage/70" />
                  <p className="mt-4 text-[9px] uppercase tracking-[0.24em] text-cream/40">
                    Карта · демонстрационный блок
                  </p>
                </div>
              </div>

              <a
                href="mailto:hello@botanik.example"
                className="group mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:text-sage"
              >
                Написать на демо-почту
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
