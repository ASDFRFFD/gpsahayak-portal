"use client";

import React, { useState } from "react";
import { Lock, Mail, ShieldAlert, CheckCircle, BarChart3, Users, FileText } from "lucide-react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@gpsahayak.in" && password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("अमान्य ईमेल या पासवर्ड। कृपया सही क्रेडेंशियल्स दर्ज करें।");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 text-white">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold">एडमिन कंट्रोल पैनल (Admin Dashboard)</h1>
            <p className="text-xs text-slate-400">GPSAHAYAK.IN पोर्टल मैनेजमेंट</p>
          </div>
          <button
            type="button"
            onClick={() => setIsLoggedIn(false)}
            className="bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            लॉगआउट
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs text-slate-400">कुल विज़िटर्स (Monthly)</div>
            <div className="text-2xl font-black text-emerald-400 mt-1">1,45,000+</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs text-slate-400">आईडी कार्ड जनरेटेड</div>
            <div className="text-2xl font-black text-teal-400 mt-1">68,400+</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="text-xs text-slate-400">सक्रिय पंचायत सहायक</div>
            <div className="text-2xl font-black text-cyan-400 mt-1">58,189</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl text-white">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold">एडमिन लॉगिन (Admin Login)</h1>
          <p className="text-xs text-slate-400">पोर्टल प्रबंधन हेतु अधिकृत लॉगिन</p>
        </div>

        {error && (
          <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">एडमिन ईमेल</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gpsahayak.in"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">पासवर्ड</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            सुरक्षित लॉगिन करें
          </button>
        </form>
      </div>
    </div>
  );
}
