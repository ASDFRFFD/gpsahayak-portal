import { Metadata } from "next";
import { ShieldCheck, Target, Award, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "हमारे बारे में (About Us) | GPSAHAYAK",
  description: "उत्तर प्रदेश के 58,000 से अधिक ग्राम पंचायत सहायकों के लिए समर्पित स्वतंत्र डिजिटल प्लेटफॉर्म।",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">परिचय एवं उद्देश्य</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">हमारे बारे में (About GPSAHAYAK)</h1>
        <p className="text-slate-400">ग्राम सचिवालय को डिजिटल और सशक्त बनाने की एक स्वतंत्र पहल।</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white">हमारा विज़न (Our Vision)</h2>
        <p>
          <strong>GPSAHAYAK.IN</strong> का मुख्य उद्देश्य उत्तर प्रदेश की 58,000+ ग्राम पंचायतों में कार्यरत पंचायत सहायकों (Panchayat Sahayak cum Data Entry Operators) को तकनीकी रूप से सशक्त बनाना है।
        </p>
        <p>
          ग्राम सचिवालय में प्रतिदिन होने वाले जटिल कार्यों जैसे ई-ग्राम स्वराज डाटा एंट्री, परिवार रजिस्टर, किसान रजिस्ट्री, जन्म-मृत्यु प्रमाण पत्र, मानदेय एवं कार्यालयी पत्राचार को सुगम बनाने के लिए यह मंच आधुनिक एवं निःशुल्क टूल्स प्रदान करता है।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
          <Target className="w-8 h-8 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">सरल एवं त्वरित समाधान</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            किसानों के आईडी कार्ड से लेकर हिंदी पत्र टाइपिंग तक, सभी टूल्स मोबाइल व कंप्यूटर दोनों पर तुरंत काम करते हैं।
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
          <ShieldCheck className="w-8 h-8 text-teal-400" />
          <h3 className="text-lg font-bold text-white">विश्वसनीय व निःशुल्क</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            हमारी सभी सेवाएं व टूल्स पूर्णतः निःशुल्क हैं और उपयोगकर्ता के डेटा की गोपनीयता का सम्मान करते हैं।
          </p>
        </div>
      </div>
    </div>
  );
}
