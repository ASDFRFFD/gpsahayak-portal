import { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "संपर्क करें (Contact Us) | GPSAHAYAK",
  description: "GPSAHAYAK टीम से संपर्क करें, सुझाव दें अथवा तकनीकी सहायता प्राप्त करें।",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">सहायता एवं सुझाव</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">हमसे संपर्क करें (Contact Us)</h1>
        <p className="text-slate-400 text-sm sm:text-base">
          यदि आपके पास कोई प्रश्न, सुझाव अथवा नए टूल की मांग है तो कृपया नीचे दिए गए माध्यम से संपर्क करें।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <Mail className="w-5 h-5" />
              <span className="font-bold text-white text-sm">ईमेल सहायता (Email Support)</span>
            </div>
            <p className="text-xs text-slate-400">
              support@gpsahayak.in <br />
              helpline@gpsahayak.in
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-teal-400">
              <MapPin className="w-5 h-5" />
              <span className="font-bold text-white text-sm">क्षेत्रीय कार्यालय</span>
            </div>
            <p className="text-xs text-slate-400">
              लखनऊ, उत्तर प्रदेश, भारत (226001)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="text-base font-bold text-white">संदेश भेजें (Send Message)</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-slate-300 mb-1">आपका नाम</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" placeholder="नाम लिखें" />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">मोबाइल नंबर / ईमेल</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" placeholder="फोन / ईमेल" />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">संदेश</label>
              <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" placeholder="अपना संदेश या समस्या लिखें..." />
            </div>
            <button
              type="button"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>संदेश प्रेषित करें</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
