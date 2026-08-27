"use client";

import React, { useState } from "react";
import { Calculator, IndianRupee, Clock, CheckCircle2, AlertTriangle, Download, Printer } from "lucide-react";

export default function SalaryCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(6000);
  const [pendingMonths, setPendingMonths] = useState(3);
  const [arrearAmount, setArrearAmount] = useState(0);
  const [deductions, setDeductions] = useState(0);

  const totalMonthlyDue = monthlySalary * pendingMonths;
  const grandTotal = totalMonthlyDue + Number(arrearAmount) - Number(deductions);

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-900/60 to-orange-900/40 border border-amber-500/30 rounded-2xl p-6 text-white backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>उत्तर प्रदेश पंचायत सहायक मानदेय 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              पंचायत सहायक मानदेय व एरियर कैलकुलेटर
            </h1>
            <p className="text-sm text-amber-100/80 mt-1">
              अपने लंबित महीनों के मानदेय, एरियर और कुल देय भुगतान का तुरंत सटीक हिसाब लगाएं।
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Controls */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <IndianRupee className="w-5 h-5 text-amber-400" />
            <span>मानदेय विवरण दर्ज करें (Salary Inputs)</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                मासिक मानदेय (Monthly Honorarium in ₹)
              </label>
              <input
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-amber-500"
              />
              <span className="text-[11px] text-slate-400">उत्तर प्रदेश में निर्धारित दर: ₹6,000 प्रति माह</span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                लंबित महीने (Unpaid / Pending Months)
              </label>
              <input
                type="number"
                min="0"
                max="36"
                value={pendingMonths}
                onChange={(e) => setPendingMonths(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                पिछला बकाया / एरियर (Previous Arrears in ₹)
              </label>
              <input
                type="number"
                min="0"
                value={arrearAmount}
                onChange={(e) => setArrearAmount(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                कोई कटौती (Deduction if any in ₹)
              </label>
              <input
                type="number"
                min="0"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Output Summary Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-6 text-white">
            <h3 className="text-base font-bold text-amber-400 uppercase tracking-wider border-b border-slate-700 pb-2">
              भुगतान सारांश (Payment Breakdown)
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>मासिक दर:</span>
                <span className="font-semibold text-white">₹{monthlySalary.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>लंबित महीने:</span>
                <span className="font-semibold text-white">{pendingMonths} माह</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>लंबित कुल मानदेय:</span>
                <span className="font-bold text-amber-300">₹{totalMonthlyDue.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>जोड़ा गया एरियर:</span>
                <span className="font-semibold text-emerald-400">+ ₹{Number(arrearAmount).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>कुल कटौती:</span>
                <span className="font-semibold text-rose-400">- ₹{Number(deductions).toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Grand Total Box */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-center space-y-1">
              <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                कुल देय धनराशि (Net Payable Amount)
              </div>
              <div className="text-3xl font-black text-white">
                ₹{grandTotal.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="p-3 bg-slate-800/80 rounded-xl text-xs text-slate-400 space-y-1 border border-slate-700">
              <div className="font-semibold text-slate-300">PFMS प्रक्रिया:</div>
              <div>यह भुगतान ग्राम पंचायत के 15वें वित्त आयोग (प्रशासनिक मद) से PFMS डोंगल (DSC) द्वारा जारी किया जाता है।</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
