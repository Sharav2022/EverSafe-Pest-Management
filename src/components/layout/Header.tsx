"use client";

import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { quoteLink } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-out-soft",
        condensed
          ? "border-line bg-ivory/92 shadow-[0_12px_32px_-24px_rgb(16_43_44/0.45)] backdrop-blur-md"
          : "border-transparent bg-ivory"
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between gap-6 transition-[height] duration-300 ease-out-soft",
          condensed ? "h-16" : "h-[var(--header-h)] lg:h-[5.5rem]"
        )}
      >
        <BrandLockup />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href={quoteLink.href}>{quoteLink.label}</Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
