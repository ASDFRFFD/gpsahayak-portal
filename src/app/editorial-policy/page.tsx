import { Metadata } from "next";
import { CheckCircle2, Shield, Users, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "सम्पादकीय नीति (Editorial Policy) | GPSAHAYAK",
  description: "GPSAHAYAK.in की सम्पादकीय नीति — जानें कैसे हम शासनादेशों एवं सूचनाओं की सत्यता जांचते हैं।",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">सत्यता एवं पारदर्शिता</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">सम्पादकीय नीति (Editorial Policy)</h1>
        <p className="text-slate-400">हम सटीक, प्रामाणिक और अद्यतित जानकारी प्रदान करने के लिए प्रतिबद्ध हैं।</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>1. सूचना स्रोतों का सत्यापन</span>
        </h2>
        <p>
          हमारे पोर्टल पर प्रकाशित होने वाला प्रत्येक लेख, शासनादेश और प्रक्रिया विवरण पंचायती राज विभाग उत्तर प्रदेश, भारत सरकार के आधिकारिक पोर्टल्स एवं विभागीय ज्ञापनों से सीधे सत्यापित किया जाता है।
        </p>

        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-teal-400" />
          <span>2. नियमित अद्यतन (Regular Updates)</span>
        </h2>
        <p>
          नियमों, मानदेय दरों, और पोर्टल प्रक्रियाओं में बदलाव होते ही हमारे लेखों एवं कैलकुलेटर टूल्स को तुरंत संशोधित किया जाता है ताकि पंचायत सहायकों को हमेशा ताज़ा और सही जानकारी मिले।
        </p>

        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyan-400" />
          <span>3. गैर-पक्षपाती दृष्टिकोण</span>
        </h2>
        <p>
          हमारा उद्देश्य केवल पंचायत सहायकों की कार्यकुशलता बढ़ाना और उन्हें तकनीकी समस्याओं से निजात दिलाना है।
        </p>
      </div>
    </div>
  );
}
