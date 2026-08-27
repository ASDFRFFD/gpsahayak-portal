import React from "react";
import Link from "next/link";
import { Heart, Shield, FileText, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-base">
                GP
              </div>
              <span className="font-bold text-lg text-white">GPSAHAYAK.IN</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              उत्तर प्रदेश के सभी ग्राम पंचायत सहायकों (DEO) के लिए एक एकीकृत डिजिटल मंच। यहाँ आपको आवश्यक टूल्स, प्रपत्र, शासनादेश और तकनीकी सहायता उपलब्ध कराई जाती है।
            </p>
            <div className="text-xs text-slate-500">
              नोट: यह एक स्वतंत्र सहायता पोर्टल है। यह किसी भी सरकारी विभाग का आधिकारिक पोर्टल नहीं है।
            </div>
          </div>

          {/* Col 2: Quick Tools */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-emerald-400">
              डिजिटल टूल्स
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tools/farmer-id-card-generator" className="hover:text-emerald-400 transition-colors">
                  फार्मर आईडी कार्ड जनरेटर
                </Link>
              </li>
              <li>
                <Link href="/tools/hindi-office-editor" className="hover:text-emerald-400 transition-colors">
                  हिंदी ऑफिस टाइपिंग एडिटर
                </Link>
              </li>
              <li>
                <Link href="/tools/salary-calculator" className="hover:text-emerald-400 transition-colors">
                  पंचायत सहायक मानदेय कैलकुलेटर
                </Link>
              </li>
              <li>
                <Link href="/tools/csc-calculator" className="hover:text-emerald-400 transition-colors">
                  CSC ई-डिस्ट्रिक्ट आय कैलकुलेटर
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Links & Govt Portals */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-emerald-400">
              सरकारी पोर्टल्स
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://egramswaraj.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <span>eGramSwaraj Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://edistrict.up.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <span>eDistrict UP Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://crsorgi.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <span>CRS Birth & Death Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://pfms.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <span>PFMS Payment Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-emerald-400">
              नीति एवं सुरक्षा
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  हमारे बारे में (About Us)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  संपर्क सूत्र (Contact Us)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  गोपनीयता नीति (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
                  अस्वीकरण (Disclaimer)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 GPSAHAYAK.IN — समस्त अधिकार सुरक्षित।
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>पंचायत सहायकों की सुविधा हेतु समर्पित</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
