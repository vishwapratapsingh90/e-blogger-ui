import Link from "next/link";

const navigation = [
  { href: "/about", label: "About us" },
  { href: "/profile", label: "Profile" },
];

export default function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <div role="navigation" className="top-left-menu">
          <Link href="/">E-Blogger</Link>
        </div>
        <div role="navigation" className="top-center-menu">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
