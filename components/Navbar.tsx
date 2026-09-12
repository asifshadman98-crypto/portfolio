"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { GITHUB_URL } from "@/lib/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-widest text-white transition-colors hover:text-accent sm:text-base"
        >
          ASIF SHADMAN KHAN
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md border border-border p-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md border border-border p-2 text-slate-200 transition-colors hover:border-accent/50 hover:text-accent md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background/95 px-6 pb-6 pt-2 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-card hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-card hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
