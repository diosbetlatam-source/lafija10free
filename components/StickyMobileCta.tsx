"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/site";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-navy-950/95 px-4 py-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow"
      >
        <Send className="h-4 w-4" />
        Unite gratis al grupo
      </a>
    </div>
  );
}
