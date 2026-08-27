"use client";

import React, { useState } from "react";
import { 
  FileText, Printer, Download, Copy, Check, 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Sparkles 
} from "lucide-react";

export default function HindiEditor() {
  const [content, setContent] = useState(`सेवा में,
श्रीमान खंड विकास अधिकारी महोदय,
विकासखंड - ...................., जनपद - ....................

विषय: ग्राम पंचायत सचिवालय संचालन एवं आवश्यक स्टेशनरी उपलब्ध कराने के संबंध में।

महोदय,
सविनय निवेदन है कि प्रार्थी ग्राम पंचायत .................... में पंचायत सहायक / डाटा एंट्री ऑपरेटर के पद पर कार्यरत है। ग्राम सचिवालय में सुचारू रूप से कार्य निष्पादन एवं ग्रामीणों को डिजिटल सेवाएं प्रदान करने हेतु आवश्यक सामग्री / इंटरनेट व्यवस्था की आवश्यकता है।

अतः श्रीमान जी से विनम्र निवेदन है कि उचित दिशा-निर्देश जारी करने की कृपा करें।

दिनांक: ....................
भवदीय,
(पंचायत सहायक)
ग्राम पंचायत: ....................
मोबाइल: ....................`);

  const [gpName, setGpName] = useState("ग्राम पंचायत: ....................");
  const [copied, setCopied] = useState(false);

  const applyTemplate = (templateType: string) => {
    if (templateType === "salary") {
      setContent(`सेवा में,
श्रीमान ग्राम प्रधान / पंचायत सचिव महोदय,
ग्राम पंचायत - ...................., विकासखंड - ....................

विषय: विगत माह के मानदेय भुगतान हेतु प्रार्थना पत्र।

महोदय,
सविनय निवेदन है कि प्रार्थी विगत .......... माह से ग्राम पंचायत सचिवालय में नियमित रूप से अपनी उपस्थिति दर्ज कर दायित्वों का निर्वहन कर रहा है। प्रार्थी का माह .......... से .......... तक का मानदेय भुगतान अभी तक अप्राप्त है।

अतः आपसे करबद्ध निवेदन है कि PFMS पोर्टल के माध्यम से मानदेय भुगतान की संस्तुति करने की कृपा करें।

दिनांक: ....................
भवदीय,
पंचायत सहायक
नाम: ....................`);
    } else if (templateType === "leave") {
      setContent(`सेवा में,
श्रीमान पंचायत सचिव / ग्राम प्रधान महोदय,
ग्राम पंचायत - ....................

विषय: आकस्मिक अवकाश (Casual Leave) हेतु प्रार्थना पत्र।

महोदय,
सविनय निवेदन है कि प्रार्थी को आवश्यक व्यक्तिगत / स्वास्थ्य संबंधी कार्य आ जाने के कारण दिनांक .......... से दिनांक .......... (कुल ..... दिवस) तक ग्राम सचिवालय में उपस्थित रहने में असमर्थ है।

अतः महोदय से विनम्र अनुरोध है कि उक्त तिथियों का आकस्मिक अवकाश स्वीकृत करने की कृपा करें।

दिनांक: ....................
प्रार्थी / पंचायत सहायक
हस्ताक्षर: ....................`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-cyan-900/60 to-blue-900/40 border border-cyan-500/30 rounded-2xl p-6 text-white backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>कार्यालयी हिंदी ड्राफ्टिंग टूल 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              हिंदी ऑफिस एडिटर (Hindi Office Typing & Letter Maker)
            </h1>
            <p className="text-sm text-cyan-100/80 mt-1">
              ग्राम सचिवालय के पत्र, प्रार्थना पत्र, प्रस्ताव एवं नोटिस आसानी से हिंदी में टाइप और प्रिंट करें।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all text-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>लेटर प्रिंट करें</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Templates & Tools Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4 text-white shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-2">
              रेडीमेड फॉर्मेट्स (Templates)
            </h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => applyTemplate("salary")}
                className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-cyan-500/10 hover:border-cyan-500/40 border border-slate-700 text-xs transition-colors cursor-pointer"
              >
                <div className="font-semibold text-white">1. मानदेय भुगतान प्रार्थना पत्र</div>
                <div className="text-[11px] text-slate-400 mt-0.5">लंबित सैलरी जारी करने हेतु</div>
              </button>

              <button
                type="button"
                onClick={() => applyTemplate("leave")}
                className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-cyan-500/10 hover:border-cyan-500/40 border border-slate-700 text-xs transition-colors cursor-pointer"
              >
                <div className="font-semibold text-white">2. आकस्मिक अवकाश प्रार्थना पत्र</div>
                <div className="text-[11px] text-slate-400 mt-0.5">छुट्टी की अर्ज़ी हेतु</div>
              </button>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-2">
            <div className="font-semibold text-slate-200">💡 टाइपिंग टिप्स:</div>
            <div>• आप अपने कीबोर्ड से Google Indic / Mangal / Inscript फॉन्ट में डायरेक्ट टाइप कर सकते हैं।</div>
            <div>• लेटर तैयार होने के बाद सीधे Print बटन दबाकर PDF सेव करें।</div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          {/* Action Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>लेटर ड्राफ्टिंग शीट</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "कॉपी हो गया!" : "टेक्स्ट कॉपी"}</span>
              </button>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            rows={18}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-5 text-sm text-slate-100 font-sans leading-relaxed focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
            placeholder="यहाँ अपना पत्र अथवा सूचना टाइप करें..."
          />
        </div>
      </div>
    </div>
  );
}
