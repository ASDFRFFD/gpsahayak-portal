import { Metadata } from "next";
import { Award, Check, Sparkles, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "सदस्यता एवं समर्थक (Membership) | GPSAHAYAK",
  description: "GPSAHAYAK पोर्टल के समर्थक बनें और विशेष टूल्स एवं प्राथमिक सहायता प्राप्त करें।",
};

export default function MembershipPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10 text-white">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>सहयोग एवं सदस्यता</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          GPSAHAYAK सदस्यता (Portal Membership)
        </h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          यह पोर्टल पूर्णतः स्वतंत्र है। पोर्टल के सर्वर खर्च एवं निरंतर विकास में अपना स्वैच्छिक योगदान दें।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Free Plan */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">निःशुल्क उपयोगकर्ता (Free)</h2>
            <div className="text-3xl font-black text-emerald-400">₹0 <span className="text-xs text-slate-500 font-normal">/ आजीवन</span></div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>सभी टूल्स (ID कार्ड, हिंदी एडिटर) का असीमित उपयोग</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>शासनादेश व फॉर्म्स डाउनलोड</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>कम्युनिटी फोरम पर सवाल पूछना</span>
              </li>
            </ul>
          </div>
          <button className="w-full bg-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs">
            वर्तमान में सक्रिय (Active)
          </button>
        </div>

        {/* Premium Supporter */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/40 border-2 border-emerald-500/50 p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-2xl relative">
          <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-3 py-0.5 rounded-full">
            समर्थक (Supporter)
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>प्रीमियम समर्थक</span>
            </h2>
            <div className="text-3xl font-black text-white">₹99 <span className="text-xs text-slate-400 font-normal">/ स्वैच्छिक वार्षिक</span></div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>समस्त निःशुल्क सुविधाएं</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp VIP सपोर्ट ग्रुप का एक्सेस</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>नवीनतम शासनादेश का सीधा अलर्ट</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>पोर्टल पर 'Verified Sahayak' बैज</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() => alert("समर्थन हेतु संपर्क करें: support@gpsahayak.in")}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl text-xs cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            पोर्टल समर्थक बनें (Support)
          </button>
        </div>
      </div>
    </div>
  );
}
