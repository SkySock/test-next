import Logo from "./Logo";
import NavLink from "./NavLink";
import Location from "./Location";
import ViewerMenu from "./ViewerMenu";

interface NavLink {
  text: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    text: "О продукте",
    href: "/info",
  },
  {
    text: "AI-услуги",
    href: "/services",
  },
  {
    text: "Партнёры",
    href: "/partners",
  },
  {
    text: "Блог",
    href: "/blogs",
  },
  {
    text: "О нас",
    href: "/about",
  },
  {
    text: "Контакты",
    href: "/contacts",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 px-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto hidden h-16 items-center justify-between lg:flex">
        <Logo />
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink href={link.href} text={link.text} key={link.href} />
          ))}
          <Location />
        </div>
        <ViewerMenu />
      </nav>
    </header>
  );
}
