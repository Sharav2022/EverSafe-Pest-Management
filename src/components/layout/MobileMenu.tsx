"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, pagesDropdown, contactLink } from "@/data/nav";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lime text-brand-ink"
      >
        <Menu className="h-5 w-5" strokeWidth={2.25} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-black/50">
          <div className="flex h-full w-full max-w-sm flex-col overflow-y-auto bg-brand-dark p-6">
            <div className="flex items-center justify-between">
              <span className="font-heading text-lg font-bold text-white">
                Menu
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-heading text-base font-semibold text-white/90 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setPagesOpen((v) => !v)}
                className="flex items-center justify-between rounded-xl px-3 py-3 font-heading text-base font-semibold text-white/90 hover:bg-white/5"
              >
                Pages
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    pagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {pagesOpen && (
                <div className="ml-3 flex flex-col border-l border-white/10 pl-3">
                  {pagesDropdown.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2.5 font-heading text-sm font-semibold text-white/75 hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href={contactLink.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-heading text-base font-semibold text-white/90 hover:bg-white/5"
              >
                {contactLink.label}
              </Link>
            </nav>

            <div className="mt-8">
              <Button href="/contact-us" className="w-full justify-center">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
