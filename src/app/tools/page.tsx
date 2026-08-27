import { Metadata } from "next";
import Link from "next/link";
import { UserCheck, FileText, Calculator, Wrench, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "सभी डिजिटल टूल्स (All Tools) | GPSAHAYAK",
  description: "उत्तर प्रदेश पंचायत सहायकों के लिए सभी आवश्यक टूल्स — फार्मर आईडी कार्ड, हिंदी एडिटर, सैलरी और सीएससी कैलकुलेटर।",
};

const TOOLS = [
  {
    title: "फार्मर आईडी कार्ड जनरेटर",
    desc: "किसान रजिस्ट्री PVC आईडी कार्ड ऑनलाइन बनाएं एवं तुरंत फ्रंट और बैक प्रिंट करें।",
    href: "/tools/farmer-id-card-generator",
    icon: UserCheck,
    color: "emerald",
    tag: "सर्वाधिक लोकप्रिय",
  },
  {
    title: "हिंदी ऑफिस एडिटर",
    desc: "ग्राम सचिवालय के पत्र, मानदेय प्रार्थना पत्र, प्रस्ताव व अवकाश अर्जी टाइप और प्रिंट करें।",
    href: "/tools/hindi-office-editor",
    icon: FileText,
    color: "cyan",
    tag: "ऑफिस कार्य",
  },
  {
    title: "मानदेय व एरियर कैलकुलेटर",
    desc: "लंबित महीनों की सैलरी, एरियर एवं कुल देय मानदेय का तुरंत सटीक हिसाब निकालें।",
    href: "/tools/salary-calculator",
    icon: Calculator,
    color: "amber",
    tag: "सैलरी हिसाब",
  },
  {
    title: "CSC एवं ई-डिस्ट्रिक्ट आय कैलकुलेटर",
    desc: "ग्राम सचिवालय में दी जाने वाली डिजिटल सेवाओं से संभावित अतिरिक्त कमीशन आय का विश्लेषण।",
    href: "/tools/csc-calculator",
    icon: Calculator,
    color: "purple",
    tag: "कमीशन हिसाब",
  },
];

export default function ToolsHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>डिजिटल टूल्स हब 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          पंचायत सहायक डिजिटल टूल्स
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          ग्राम सचिवालय के दैनिक कार्यों को तेज, सुगम एवं त्रुटिहीन बनाने वाले आधुनिक वेब टूल्स।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {TOOLS.map((t, idx) => {
          const Icon = t.icon;
          return (
            <Link
              key={idx}
              href={t.href}
              className="bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl transition-all hover:scale-[1.02] shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {t.tag}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {t.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t.desc}
                </p>
              </div>

              <div className="pt-6 text-xs font-bold text-emerald-400 flex items-center gap-1">
                <span>टूल खोलें</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
