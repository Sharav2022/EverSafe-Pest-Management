"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `is-revealed` to `[data-reveal]` / `[data-reveal-line]` elements as
 * they enter the viewport. Hidden states only exist while <html> carries
 * `reveal-ready`, which the head script sets when motion is welcome, so
 * content stays readable without JavaScript.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    // Tells the boot script's fail-safe that the observer is running.
    (window as Window & { __revealHydrated?: boolean }).__revealHydrated = true;
    if (!root.classList.contains("reveal-ready")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed), [data-reveal-line]:not(.is-revealed)")
        .forEach((el) => observer.observe(el));
    };
    scan();

    // Catch content streamed in after the initial scan.
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}

/** Inline head script: opt in to reveal animations only when safe. */
export const revealBootScript = `(function(){try{var d=document.documentElement;if(!('IntersectionObserver' in window))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('reveal-ready');setTimeout(function(){if(!window.__revealHydrated){d.classList.remove('reveal-ready');}},4000);}catch(e){}})();`;
