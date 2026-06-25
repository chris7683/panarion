"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"),  2000);
    const t2 = setTimeout(() => setPhase("gone"), 2650);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-byzantine-600 overflow-hidden"
      style={{
        transition: "opacity 0.65s ease",
        opacity: phase === "out" ? 0 : 1,
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      {/* Background cross pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gold glow behind logo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center splash-enter">
        {/* Logo card */}
        <div className="bg-white/95 rounded-2xl px-8 py-5 shadow-2xl shadow-black/40">
          <Image
            src="/logo.png"
            alt="Panarion Center"
            width={220}
            height={76}
            className="h-16 w-auto object-contain"
            priority
          />
        </div>

        {/* English tagline */}
        <p className="font-serif italic text-gold-300 text-sm mt-5 splash-delay-1">
          Patristic Heritage
        </p>

        {/* Arabic tagline */}
        <p className="font-arabic text-gold-400/60 text-sm mt-1 splash-delay-2">
          مركز باناريون للتراث الآبائي
        </p>

        {/* Loading dots */}
        <div className="flex gap-2.5 mt-9 splash-delay-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold-400"
              style={{ animation: `splashDot 1.4s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
