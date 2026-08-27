"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Shield, Wrench, FileText, Calculator, Bell, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  const [profile, setProfile] = useState({
    name: "पंचायत सहायक",
    district: "लखनऊ",
    block: "बख्शी का तालाब",
    panchayat: "कसमंडी कला",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 text-white">
      {/* Header Profile Card */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-emerald-400">
              <User className="w-8 h-8" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold">{profile.name}</h1>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                सत्यापित पंचायत सहायक
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              ग्राम पंचायत: {profile.panchayat} | ब्लॉक: {profile.block} | जनपद: {profile.district}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/tools/farmer-id-card-generator"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all"
          >
            नया कार्ड बनाएं
          </Link>
        </div>
      </div>

      {/* Quick Tools Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-emerald-400">त्वरित उपकरण एवं शॉर्टकट्स</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/tools/farmer-id-card-generator"
            className="p-5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all group"
          >
            <Wrench className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="font-bold text-sm text-white group-hover:text-emerald-400">फार्मर ID कार्ड जनरेटर</div>
            <div className="text-[11px] text-slate-400 mt-1">PVC कार्ड लाइव प्रिंट करें</div>
          </Link>

          <Link
            href="/tools/work-register"
            className="p-5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all group"
          >
            <FileText className="w-5 h-5 text-teal-400 mb-2" />
            <div className="font-bold text-sm text-white group-hover:text-teal-400">दैनिक कार्य रजिस्टर</div>
            <div className="text-[11px] text-slate-400 mt-1">नागरिक सेवाओं का रिकॉर्ड</div>
          </Link>

          <Link
            href="/tools/salary-calculator"
            className="p-5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all group"
          >
            <Calculator className="w-5 h-5 text-amber-400 mb-2" />
            <div className="font-bold text-sm text-white group-hover:text-amber-400">मानदेय कैलकुलेटर</div>
            <div className="text-[11px] text-slate-400 mt-1">सैलरी व एरियर हिसाब</div>
          </Link>

          <Link
            href="/tools/hindi-office-editor"
            className="p-5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all group"
          >
            <FileText className="w-5 h-5 text-cyan-400 mb-2" />
            <div className="font-bold text-sm text-white group-hover:text-cyan-400">हिंदी ऑफिस एडिटर</div>
            <div className="text-[11px] text-slate-400 mt-1">पत्र व प्रस्ताव टाइपिंग</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
