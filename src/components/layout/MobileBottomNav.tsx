"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, UserCheck, BookOpen, FileSpreadsheet } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "होम", href: "/", icon: Home },
    { label: "टूल्स", href: "/tools", icon: Wrench },
    { label: "ID कार्ड", href: "/tools/farmer-id-card-generator", icon: UserCheck, isCenter: true },
    { label: "पंजिका", href: "/tools/work-register", icon: FileSpreadsheet },
    { label: "ब्लॉग", href: "/blog", icon: BookOpen },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation Bar" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 border-t border-slate-800/80 backdrop-blur-lg px-2 pb-[env(safe-area-inset-bottom)] transition-all"
    >
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          if (item.isCenter) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative -top-3 flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-active:scale-90 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-extrabold text-emerald-400 mt-0.5">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-95 ${
                isActive ? "text-emerald-400 font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-2"}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />
                )}
              </div>
              <span className="text-[10px] mt-1 leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
