"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { id: "register", href: "/register", label: "Registration" },
  { id: "login", href: "/login", label: "User login" },
  { id: "forgot-password", href: "/forgot-password", label: "Forgot password" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <>
      <div>
        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        {navLinks.map((link) => {
          const isActive =
            pathname == link.href ||
            (pathname.startsWith(link.href) && link.href != "/");
          return (
            <Link
              className={
                isActive
                  ? "font-bold bg-amber-600 mr-4"
                  : "text-blue-800 bg-blue-400 mr-4"
              }
              href={link.href}
              key={link.id}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </>
  );
}
