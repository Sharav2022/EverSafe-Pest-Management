import Link from "next/link";
import { Bug, ChevronDown } from "lucide-react";
import { primaryNav, pagesDropdown, contactLink } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lime text-brand-ink">
            <Bug className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="font-heading text-xl font-extrabold text-white">
            Ever Safe
          </span>
        </Link>

        <nav
          aria-label="Header Menu"
          className="hidden items-center gap-8 lg:flex"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-[15px] font-semibold text-white/85 transition hover:text-brand-lime"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 font-heading text-[15px] font-semibold text-white/85 transition hover:text-brand-lime">
              Pages
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 translate-y-2 rounded-2xl border border-white/10 bg-brand-dark-2 p-2 opacity-0 shadow-2xl transition-all duration-150 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
              {pagesDropdown.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 font-heading text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-brand-lime"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={contactLink.href}
            className="font-heading text-[15px] font-semibold text-white/85 transition hover:text-brand-lime"
          >
            {contactLink.label}
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact-us" size="md">
            Get Free Quote
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
