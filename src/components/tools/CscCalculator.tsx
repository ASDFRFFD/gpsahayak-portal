"use client";

import React, { useState } from "react";
import { Calculator, IndianRupee, Layers, CheckCircle2, TrendingUp } from "lucide-react";

interface ServiceRate {
  id: string;
  name: string;
  govtFee: number;
  customerCharge: number;
  monthlyCount: number;
}

export default function CscCalculator() {
  const [services, setServices] = useState<ServiceRate[]>([
    { id: "income_cert", name: "आय / जाति / निवास प्रमाण पत्र (e-District)", govtFee: 15, customerCharge: 50, monthlyCount: 40 },
    { id: "family_reg", name: "परिवार रजिस्टर नकल (Family Register Copy)", govtFee: 5, customerCharge: 30, monthlyCount: 25 },
    { id: "birth_cert", name: "जन्म / मृत्यु पंजीकरण (CRS Portal)", govtFee: 0, customerCharge: 50, monthlyCount: 15 },
    { id: "farmer_reg", name: "किसान रजिस्ट्री / e-KYC (PM Kisan)", govtFee: 0, customerCharge: 50, monthlyCount: 60 },
    { id: "pan_card", name: "नया पैन कार्ड आवेदन (UTI/NSDL)", govtFee: 107, customerCharge: 150, monthlyCount: 10 },
  ]);

  const updateCount = (id: string, count: number) => {
    setServices(services.map(s => s.id === id ? { ...s, monthlyCount: Math.max(0, count) } : s));
  };

  const totalMonthlyGross = services.reduce((acc, s) => acc + (s.customerCharge * s.monthlyCount), 0);
  const totalGovtCost = services.reduce((acc, s) => acc + (s.govtFee * s.monthlyCount), 0);
  const netMonthlyProfit = totalMonthlyGross - totalGovtCost;

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-900/60 to-indigo-900/40 border border-purple-500/30 rounded-2xl p-6 text-white backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>ग्राम सचिवालय सीएससी सेवाएं 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              CSC एवं ई-डिस्ट्रिक्ट आय व कमीशन कैलकुलेटर
            </h1>
            <p className="text-sm text-purple-100/80 mt-1">
              ग्राम सचिवालय में दी जाने वाली डिजिटल सेवाओं (आय, जाति, खतौनी, CRS, पैन कार्ड) की मासिक आय का हिसाब लगाएं।
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Service list table */}
        <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl text-white">
          <h2 className="text-lg font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
            <Layers className="w-5 h-5 text-purple-400" />
            <span>डिजिटल सेवाएं व मासिक कार्य (Monthly Services Done)</span>
          </h2>

          <div className="space-y-4">
            {services.map((s) => {
              const itemProfit = (s.customerCharge - s.govtFee) * s.monthlyCount;
              return (
                <div key={s.id} className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">{s.name}</div>
                    <div className="text-xs text-slate-400">
                      सरकारी शुल्क: ₹{s.govtFee} | प्रति आवेदन शुल्क: ₹{s.customerCharge} | प्रति आवेदन बचत: <span className="text-emerald-400 font-bold">₹{s.customerCharge - s.govtFee}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <label className="block text-[10px] text-slate-400 uppercase">मासिक संख्या</label>
                      <input
                        type="number"
                        min="0"
                        value={s.monthlyCount}
                        onChange={(e) => updateCount(s.id, Number(e.target.value))}
                        className="w-20 bg-slate-900 border border-slate-600 rounded-lg px-2.5 py-1 text-sm font-bold text-white text-center"
                      />
                    </div>
                    <div className="w-24 text-right">
                      <div className="text-[10px] text-slate-400 uppercase">कुल बचत</div>
                      <div className="text-sm font-extrabold text-emerald-400">₹{itemProfit}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profit Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-6 shadow-2xl space-y-6 text-white">
            <h3 className="text-base font-bold text-purple-400 uppercase tracking-wider border-b border-slate-700 pb-2">
              मासिक आय विश्लेषण
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>कुल प्राप्त धनराशि (Gross):</span>
                <span className="font-semibold text-white">₹{totalMonthlyGross.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>सरकारी पोर्टल कटौतियां:</span>
                <span className="font-semibold text-rose-400">- ₹{totalGovtCost.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Net Profit */}
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/40 text-center space-y-1">
              <div className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
                शुद्ध मासिक बचत (Net Monthly Profit)
              </div>
              <div className="text-3xl font-black text-emerald-400">
                ₹{netMonthlyProfit.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="p-3 bg-slate-800/80 rounded-xl text-xs text-slate-400 space-y-1 border border-slate-700">
              <div className="font-semibold text-slate-300">CSC अतिरिक्त आय:</div>
              <div>यह धनराशि आपके ₹6,000 मानदेय के अतिरिक्त ग्राम सचिवालय से होने वाली संभावित डिजिटल आय है।</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
