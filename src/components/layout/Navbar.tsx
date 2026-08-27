"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, Home, Wrench, BookOpen, Calculator, FileText, 
  HelpCircle, UserCheck, PhoneCall, ChevronDown, Download
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      {/* Top Banner / Ticker */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-xs py-1.5 px-4 text-center font-medium text-emerald-50 flex items-center justify-center gap-2">
        <span className="bg-emerald-900/50 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">नया अपडेट 2026</span>
        <span>उत्तर प्रदेश पंचायत सहायक डिजिटल पोर्टल — सभी टूल्स, शासनादेश एवं मार्गदर्शिका एक जगह!</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-emerald-400">GP</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                GPSAHAYAK<span className="text-emerald-400">.IN</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider">पंचायत सहायक डिजिटल साथी</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-all"
            >
              <Home className="w-4 h-4 text-emerald-400" />
              <span>होम</span>
            </Link>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                onMouseEnter={() => setToolsDropdownOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-all"
              >
                <Wrench className="w-4 h-4 text-teal-400" />
                <span>डिजिटल टूल्स</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {toolsDropdownOpen && (
                <div 
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2 py-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <Link
                    href="/tools/farmer-id-card-generator"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-400">फार्मर आईडी कार्ड जनरेटर</div>
                      <div className="text-[11px] text-slate-400">किसान रजिस्ट्री कार्ड प्रिंट करें</div>
                    </div>
                  </Link>

                  <Link
                    href="/tools/hindi-office-editor"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-400">हिंदी ऑफिस एडिटर</div>
                      <div className="text-[11px] text-slate-400">पत्र, प्रस्ताव एवं आवेदन टाइपिंग</div>
                    </div>
                  </Link>

                  <Link
                    href="/tools/salary-calculator"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-amber-400">मानदेय व एरियर कैलकुलेटर</div>
                      <div className="text-[11px] text-slate-400">PFMS सैलरी व मानदेय हिसाब</div>
                    </div>
                  </Link>

                  <Link
                    href="/tools/csc-calculator"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-400">CSC आय कैलकुलेटर</div>
                      <div className="text-[11px] text-slate-400">डिजिटल सेवाओं का कमीशन</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-all"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>ब्लॉग व दिशानिर्देश</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-all"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>हमारे बारे में</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-all"
            >
              <PhoneCall className="w-4 h-4 text-slate-400" />
              <span>संपर्क</span>
            </Link>
          </nav>

          {/* Quick Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/tools/farmer-id-card-generator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:scale-[1.02]"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>फार्मर ID कार्ड बनाएँ</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            <Home className="w-4 h-4 text-emerald-400" />
            <span>होम</span>
          </Link>

          <div className="pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
            प्रमुख डिजिटल टूल्स
          </div>

          <Link
            href="/tools/farmer-id-card-generator"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-emerald-400 bg-emerald-500/10 font-medium"
          >
            <UserCheck className="w-4 h-4" />
            <span>फार्मर आईडी कार्ड जनरेटर</span>
          </Link>

          <Link
            href="/tools/hindi-office-editor"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>हिंदी ऑफिस एडिटर</span>
          </Link>

          <Link
            href="/tools/salary-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>मानदेय कैलकुलेटर</span>
          </Link>

          <Link
            href="/tools/csc-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <Calculator className="w-4 h-4 text-purple-400" />
            <span>CSC आय कैलकुलेटर</span>
          </Link>

          <div className="pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
            अन्य लिंक्स
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>ब्लॉग व गाइड</span>
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>हमारे बारे में</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            <span>संपर्क करें</span>
          </Link>
        </div>
      )}
    </header>
  );
}
