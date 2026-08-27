"use client";

import React, { useEffect, useState } from "react";
import { Download, Smartphone, X, Sparkles, Check } from "lucide-react";

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            console.log("GPSahayak PWA Service Worker Registered:", reg.scope);
          })
          .catch((err) => {
            console.log("Service Worker Registration Failed:", err);
          });
      });
    }

    // 2. Check if already installed / running in standalone mode
    const isApp = window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone;
    if (isApp) {
      setIsStandalone(true);
      return;
    }

    // 3. Detect iOS device
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 4. Capture native browser install prompt for Android/Chrome/Edge
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSPrompt(true);
      return;
    }

    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    }
  };

  // If already in installed standalone app, don't show prompt
  if (isStandalone) return null;

  return (
    <>
      {/* Floating Install Prompt Banner for Mobile / Desktop */}
      {showInstallBanner && (
        <aside 
          aria-label="App Installation Prompt" 
          className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-slate-900/95 border border-emerald-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-white animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center font-extrabold text-slate-950 text-base shrink-0 shadow-lg shadow-emerald-500/30">
                GP
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-white">GPS Sahayak App</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                    FREE
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  फास्ट अनुभव व ऑफलाइन टूल्स के लिए ऐप इंस्टॉल करें।
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowInstallBanner(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3.5 flex items-center gap-2">
            <button
              type="button"
              onClick={handleInstallClick}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>ऐप इंस्टॉल करें (Install App)</span>
            </button>
            <button
              type="button"
              onClick={() => setShowInstallBanner(false)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors cursor-pointer"
            >
              बाद में
            </button>
          </div>
        </aside>
      )}

      {/* iOS Safari Instructions Modal */}
      {showIOSPrompt && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-sm w-full space-y-4 text-white animate-in slide-in-from-bottom-8">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center gap-2 text-emerald-400">
                <Smartphone className="w-5 h-5" />
                <span>iPhone पर इंस्टॉल करें</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowIOSPrompt(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Safari ब्राउज़र में GPS Sahayak को असली ऐप की तरह होम स्क्रीन पर जोड़ने के लिए:
            </p>

            <ol className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2.5 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <span>सफारी के नीचे <strong>Share (शेयर)</strong> बटन पर टैप करें।</span>
              </li>
              <li className="flex items-center gap-2.5 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <span>नीचे स्क्रॉल करके <strong>'Add to Home Screen'</strong> चुनें।</span>
              </li>
              <li className="flex items-center gap-2.5 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0">3</span>
                <span>ऊपर दाएँ कोने में <strong>'Add'</strong> दबाएं!</span>
              </li>
            </ol>

            <button
              type="button"
              onClick={() => setShowIOSPrompt(false)}
              className="w-full bg-emerald-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs"
            >
              समझ गया (Got it)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
