"use client";

import React, { useState } from "react";
import { BookOpen, Plus, Trash2, Printer, Download, Save, CheckCircle } from "lucide-react";

interface WorkEntry {
  id: string;
  date: string;
  applicant: string;
  service: string;
  status: "पूर्ण (Done)" | "प्रक्रियाधीन (Pending)" | "अस्वीकृत (Rejected)";
  remarks: string;
}

export default function WorkRegisterPage() {
  const [entries, setEntries] = useState<WorkEntry[]>([
    { id: "1", date: "2026-08-13", applicant: "महेश कुमार", service: "आय प्रमाण पत्र", status: "पूर्ण (Done)", remarks: "आवेदन स्वीकृत" },
    { id: "2", date: "2026-08-13", applicant: "राजेश सिंह", service: "परिवार रजिस्टर नकल", status: "पूर्ण (Done)", remarks: "नकल जारी की गई" },
  ]);

  const [applicant, setApplicant] = useState("");
  const [service, setService] = useState("आय प्रमाण पत्र");
  const [status, setStatus] = useState<"पूर्ण (Done)" | "प्रक्रियाधीन (Pending)" | "अस्वीकृत (Rejected)">("पूर्ण (Done)");
  const [remarks, setRemarks] = useState("");

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicant) return;
    const newEntry: WorkEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      applicant,
      service,
      status,
      remarks,
    };
    setEntries([newEntry, ...entries]);
    setApplicant("");
    setRemarks("");
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 text-white backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">डिजिटल कार्य रजिस्टर</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">ग्राम सचिवालय दैनिक कार्य पंजिका (Work Register)</h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">दैनिक नागरिक सेवाओं, प्रमाण पत्रों और आवेदनों का व्यवस्थित डिजिटल रिकॉर्ड रखें।</p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Printer className="w-4 h-4" />
          <span>रजिस्टर प्रिंट करें</span>
        </button>
      </div>

      {/* Entry Form */}
      <form onSubmit={addEntry} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-white">
        <h2 className="text-base font-bold flex items-center gap-2 text-emerald-400">
          <Plus className="w-4 h-4" />
          <span>नया कार्य प्रविष्ट करें (Add New Entry)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">आवेदक का नाम</label>
            <input
              type="text"
              value={applicant}
              onChange={(e) => setApplicant(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              placeholder="उदा. सुरेश वर्मा"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">सेवा का नाम</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            >
              <option value="आय प्रमाण पत्र">आय प्रमाण पत्र</option>
              <option value="जाति प्रमाण पत्र">जाति प्रमाण पत्र</option>
              <option value="निवास प्रमाण पत्र">निवास प्रमाण पत्र</option>
              <option value="परिवार रजिस्टर नकल">परिवार रजिस्टर नकल</option>
              <option value="जन्म / मृत्यु प्रमाण पत्र">जन्म / मृत्यु प्रमाण पत्र</option>
              <option value="किसान रजिस्ट्री / eKYC">किसान रजिस्ट्री / eKYC</option>
              <option value="अन्य">अन्य कार्य</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">स्थिति (Status)</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
            >
              <option value="पूर्ण (Done)">पूर्ण (Done)</option>
              <option value="प्रक्रियाधीन (Pending)">प्रक्रियाधीन (Pending)</option>
              <option value="अस्वीकृत (Rejected)">अस्वीकृत (Rejected)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">टिप्पणी (Remarks)</label>
            <input
              type="text"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              placeholder="विवरण या आवेदन संख्या"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs cursor-pointer flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>पंजिका में जोड़ें</span>
        </button>
      </form>

      {/* Entries Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 border-b border-slate-800 flex justify-between items-center text-white">
          <span className="font-bold text-sm">पंजिका प्रविष्टियाँ ({entries.length})</span>
          <span className="text-xs text-slate-400">स्थानीय डेटा</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-800/80 text-slate-200 uppercase font-semibold">
              <tr>
                <th className="p-3">क्र.</th>
                <th className="p-3">दिनांक</th>
                <th className="p-3">आवेदक का नाम</th>
                <th className="p-3">सेवा</th>
                <th className="p-3">स्थिति</th>
                <th className="p-3">टिप्पणी</th>
                <th className="p-3 text-right">कार्य</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {entries.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-mono">{index + 1}</td>
                  <td className="p-3 font-mono text-slate-400">{item.date}</td>
                  <td className="p-3 font-semibold text-white">{item.applicant}</td>
                  <td className="p-3 text-emerald-400">{item.service}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.status.includes("Done") ? "bg-emerald-500/10 text-emerald-400" :
                      item.status.includes("Pending") ? "bg-amber-500/10 text-amber-400" : "bg-rose-500/10 text-rose-400"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{item.remarks || "—"}</td>
                  <td className="p-3 text-right">
                    <button
                      type="button"
                      onClick={() => deleteEntry(item.id)}
                      className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                      title="डिलीट करें"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
