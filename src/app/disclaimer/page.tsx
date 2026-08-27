import { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "अस्वीकरण (Disclaimer) | GPSAHAYAK",
  description: "GPSAHAYAK पोर्टल का कानूनी अस्वीकरण एवं सूचना।",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">अस्वीकरण (Disclaimer)</h1>
        <p className="text-slate-400">महत्वपूर्ण वैधानिक सूचना</p>
      </div>

      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong>गैर-सरकारी पोर्टल:</strong> GPSAHAYAK.IN एक स्वतंत्र, निजी एवं गैर-सरकारी सहायता पोर्टल है। इसका पंचायती राज विभाग अथवा उत्तर प्रदेश सरकार के साथ कोई आधिकारिक संबंध नहीं है।
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">सूचना की सटीकता</h2>
        <p>
          इस पोर्टल पर उपलब्ध कराई गई जानकारी केवल पंचायत सहायकों की सहायता एवं शैक्षणिक संदर्भ के लिए है। किसी भी आधिकारिक निर्णय अथवा कानूनी मामले हेतु कृपया संबंधित विभाग द्वारा जारी मूल शासनादेशों का ही अवलोकन करें।
        </p>

        <h2 className="text-xl font-bold text-white">टूल आउटपुट</h2>
        <p>
          कैलकुलेटर एवं जनरेटर टूल्स द्वारा तैयार किए गए दस्तावेज़ केवल प्रारूप (फॉर्मेट) मात्र हैं। आधिकारिक सत्यापन सदैव सक्षम प्राधिकारी द्वारा ही मान्य होगा।
        </p>
      </div>
    </div>
  );
}
