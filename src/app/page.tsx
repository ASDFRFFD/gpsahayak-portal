import React from "react";
import Link from "next/link";
import { 
  Wrench, UserCheck, FileText, Calculator, BookOpen, 
  ExternalLink, Sparkles, ArrowRight, ShieldCheck, 
  CheckCircle2, Users, Download, HelpCircle, FileSpreadsheet
} from "lucide-react";
import { BLOGS_DATA } from "@/lib/blogs-data";

export default function HomePage() {
  const featuredBlogs = BLOGS_DATA.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shadow-inner">
          <Sparkles className="w-4 h-4" />
          <span>ग्राम पंचायत सचिवालय डिजिटल प्लेटफॉर्म 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
          उत्तर प्रदेश पंचायत सहायकों का <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            सर्वश्रेष्ठ डिजिटल साथी
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          किसान रजिस्ट्री आईडी कार्ड, हिंदी ऑफिस लेटर टाइपिंग, मानदेय व सीएससी कैलकुलेटर और सभी सरकारी पोर्टल्स तक सीधी पहुँच — एक ही मंच पर।
        </p>

        {/* Hero Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools/farmer-id-card-generator"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all text-sm"
          >
            <UserCheck className="w-5 h-5 text-slate-950" />
            <span>फार्मर ID कार्ड बनाएँ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/tools/hindi-office-editor"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm"
          >
            <FileText className="w-5 h-5 text-cyan-400" />
            <span>हिंदी लेटर टाइपिंग</span>
          </Link>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="text-2xl font-black text-emerald-400">58,000+</div>
            <div className="text-xs text-slate-400 mt-0.5">ग्राम पंचायतें लाभान्वित</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="text-2xl font-black text-teal-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">निःशुल्क डिजिटल टूल्स</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="text-2xl font-black text-cyan-400">2026</div>
            <div className="text-xs text-slate-400 mt-0.5">नवीनतम शासनादेश अपडेट</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
            <div className="text-2xl font-black text-amber-400">PFMS</div>
            <div className="text-xs text-slate-400 mt-0.5">मानदेय व एरियर ट्रैकिंग</div>
          </div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">आवश्यक डिजिटल उपकरण</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">प्रमुख उपयोगी टूल्स (Top Tools)</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tool Card 1 */}
          <Link
            href="/tools/farmer-id-card-generator"
            className="group bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                फार्मर आईडी कार्ड जनरेटर
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                किसान रजिस्ट्री PVC आईडी कार्ड (Front & Back) लाइव तैयार कर तुरंत प्रिंट करें।
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-400 flex items-center gap-1">
              <span>उपयोग करें</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool Card 2 */}
          <Link
            href="/tools/hindi-office-editor"
            className="group bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                हिंदी ऑफिस एडिटर
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ग्राम सचिवालय के मानदेय पत्र, प्रस्ताव, नोटिस व छुट्टी की अर्जी रेडीमेड प्रारूप से तैयार करें।
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-cyan-400 flex items-center gap-1">
              <span>उपयोग करें</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool Card 3 */}
          <Link
            href="/tools/salary-calculator"
            className="group bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                मानदेय व एरियर कैलकुलेटर
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                लंबित महीनों की सैलरी और बकाये एरियर का तुरंत शुद्ध हिसाब निकालें।
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-400 flex items-center gap-1">
              <span>उपयोग करें</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tool Card 4 */}
          <Link
            href="/tools/csc-calculator"
            className="group bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-slate-950 transition-colors">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                CSC आय कैलकुलेटर
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                e-District, परिवार रजिस्टर नकल और पैन कार्ड आदि सेवाओं से होने वाली अतिरिक्त आय का हिसाब।
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-purple-400 flex items-center gap-1">
              <span>उपयोग करें</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Official Portals Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">सीधा लिंक</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">प्रमुख सरकारी पोर्टल्स (Govt Portals)</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "eGramSwaraj", desc: "GPDP व वाउचर एंट्री", url: "https://egramswaraj.gov.in" },
            { name: "e-District UP", desc: "आय, जाति, निवास", url: "https://edistrict.up.gov.in" },
            { name: "CRS Portal", desc: "जन्म-मृत्यु प्रमाण पत्र", url: "https://crsorgi.gov.in" },
            { name: "PFMS Portal", desc: "मानदेय व भुगतान स्टेटस", url: "https://pfms.nic.in" },
            { name: "PM Kisan", desc: "किसान सम्मान निधि eKYC", url: "https://pmkisan.gov.in" },
            { name: "MeriPanchayat", desc: "पंचायत मोबाइल ऐप", url: "https://meripanchayat.gov.in" },
          ].map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 p-3.5 rounded-xl transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white group-hover:text-emerald-400 transition-colors">
                  {p.name}
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
              </div>
              <div className="text-[10px] text-slate-400 mt-1">{p.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">ताज़ा जानकारी</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">नवीनतम ब्लॉग्स एवं शासनादेश</h2>
          </div>
          <Link href="/blog" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
            <span>सभी देखें</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/30 p-6 rounded-2xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {b.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {b.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
                <span>{b.date}</span>
                <span>{b.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
