import { Metadata } from "next";
import { Bell, Sparkles, Calendar, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "शासनादेश एवं नोटिस बोर्ड 2026 | Panchayat Sahayak Notices | GPSAHAYAK",
  description: "पंचायती राज विभाग उत्तर प्रदेश के नवीनतम शासनादेश, सूचनाएं और दिशानिर्देश।",
};

const NOTICES = [
  {
    title: "डिजिटल किसान रजिस्ट्री (Farmer ID) शत-प्रतिशत पूर्ण करने हेतु निर्देश",
    date: "10 अगस्त 2026",
    dept: "कृषि विभाग, उत्तर प्रदेश",
    desc: "समस्त ग्राम पंचायतों में कैंप लगाकर किसानों की ई-केवाईसी एवं फार्मर आईडी बनाने का आदेश।",
  },
  {
    title: "ग्राम सचिवालयों में CSC सेवाएं सुचारू रूप से संचालित करने बाबत",
    date: "25 जुलाई 2026",
    dept: "पंचायती राज निदेशालय, लखनऊ",
    desc: "नागरिकों को आय, जाति, निवास व खतौनी सेवाएं ग्राम सचिवालय से अनिवार्य रूप से उपलब्ध कराने का निर्देश।",
  },
  {
    title: "पंचायत सहायक मानदेय भुगतान (PFMS) समयबद्ध सुनिश्चित करने का परिपत्र",
    date: "05 जुलाई 2026",
    dept: "पंचायती राज अनुभाग-1",
    desc: "प्रत्येक माह की 7 तारीख तक पंचायत सहायकों के मानदेय का डोंगल अप्रूवल कराने के सख्त निर्देश।",
  },
  {
    title: "ई-ग्राम स्वराज पोर्टल पर वार्षिक कार्ययोजना (GPDP 2026-27) फ्रीजिंग संबंध में",
    date: "15 जून 2026",
    dept: "पंचायती राज मंत्रालय, भारत सरकार",
    desc: "15वें वित्त आयोग एवं राज्य वित्त आयोग की कार्ययोजना अपलोड करने की अंतिम तिथि।",
  },
];

export default function NoticesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Bell className="w-3.5 h-3.5" />
          <span>आधिकारिक सूचना केंद्र 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          शासनादेश एवं नोटिस बोर्ड (Notices)
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          पंचायती राज विभाग एवं कृषि विभाग के नवीनतम सरकारी आदेश व परिपत्र।
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {NOTICES.map((n, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-500/40 transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {n.dept}
                </span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {n.date}
                </span>
              </div>
              <h2 className="text-base font-bold text-white leading-tight">{n.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{n.desc}</p>
            </div>

            <button
              type="button"
              onClick={() => alert("शासनादेश पीडीएफ खोला जा रहा है...")}
              className="bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>शासनादेश देखें</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
