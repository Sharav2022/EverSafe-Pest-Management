"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import { mainNav, quoteLink } from "@/data/nav";
import { BrandLockup } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Close whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      // Keep focus inside the dialog.
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const trigger = triggerRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-12 items-center gap-3 rounded-full border border-line-strong pl-4 pr-3 text-sm font-semibold text-forest transition-colors hover:border-forest"
      >
        Menu
        <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
          <span className="h-[1.5px] w-full bg-current" />
          <span className="h-[1.5px] w-3/4 self-end bg-current" />
        </span>
      </button>

      {/* `open` only becomes true after a click, so this never runs on the server. */}
      {open &&
        createPortal(
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-evergreen text-ivory animate-[menu-in_280ms_var(--ease-out-soft)]"
          >
            <h2 id={titleId} className="sr-only">
              Site menu
            </h2>
            <div className="shell flex h-[var(--header-h)] shrink-0 items-center justify-between">
              <BrandLockup tone="light" />
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:bg-ivory hover:text-forest"
              >
                <X aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav aria-label="Mobile" className="shell flex-1 pb-8 pt-6">
              <ul className="border-t border-ivory/12">
                {mainNav.map((item) => {
                  if (!item.groups) {
                    return (
                      <li key={item.href} className="border-b border-ivory/12">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="flex min-h-16 items-center font-display text-[2rem] leading-none aria-[current=page]:text-copper-light"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  const isOpen = expanded === item.label;
                  const subId = `mobile-${item.label}`;
                  return (
                    <li key={item.href} className="border-b border-ivory/12">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={subId}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        className="flex min-h-16 w-full items-center justify-between text-left font-display text-[2rem] leading-none"
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "h-6 w-6 text-sage transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                          strokeWidth={1.5}
                        />
                      </button>
                      <div id={subId} hidden={!isOpen} className="pb-6">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="mb-3 inline-flex min-h-11 items-center text-sm font-semibold text-copper-light underline underline-offset-4"
                        >
                          {item.label === "Services" ? "View all services" : "About Ever Safe"}
                        </Link>
                        {item.groups.map((group) => (
                          <div key={group.heading} className="mt-3">
                            {item.groups!.length > 1 && (
                              <p className="eyebrow text-sage/70">{group.heading}</p>
                            )}
                            <ul className="mt-2">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex min-h-12 items-center text-lg text-ivory/85 hover:text-ivory"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <Button href={quoteLink.href} variant="light" size="lg">
                  {quoteLink.label}
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-ivory/30 font-semibold"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
              <a
                href={siteConfig.emailHref}
                className="mt-6 inline-flex min-h-11 items-center gap-2.5 text-sm text-ivory/70 hover:text-ivory"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}
