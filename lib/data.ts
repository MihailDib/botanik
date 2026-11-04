export type AnchorHref = `#${string}`;

export type NavItem = {
  label: string;
  href: AnchorHref;
};

export const navItems: NavItem[] = [
  { label: "О центре", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Растения", href: "#categories" },
  { label: "Контакты", href: "#contacts" },
];

export type Category = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const categories: Category[] = [
  {
    title: "Комнатные растения",
    description: "Для света и тени в доме",
    image: "/images/plant-monstera.jpg",
    alt: "Крупные резные листья монстеры на светлом фоне",
  },
  {
    title: "Сад и балкон",
    description: "Сезонные растения и цветы",
    image: "/images/category-garden.jpg",
    alt: "Руки высаживают молодые сеянцы в кассеты с грунтом",
  },
  {
    title: "Деревья и кустарники",
    description: "Основа сада на годы",
    image: "/images/category-trees.jpg",
    alt: "Плотный ковёр тёмно-зелёной листвы",
  },
  {
    title: "Суккуленты и кактусы",
    description: "Мало воды, много характера",
    image: "/images/plant-succulent.jpg",
    alt: "Полосатая хавортия в мятном керамическом горшке",
  },
];

export type Plant = {
  name: string;
  latin: string;
  category: string;
  care: string;
  image: string;
  alt: string;
};

export const plants: Plant[] = [
  {
    name: "Монстера деликатесная",
    latin: "Monstera deliciosa",
    category: "Комнатное",
    care: "Рассеянный свет",
    image: "/images/plant-monstera.jpg",
    alt: "Листья монстеры с характерными прорезями на молочном фоне",
  },
  {
    name: "Фикус эластика",
    latin: "Ficus elastica",
    category: "Комнатное",
    care: "Яркий свет",
    image: "/images/plant-ficus.jpg",
    alt: "Фикус с плотными зелёными листьями на светлом фоне",
  },
  {
    name: "Хавортия полосатая",
    latin: "Haworthiopsis fasciata",
    category: "Суккулент",
    care: "Солнце и редкость",
    image: "/images/plant-succulent.jpg",
    alt: "Хавортия с белыми полосами в мятном горшке",
  },
];

export type AdvantageIcon = "leaf" | "sun" | "package" | "scissors";

export type Advantage = {
  index: string;
  title: string;
  description: string;
  icon: AdvantageIcon;
};

export const advantages: Advantage[] = [
  {
    index: "01",
    title: "Подбор по условиям",
    description:
      "Поможем выбрать растение под свет, влажность и ритм вашего дома — без лишних сюрпризов.",
    icon: "sun",
  },
  {
    index: "02",
    title: "Живой подход",
    description:
      "Следим за состоянием коллекции и рассказываем, как адаптировать растение после переезда.",
    icon: "leaf",
  },
  {
    index: "03",
    title: "Бережная упаковка",
    description:
      "Готовим растения к перевозке так, чтобы листья и корни остались в порядке по дороге.",
    icon: "package",
  },
  {
    index: "04",
    title: "Советы по уходу",
    description:
      "Делимся простыми инструкциями по поливу, пересадке и сезонному уходу — в любое время года.",
    icon: "scissors",
  },
];

export type ContactIcon = "pin" | "phone" | "clock" | "mail";

export type Contact = {
  label: string;
  value: string;
  note: string;
  icon: ContactIcon;
  href?: string;
};

export const contacts: Contact[] = [
  {
    label: "Адрес",
    value: "Демонстрационный адрес",
    note: "Точный адрес появится позже",
    icon: "pin",
  },
  {
    label: "Телефон",
    value: "+7 (___) ___-__-__",
    note: "Демонстрационный номер",
    icon: "phone",
  },
  {
    label: "Часы работы",
    value: "График уточняется",
    note: "Информация появится позже",
    icon: "clock",
  },
  {
    label: "Почта",
    value: "hello@botanik.example",
    note: "Демонстрационный адрес",
    icon: "mail",
    href: "mailto:hello@botanik.example",
  },
];
