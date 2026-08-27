import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="text-6xl sm:text-8xl font-black text-emerald-500">404</div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white">पृष्ठ नहीं मिला (Page Not Found)</h1>
      <p className="text-slate-400 text-sm sm:text-base max-w-md">
        क्षमा करें, आप जिस पृष्ठ को खोज रहे हैं वह मौजूद नहीं है अथवा स्थानांतरित कर दिया गया है।
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
        >
          <Home className="w-4 h-4" />
          <span>मुख्य पृष्ठ (Home) पर वापस जाएँ</span>
        </Link>
      </div>
    </div>
  );
}
