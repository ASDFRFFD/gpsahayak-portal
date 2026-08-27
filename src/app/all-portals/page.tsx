import { Metadata } from "next";
import { ExternalLink, Globe, Sparkles, Shield, Bookmark } from "lucide-react";

export const metadata: Metadata = {
  title: "सभी सरकारी पोर्टल्स डायरेक्टरी 2026 | All Govt Portals | GPSAHAYAK",
  description: "उत्तर प्रदेश ग्राम पंचायत सहायकों के लिए सभी उपयोगी सरकारी पोर्टल्स (eGramSwaraj, eDistrict, CRS, PFMS, MeriPanchayat) की सीधी लिंक डायरेक्टरी।",
};

const PORTALS = [
  { name: "eGramSwaraj", cat: "पंचायती राज", url: "https://egramswaraj.gov.in", desc: "वार्षिक कार्ययोजना (GPDP), एक्टिविटी क्रिएशन और DSC पेमेंट वाउचर।" },
  { name: "e-District UP", cat: "नागरिक सेवाएं", url: "https://edistrict.up.gov.in", desc: "आय, जाति, निवास, दिव्यांग प्रमाण पत्र एवं खतौनी नकल।" },
  { name: "CRS Portal (Civil Registration System)", cat: "जन्म-मृत्यु", url: "https://crsorgi.gov.in", desc: "जन्म एवं मृत्यु प्रमाण पत्र ऑनलाइन पंजीकरण व जारी करना।" },
  { name: "PFMS Portal", cat: "वित्तीय भुगतान", url: "https://pfms.nic.in", desc: "ग्राम पंचायत वेंडर मैपिंग, मानदेय भुगतान एवं ट्रेजरी ट्रैकिंग।" },
  { name: "PM Kisan Samman Nidhi", cat: "कृषि सेवाएं", url: "https://pmkisan.gov.in", desc: "किसान सम्मान निधि e-KYC, नया पंजीकरण और स्टेटस चेक।" },
  { name: "MeriPanchayat Portal & App", cat: "मोबाइल गवर्नेंस", url: "https://meripanchayat.gov.in", desc: "ग्राम पंचायत के विकास कार्यों की फोटो व प्रगति रिपोर्टिंग।" },
  { name: "Panchayati Raj UP", cat: "विभागीय", url: "http://panchayatiraj.up.nic.in", desc: "उत्तर प्रदेश पंचायती राज विभाग के शासनादेश एवं परिपत्र।" },
  { name: "Kutumb / Family Register UP", cat: "परिवार रजिस्टर", url: "https://edistrict.up.gov.in", desc: "ग्राम पंचायत परिवार रजिस्टर ऑनलाइन संशोधन व प्रविष्टि।" },
];

export default function AllPortalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ग्राम सचिवालय पोर्टल डायरेक्टरी 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          सभी आवश्यक सरकारी पोर्टल्स (All Govt Portals)
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          ग्राम सचिवालय में काम आने वाले सभी आधिकारिक राष्ट्रीय एवं राज्य स्तरीय पोर्टल्स तक सीधी पहुँच।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTALS.map((p, idx) => (
          <a
            key={idx}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {p.cat}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h2 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                {p.name}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-400 flex items-center gap-1">
              <span>पोर्टल खोलें</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
