import { Metadata } from "next";
import { Download, HardDrive, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "सॉफ्टवेयर व बायोमेट्रिक ड्राइवर डाउनलोड 2026 | GPSAHAYAK",
  description: "पंचायत सहायकों के लिए आवश्यक बायोमेट्रिक RD सर्विस (Mantra, Morpho, Startek), DSC Signer, और उपयोगी सॉफ्टवेयर डाउनलोड।",
};

const SOFTWARES = [
  {
    name: "Mantra MFS100 RD Service & Driver",
    category: "बायोमेट्रिक ड्राइवर",
    desc: "ई-केवाईसी और आयुष्मान भारत / फार्मर रजिस्ट्री हेतु मंत्रा डिवाइस का नवीनतम ड्राइवर।",
    size: "24 MB",
    link: "https://download.mantratecapp.com",
  },
  {
    name: "Morpho MSO 1300 E3 RD Service",
    category: "बायोमेट्रिक ड्राइवर",
    desc: "मॉर्फो फिंगरप्रिंट स्कैनर के लिए आवश्यक RD सर्विस सॉफ्टवेयर।",
    size: "18 MB",
    link: "https://rdserviceonline.com",
  },
  {
    name: "ePass2003 DSC PKI Driver",
    category: "डिजिटल सिग्नेचर (DSC)",
    desc: "eGramSwaraj पोर्टल पर प्रधान/सचिव DSC डोंगल साइनिंग के लिए जरूरी ड्राइवर।",
    size: "12 MB",
    link: "https://epass2003.com",
  },
  {
    name: "Hindi Indic Input 3 (Google Hindi Typing)",
    category: "टाइपिंग सॉफ्टवेयर",
    desc: "Windows 10/11 में आसान हिंदी फोनेटिक टाइपिंग टूल।",
    size: "8 MB",
    link: "https://www.google.co.in/inputtools/windows/",
  },
];

export default function SoftwareDownloadPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ग्राम सचिवालय सॉफ्टवेयर केंद्र 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          सॉफ्टवेयर एवं ड्राइवर डाउनलोड
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          ग्राम सचिवालय कंप्यूटर में उपयोग होने वाले आधिकारिक बायोमेट्रिक ड्राइवर्स एवं टूल्स।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {SOFTWARES.map((s, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {s.category}
                </span>
                <span className="text-xs text-slate-500">{s.size}</span>
              </div>
              <h2 className="text-base font-bold text-white">{s.name}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>

            <div className="pt-2">
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>आधिकारिक वेबसाइट से डाउनलोड करें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
