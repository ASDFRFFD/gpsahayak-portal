"use client";

import React, { useState, useRef } from "react";
import { 
  Printer, Download, RefreshCw, Upload, Sparkles, 
  CheckCircle, AlertCircle, FileSpreadsheet, Eye, User
} from "lucide-react";

interface LandRow {
  khasra: string;
  khata: string;
  rakba: string;
}

export default function FarmerIdGenerator() {
  const [farmerName, setFarmerName] = useState("राम कुमार");
  const [fatherName, setFatherName] = useState("श्याम लाल");
  const [farmerId, setFarmerId] = useState("UP260812345678");
  const [gender, setGender] = useState("पुरुष / MALE");
  const [dob, setDob] = useState("15/07/1984");
  const [mobile, setMobile] = useState("98765XXXXX");
  const [district, setDistrict] = useState("लखनऊ");
  const [block, setBlock] = useState("बख्शी का तालाब");
  const [panchayat, setPanchayat] = useState("कसमंडी कला");
  const [lgdCode, setLgdCode] = useState("134562");
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const [landDetails, setLandDetails] = useState<LandRow[]>([
    { khasra: "124ख", khata: "00145", rakba: "0.4520 हे." },
    { khasra: "189", khata: "00145", rakba: "0.2100 हे." },
  ]);

  const cardRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addLandRow = () => {
    if (landDetails.length < 4) {
      setLandDetails([...landDetails, { khasra: "", khata: "", rakba: "" }]);
    }
  };

  const removeLandRow = (index: number) => {
    setLandDetails(landDetails.filter((_, i) => i !== index));
  };

  const updateLandRow = (index: number, field: keyof LandRow, val: string) => {
    const updated = [...landDetails];
    updated[index][field] = val;
    setLandDetails(updated);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Header Info Banner */}
      <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 text-white backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>किसान रजिस्ट्री उत्तर प्रदेश 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              फार्मर आईडी कार्ड जनरेटर (Farmer ID Card Maker)
            </h1>
            <p className="text-sm text-emerald-100/80 mt-1 max-w-2xl">
              कृषि विभाग उत्तर प्रदेश की किसान रजिस्ट्री (Farmer Registry) आईडी कार्ड को पीवीसी/ए4 साइज में लाइव तैयार एवं प्रिंट करें।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all text-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>कार्ड प्रिंट करें</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Form Inputs (Left) & Live Card Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs (Left Column) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <User className="w-5 h-5 text-emerald-400" />
            <span>किसान विवरण भरें (Farmer Details)</span>
          </h2>

          {/* Photo & Basic Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                किसान का नाम (Hindi/English)
              </label>
              <input
                type="text"
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="राम कुमार"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                पिता/पति का नाम
              </label>
              <input
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="श्याम लाल"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                फार्मर आईडी नंबर (Farmer ID)
              </label>
              <input
                type="text"
                value={farmerId}
                onChange={(e) => setFarmerId(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-emerald-400 font-mono font-bold focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="UP260812345678"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                मोबाइल नंबर
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="98765XXXXX"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                जन्म तिथि (DOB)
              </label>
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="DD/MM/YYYY"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                लिंग (Gender)
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option value="पुरुष / MALE">पुरुष / MALE</option>
                <option value="महिला / FEMALE">महिला / FEMALE</option>
                <option value="अन्य / OTHER">अन्य / OTHER</option>
              </select>
            </div>
          </div>

          {/* Address & Location */}
          <div className="pt-2 border-t border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              गाँव व स्थान विवरण (Address Details)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">ज़िला (District)</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">विकासखंड (Block)</label>
                <input
                  type="text"
                  value={block}
                  onChange={(e) => setBlock(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">ग्राम पंचायत (Village)</label>
                <input
                  type="text"
                  value={panchayat}
                  onChange={(e) => setPanchayat(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">LGD Code</label>
                <input
                  type="text"
                  value={lgdCode}
                  onChange={(e) => setLgdCode(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Photo Upload Section */}
          <div className="pt-2 border-t border-slate-800">
            <label className="block text-xs font-medium text-slate-300 mb-2">
              किसान का फोटो अपलोड करें (Upload Photo)
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors">
                <Upload className="w-4 h-4 text-emerald-400" />
                <span>फोटो चुनें (JPG/PNG)</span>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
              {photoUrl && (
                <button
                  type="button"
                  onClick={() => setPhotoUrl(null)}
                  className="text-xs text-rose-400 hover:underline"
                >
                  फोटो हटाएं
                </button>
              )}
            </div>
          </div>

          {/* Land Details Table */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                भूमि / खसरा विवरण (Land Details)
              </h3>
              {landDetails.length < 4 && (
                <button
                  type="button"
                  onClick={addLandRow}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
                >
                  + खसरा जोड़ें
                </button>
              )}
            </div>

            <div className="space-y-2">
              {landDetails.map((row, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="खसरा संख्या"
                    value={row.khasra}
                    onChange={(e) => updateLandRow(idx, "khasra", e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="खाता संख्या"
                    value={row.khata}
                    onChange={(e) => updateLandRow(idx, "khata", e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="रकबा (हेक्टेयर)"
                    value={row.rakba}
                    onChange={(e) => updateLandRow(idx, "rakba", e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                  {landDetails.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLandRow(idx)}
                      className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Card Preview (Right Column) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>लाइव कार्ड प्रिव्यू (Live PVC Card Preview)</span>
              </h3>
              <span className="text-[11px] text-slate-400">Standard 85.6mm × 54mm</span>
            </div>

            {/* Front Card Design */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-emerald-400">FRONT (सामने का भाग)</div>
              <div 
                ref={cardRef}
                className="w-full max-w-[380px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-300 text-slate-900 font-sans select-none"
                style={{ aspectRatio: "1.586/1" }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 text-white px-3 py-1.5 flex items-center justify-between border-b-2 border-amber-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-extrabold text-[9px]">
                      UP
                    </div>
                    <div>
                      <div className="text-[9px] font-extrabold tracking-wide uppercase leading-tight">
                        कृषि विभाग, उत्तर प्रदेश
                      </div>
                      <div className="text-[7px] text-emerald-200 leading-tight">
                        DEPARTMENT OF AGRICULTURE, UP
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded leading-none">
                      किसान आईडी
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-2.5 flex gap-2.5 items-start">
                  {/* Photo & QR */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-16 h-20 bg-slate-100 border border-slate-300 rounded overflow-hidden flex items-center justify-center shadow-inner">
                      {photoUrl ? (
                        <img src={photoUrl} alt="Farmer" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-8 h-8 text-slate-400" />
                      )}
                    </div>
                    <div className="text-[6px] text-slate-500 font-mono">LGD: {lgdCode}</div>
                  </div>

                  {/* Farmer Info */}
                  <div className="flex-1 text-[8.5px] leading-tight space-y-1">
                    <div className="text-emerald-900 font-extrabold text-[10px] leading-tight border-b border-emerald-100 pb-0.5">
                      {farmerName || "नाम दर्ज करें"}
                    </div>
                    <div>
                      <span className="text-slate-500">पिता/पति:</span>{" "}
                      <span className="font-bold text-slate-800">{fatherName || "—"}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">आईडी:</span>{" "}
                      <span className="font-mono font-bold text-emerald-700">{farmerId}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">DOB / लिंग:</span>{" "}
                      <span className="font-bold text-slate-800">{dob} | {gender.split("/")[0]}</span>
                    </div>
                    <div className="text-[7.5px] text-slate-600 bg-slate-50 p-1 rounded border border-slate-200">
                      <strong>ग्राम:</strong> {panchayat}, <strong>ब्लाक:</strong> {block}, <strong>ज़िला:</strong> {district}
                    </div>
                  </div>
                </div>

                {/* Card Footer Banner */}
                <div className="bg-slate-100 px-3 py-1 border-t border-slate-200 flex items-center justify-between text-[7px] text-slate-600">
                  <span>डिजिटल किसान रजिस्ट्री उत्तर प्रदेश</span>
                  <span className="font-bold text-emerald-800">gpsahayak.in</span>
                </div>
              </div>
            </div>

            {/* Back Card Design */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-teal-400">BACK (पीछे का भाग - भूमि विवरण)</div>
              <div 
                className="w-full max-w-[380px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-300 text-slate-900 font-sans select-none flex flex-col justify-between"
                style={{ aspectRatio: "1.586/1" }}
              >
                {/* Header */}
                <div className="bg-slate-800 text-white px-3 py-1 text-[8px] font-bold flex justify-between items-center">
                  <span>भू-अभिलेख विवरण (Land Holdings Details)</span>
                  <span>उ.प्र. किसान सेवा</span>
                </div>

                {/* Land Table */}
                <div className="p-2 flex-1">
                  <table className="w-full text-[7.5px] border-collapse text-center">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold border border-slate-300">
                        <th className="p-0.5 border border-slate-300">क्र.</th>
                        <th className="p-0.5 border border-slate-300">खसरा सं.</th>
                        <th className="p-0.5 border border-slate-300">खाता सं.</th>
                        <th className="p-0.5 border border-slate-300">रकबा (हेक्टेयर)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {landDetails.map((row, i) => (
                        <tr key={i} className="border border-slate-200">
                          <td className="p-0.5 border border-slate-200 font-medium">{i + 1}</td>
                          <td className="p-0.5 border border-slate-200 font-bold">{row.khasra || "—"}</td>
                          <td className="p-0.5 border border-slate-200 font-bold">{row.khata || "—"}</td>
                          <td className="p-0.5 border border-slate-200 font-bold text-emerald-800">{row.rakba || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Instructions */}
                <div className="p-1.5 bg-slate-50 border-t border-slate-200 text-[6px] text-slate-500 leading-tight">
                  यह कार्ड केवल किसान पहचान एवं कृषि योजनाओं के लाभ हेतु मान्य है। भू-स्वामित्व के वैधानिक प्रमाण हेतु राजस्व खतौनी ही अंतिम साक्ष्य होगी।
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>अभी प्रिंट करें (Print / PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
