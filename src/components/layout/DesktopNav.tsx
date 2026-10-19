"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { mainNav, type NavItem } from "@/data/nav";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/utils";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (pathname.startsWith(item.href)) return true;
  return item.groups?.some((g) => g.links.some((l) => pathname === l.href)) ?? false;
}

const linkBase =
  "relative inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-[0.9375rem] font-semibold transition-colors duration-200";

export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const baseId = useId();

  // Close on route change (adjusting state during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
  }

  // Close on outside click and Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const trigger = navRef.current?.querySelector<HTMLButtonElement>(
        `[data-trigger="${open}"]`
      );
      setOpen(null);
      trigger?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };

  return (
    <nav ref={navRef} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-0.5">
        {mainNav.map((item) => {
          const active = isActive(pathname, item);
          if (!item.groups) {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    linkBase,
                    active ? "text-forest" : "text-charcoal/80 hover:text-forest"
                  )}
                >
                  {item.label}
                  {active && <ActiveDot />}
                </Link>
              </li>
            );
          }

          const panelId = `${baseId}-${item.label}`;
          const isOpen = open === item.label;
          return (
            <li
              key={item.href}
              className="relative"
              onPointerEnter={(e) => {
                if (e.pointerType !== "mouse") return;
                cancelClose();
                setOpen(item.label);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") scheduleClose();
              }}
            >
              <button
                type="button"
                data-trigger={item.label}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.label)}
                className={cn(
                  linkBase,
                  active || isOpen ? "text-forest" : "text-charcoal/80 hover:text-forest"
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
                {active && <ActiveDot />}
              </button>

              <div
                id={panelId}
                hidden={!isOpen}
                className={cn(
                  "absolute top-full pt-3",
                  item.label === "Services" ? "left-1/2 -translate-x-[38%]" : "left-0"
                )}
              >
                {item.label === "Services" ? (
                  <ServicesPanel item={item} />
                ) : (
                  <SimplePanel item={item} />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ActiveDot() {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-copper"
    />
  );
}

const panelShell =
  "animate-[panel-in_220ms_var(--ease-out-soft)] rounded-[1.5rem] border border-line bg-white shadow-[0_30px_60px_-30px_rgb(16_43_44/0.35)]";

function ServicesPanel({ item }: { item: NavItem }) {
  return (
    <div className={cn(panelShell, "grid w-[52rem] grid-cols-[1fr_1fr_15rem] gap-2 p-3")}>
      {item.groups?.map((group) => (
        <div key={group.heading} className="p-4">
          <p className="eyebrow text-copper-ink">{group.heading}</p>
          <ul className="mt-4 space-y-1">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group/item -mx-3 block rounded-xl px-3 py-2.5 transition-colors hover:bg-ivory"
                >
                  <span className="block font-semibold text-forest">{link.label}</span>
                  {link.description && (
                    <span className="mt-0.5 block text-sm text-muted">{link.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href={item.href}
        className="group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-[1.1rem] p-5 text-ivory"
      >
        <Photo
          name="livingRoomFireplace"
          alt=""
          sizes="240px"
          zoom
          className="!absolute inset-0"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-evergreen/90 via-evergreen/30 to-transparent" />
        <span className="relative font-display text-2xl leading-tight">All services</span>
        <span className="relative mt-2 inline-flex items-center gap-2 text-sm font-semibold">
          Compare every program
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  );
}

function SimplePanel({ item }: { item: NavItem }) {
  return (
    <div className={cn(panelShell, "w-72 p-3")}>
      {item.groups?.map((group) => (
        <ul key={group.heading} className="space-y-1">
          {group.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-ivory"
              >
                <span className="block font-semibold text-forest">{link.label}</span>
                {link.description && (
                  <span className="mt-0.5 block text-sm text-muted">{link.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
