"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/ui/Loader";

export function PagePreloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 500);
    const hideTimer = setTimeout(() => setVisible(false), 900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Loader label="EverSafe" />
    </div>
  );
}
