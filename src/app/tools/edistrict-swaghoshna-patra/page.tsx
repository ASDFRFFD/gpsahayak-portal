"use client";

import React, { useState } from "react";
import { FileCheck, Printer, Download, Sparkles, User } from "lucide-react";

export default function SwaghoshnaPatraPage() {
  const [applicantName, setApplicantName] = useState("रोहित शर्मा");
  const [fatherName, setFatherName] = useState("सुरेश शर्मा");
  const [age, setAge] = useState("28");
  const [occupation, setOccupation] = useState("कृषि / व्यवसाय");
  const [village, setVillage] = useState("कसमंडी कला");
  const [block, setBlock] = useState("बख्शी का तालाब");
  const [district, setDistrict] = useState("लखनऊ");
  const [annualIncome, setAnnualIncome] = useState("48000");
  const [serviceType, setServiceType] = useState("आय प्रमाण पत्र (Income Certificate)");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 text-white backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">e-District UP Form Generator</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">स्वप्रमाणित घोषणा पत्र (Swaghoshna Patra) जनरेटर</h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">आय, जाति व निवास प्रमाण पत्र हेतु अनिवार्य स्वघोषणा पत्र तुरंत भरें एवं प्रिंट करें।</p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Printer className="w-4 h-4" />
          <span>घोषणा पत्र प्रिंट करें</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-white">
          <h2 className="text-base font-bold flex items-center gap-2 text-emerald-400 border-b border-slate-800 pb-2">
            <User className="w-4 h-4" />
            <span>आवेदक का विवरण</span>
          </h2>
          <div>
            <label className="block text-xs text-slate-400 mb-1">आवेदक का नाम</label>
            <input type="text" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">पिता/पति का नाम</label>
            <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">उम्र (वर्ष)</label>
              <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">व्यवसाय</label>
              <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] text-slate-400 mb-1">ग्राम</label>
              <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-white" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-400 mb-1">ब्लाक</label>
              <input type="text" value={block} onChange={(e) => setBlock(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-white" />
            </div>
            <div>
              <label className="block text-[10px] text-slate-400 mb-1">ज़िला</label>
              <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-white" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">वार्षिक आय (रुपये में)</label>
            <input type="text" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
        </div>

        {/* Printable Document Sheet Preview */}
        <div className="lg:col-span-7">
          <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-300 font-serif leading-relaxed text-sm space-y-6">
            <div className="text-center border-b-2 border-slate-900 pb-4">
              <h2 className="text-lg font-bold uppercase tracking-wider">स्वप्रमाणित घोषणा पत्र</h2>
              <p className="text-xs text-slate-600 font-sans mt-0.5">(उत्तर प्रदेश ई-डिस्ट्रिक्ट सेवाओं हेतु)</p>
            </div>

            <div className="space-y-4">
              <p className="indent-8">
                मैं <span className="font-bold underline decoration-dotted">{applicantName || ".........."}</span>, 
                पुत्र/पुत्री/पत्नी श्री <span className="font-bold underline decoration-dotted">{fatherName || ".........."}</span>, 
                उम्र <span className="font-bold underline decoration-dotted">{age || "..."}</span> वर्ष, 
                व्यवसाय <span className="font-bold underline decoration-dotted">{occupation || ".........."}</span>, 
                निवासी ग्राम <span className="font-bold underline decoration-dotted">{village || ".........."}</span>, 
                विकासखंड <span className="font-bold underline decoration-dotted">{block || ".........."}</span>, 
                तहसील व जनपद <span className="font-bold underline decoration-dotted">{district || ".........."}</span> (उ.प्र.) 
                का स्थायी निवासी हूँ।
              </p>

              <p className="indent-8">
                यह कि मेरी समस्त स्रोतों से कुल पारिवारिक वार्षिक आय <strong>₹{annualIncome || ".........."}/-</strong> (शब्दों में ....................) है।
              </p>

              <p className="indent-8">
                यह कि मेरे द्वारा दी गई उपरोक्त जानकारी मेरी व्यक्तिगत जानकारी एवं विश्वास के अनुसार पूर्णतः सत्य व सही है। यदि इसमें कोई तथ्य असत्य पाया जाता है, तो इसके लिए मैं स्वयं उत्तरदायी रहूँगा/रहूँगी।
              </p>
            </div>

            <div className="pt-12 flex justify-between items-end text-xs font-sans">
              <div>
                <div>स्थान: {village}, {district}</div>
                <div>दिनांक: {new Date().toLocaleDateString("hi-IN")}</div>
              </div>
              <div className="text-center space-y-8">
                <div className="w-32 border-b border-slate-800 mx-auto" />
                <div className="font-bold">हस्ताक्षर / अंगूठा निशानी (आवेदक)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
