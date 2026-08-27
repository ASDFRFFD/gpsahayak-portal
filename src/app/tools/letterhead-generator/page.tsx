"use client";

import React, { useState } from "react";
import { Printer, Sparkles, FileText, Image as ImageIcon } from "lucide-react";

export default function LetterheadGeneratorPage() {
  const [panchayat, setPanchayat] = useState("कसमंडी कला");
  const [block, setBlock] = useState("बख्शी का तालाब");
  const [district, setDistrict] = useState("लखनऊ");
  const [pradhanName, setPradhanName] = useState("श्रीमती सीमा देवी");
  const [secretaryName, setSecretaryName] = useState("श्री अमित कुमार");
  const [sahayakName, setSahayakName] = useState("श्री राहुल वर्मा");
  const [mobile, setMobile] = useState("9876543210");
  const [letterBody, setLetterBody] = useState("विषय: ग्राम पंचायत सचिवालय विकास कार्य सूचना।\n\nसर्वसाधारण को सूचित किया जाता है कि...");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 text-white backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">Official Letterhead Maker</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">ग्राम पंचायत लेटरहेड जनरेटर</h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">ग्राम प्रधान, सचिव एवं पंचायत सहायक का आधिकारिक लेटरहेड तुरंत तैयार करें।</p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Printer className="w-4 h-4" />
          <span>लेटरहेड प्रिंट करें</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Controls */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-white">
          <h2 className="text-base font-bold text-emerald-400 border-b border-slate-800 pb-2">लेटरहेड विवरण</h2>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] text-slate-400 mb-1">ग्राम पंचायत</label>
              <input type="text" value={panchayat} onChange={(e) => setPanchayat(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-400 mb-1">विकासखंड</label>
              <input type="text" value={block} onChange={(e) => setBlock(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-400 mb-1">जनपद</label>
              <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">ग्राम प्रधान का नाम</label>
            <input type="text" value={pradhanName} onChange={(e) => setPradhanName(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">पंचायत सचिव का नाम</label>
            <input type="text" value={secretaryName} onChange={(e) => setSecretaryName(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">पंचायत सहायक का नाम</label>
            <input type="text" value={sahayakName} onChange={(e) => setSahayakName(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">पत्र का मुख्य भाग (Letter Content)</label>
            <textarea rows={6} value={letterBody} onChange={(e) => setLetterBody(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
        </div>

        {/* Live Letterhead Preview */}
        <div className="lg:col-span-7">
          <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-300 min-h-[600px] flex flex-col justify-between">
            {/* Header */}
            <div className="border-b-4 border-emerald-800 pb-4 text-center space-y-1">
              <div className="text-xl sm:text-2xl font-black text-emerald-900 uppercase">
                कार्यालय: ग्राम पंचायत {panchayat}
              </div>
              <div className="text-xs text-slate-700 font-bold">
                विकासखंड - {block}, जनपद - {district} (उ.प्र.)
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-600 pt-2 font-sans border-t border-slate-200 mt-2">
                <span><strong>प्रधान:</strong> {pradhanName}</span>
                <span><strong>सचिव:</strong> {secretaryName}</span>
                <span><strong>सहायक:</strong> {sahayakName}</span>
              </div>
            </div>

            {/* Letter Body */}
            <div className="py-8 flex-1 whitespace-pre-line text-sm leading-relaxed font-serif">
              {letterBody}
            </div>

            {/* Footer Signatures */}
            <div className="pt-12 flex justify-between items-end text-xs border-t border-slate-200">
              <div className="text-center space-y-6">
                <div className="w-28 border-b border-slate-700 mx-auto" />
                <div className="font-bold">हस्ताक्षर पंचायत सहायक</div>
              </div>
              <div className="text-center space-y-6">
                <div className="w-28 border-b border-slate-700 mx-auto" />
                <div className="font-bold">हस्ताक्षर / मुहर ग्राम प्रधान</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
