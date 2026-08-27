import { Metadata } from "next";
import { Sparkles, CheckCircle2, Bookmark, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "ग्राम पंचायत सरकारी योजनाएं 2026 | Gram Panchayat Yojana List | GPSAHAYAK",
  description: "उत्तर प्रदेश ग्राम पंचायतों में संचालित समस्त सरकारी कल्याणकारी योजनाओं (आवास, पेंशन, शौचालय, किसान) की संपूर्ण सूची एवं पात्रता।",
};

const YOJANAS = [
  {
    title: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    dept: "ग्रामीण विकास मंत्रालय",
    benefit: "पक्के मकान निर्माण हेतु ₹1,20,000 की प्रत्यक्ष आर्थिक सहायता।",
    eligibility: "कच्चे मकान में रहने वाले बेघर / बीपीएल परिवार।",
    portal: "https://pmayg.nic.in",
  },
  {
    title: "मुख्यमंत्री आवास योजना (ग्रामीण - UP)",
    dept: "ग्राम्य विकास विभाग, उ.प्र.",
    benefit: "प्राकृतिक आपदा पीड़ित, मुसहर, वनटांगिया एवं कुष्ठ रोगियों को निःशुल्क आवास।",
    eligibility: "विशिष्ट संवेदनशील श्रेणियों के ग्रामीण परिवार।",
    portal: "http://panchayatiraj.up.nic.in",
  },
  {
    title: "वृद्धावस्था / निराश्रित महिला (विधवा) / दिव्यांग पेंशन",
    dept: "समाज कल्याण विभाग, उ.प्र.",
    benefit: "₹1,000 प्रति माह सीधे लाभार्थी के आधार-लिंक्ड बैंक खाते में।",
    eligibility: "60 वर्ष से अधिक आयु के वृद्धजन, पात्र महिलाएं व दिव्यांग नागरिक।",
    portal: "https://sspy-up.gov.in",
  },
  {
    title: "स्वच्छ भारत मिशन (ग्रामीण) - शौचालय योजना",
    dept: "पंचायती राज विभाग",
    benefit: "शौचालय निर्माण हेतु ₹12,000 की प्रोत्साहन राशि।",
    eligibility: "व्यक्तिगत शौचालय विहीन ग्रामीण परिवार।",
    portal: "https://sbm.gov.in",
  },
  {
    title: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PMJAY)",
    dept: "स्वास्थ्य एवं परिवार कल्याण",
    benefit: "प्रति परिवार प्रति वर्ष ₹5,00,000 तक का निःशुल्क कैशलेस उपचार।",
    eligibility: "SECC 2011 सूची एवं अंत्योदय/पात्र गृहस्थी कार्डधारक।",
    portal: "https://beneficiary.nha.gov.in",
  },
  {
    title: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
    dept: "कृषि एवं किसान कल्याण",
    benefit: "प्रति वर्ष ₹6,000 (₹2,000 की तीन समान किस्तों में)।",
    eligibility: "भू-स्वामित्व वाले सभी पात्र लघु एवं सीमांत किसान।",
    portal: "https://pmkisan.gov.in",
  },
];

export default function YojanaListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ग्राम विकास योजना केंद्र 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          ग्राम पंचायत प्रमुख सरकारी योजनाएं (Yojana List)
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          गाँव के नागरिकों को लाभान्वित करने वाली समस्त केंद्रीय व राज्य स्तरीय कल्याणकारी योजनाओं का विवरण।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {YOJANAS.map((y, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {y.dept}
              </span>
              <h2 className="text-lg font-bold text-white leading-tight">{y.title}</h2>
              <div className="text-xs text-slate-300 space-y-1 pt-1">
                <div><strong>लाभ:</strong> {y.benefit}</div>
                <div className="text-slate-400"><strong>पात्रता:</strong> {y.eligibility}</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={y.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
              >
                <span>आधिकारिक पोर्टल</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
