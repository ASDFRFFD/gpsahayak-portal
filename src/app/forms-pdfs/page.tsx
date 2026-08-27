import { Metadata } from "next";
import { FileDown, FileText, Download, Sparkles, FolderDown } from "lucide-react";

export const metadata: Metadata = {
  title: "पंचायत सहायक आवश्यक प्रपत्र व PDF डाउनलोड | Forms & PDFs | GPSAHAYAK",
  description: "ग्राम पंचायत सचिवालय में उपयोग होने वाले सभी महत्वपूर्ण सरकारी फॉर्म्स, घोषणा पत्र, शपथ पत्र और पीडीएफ प्रपत्र डाउनलोड करें।",
};

const FORMS = [
  { name: "आय प्रमाण पत्र आवेदन प्रपत्र (Offline Form)", cat: "eDistrict", size: "220 KB", ext: "PDF" },
  { name: "जाति प्रमाण पत्र आवेदन प्रपत्र", cat: "eDistrict", size: "210 KB", ext: "PDF" },
  { name: "निवास प्रमाण पत्र आवेदन प्रपत्र", cat: "eDistrict", size: "195 KB", ext: "PDF" },
  { name: "परिवार रजिस्टर नकल आवेदन प्रारूप", cat: "ग्राम पंचायत", size: "180 KB", ext: "PDF" },
  { name: "जन्म प्रमाण पत्र आवेदन फॉर्म (1 वर्ष से अधिक विलंब)", cat: "CRS Portal", size: "245 KB", ext: "PDF" },
  { name: "मृत्यु प्रमाण पत्र आवेदन फॉर्म", cat: "CRS Portal", size: "230 KB", ext: "PDF" },
  { name: "वृद्धावस्था / विधवा पेंशन प्रपत्र", cat: "समाज कल्याण", size: "310 KB", ext: "PDF" },
  { name: "स्वप्रमाणित घोषणा पत्र (Generic Blank Format)", cat: "शपथ पत्र", size: "150 KB", ext: "PDF" },
];

export default function FormsPdfsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>फॉर्म्स एवं पीडीएफ रिपोजिटरी 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          आवश्यक प्रपत्र एवं फॉर्म्स (Forms & PDFs)
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          ग्राम सचिवालय में नियमित रूप से काम आने वाले सभी प्रमाण पत्र और आवेदन फॉर्म्स का संग्रह।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {FORMS.map((f, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex items-center justify-between gap-4 hover:border-emerald-500/40 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {f.name}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                  <span className="text-emerald-400 font-semibold">{f.cat}</span>
                  <span>•</span>
                  <span>{f.size}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert("प्रपत्र डाउनलोड हो रहा है...")}
              className="bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 p-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
              title="डाउनलोड करें"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
