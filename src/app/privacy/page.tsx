import { Metadata } from "next";

export const metadata: Metadata = {
  title: "गोपनीयता नीति (Privacy Policy) | GPSAHAYAK",
  description: "GPSAHAYAK पोर्टल की डेटा सुरक्षा एवं गोपनीयता नीति।",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">गोपनीयता नीति (Privacy Policy)</h1>
        <p className="text-slate-400">अंतिम अद्यतन: 2026</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">1. डेटा संग्रहण एवं उपयोग</h2>
        <p>
          GPSAHAYAK.IN किसी भी उपयोगकर्ता का व्यक्तिगत गोपनीय डेटा (जैसे आधार पासवर्ड या बैंक पिन) अपने सर्वर पर स्टोर नहीं करता है। फार्मर आईडी कार्ड एवं हिंदी एडिटर टूल्स में दर्ज किया गया विवरण केवल आपके स्थानीय ब्राउज़र (Client Side) में प्रोसेस होता है।
        </p>

        <h2 className="text-xl font-bold text-white">2. कुकीज़ एवं एनालिटिक्स</h2>
        <p>
          साइट के प्रदर्शन एवं सुरक्षा को बेहतर बनाने हेतु हम Google Analytics जैसी मानक तकनीकों का उपयोग करते हैं, जो गुमनाम (anonymous) ट्रैफ़िक डेटा एकत्र करती हैं।
        </p>

        <h2 className="text-xl font-bold text-white">3. तीसरे पक्ष के लिंक्स</h2>
        <p>
          हमारी वेबसाइट पर भारत सरकार एवं उत्तर प्रदेश सरकार के आधिकारिक पोर्टल्स (उदा. eGramSwaraj, eDistrict) के लिंक दिए गए हैं। उन बाहरी वेबसाइटों की अपनी गोपनीयता नीतियां लागू होती हैं।
        </p>
      </div>
    </div>
  );
}
