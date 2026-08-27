import { Metadata } from "next";
import Link from "next/link";
import { BLOGS_DATA } from "@/lib/blogs-data";
import { BookOpen, Clock, Calendar, ChevronRight, Sparkles, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "पंचायत सहायक ब्लॉग, शासनादेश एवं मार्गदर्शिका 2026 | GPSAHAYAK",
  description: "उत्तर प्रदेश पंचायत सहायकों के लिए नवीनतम शासनादेश, मानदेय अपडेट, e-GramSwaraj, जनगणना 2026 और तकनीकी मार्गदर्शिका।",
};

export default function BlogListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Blog Hero Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ज्ञान एवं मार्गदर्शिका केंद्र 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          पंचायत सहायक ब्लॉग एवं नवीनतम अपडेट्स
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          ग्राम सचिवालय संचालन, मानदेय नियम, सरकारी पोर्टल्स गाइड और महत्वपूर्ण शासनादेशों का संपूर्ण संग्रह।
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {BLOGS_DATA.map((post) => (
          <article
            key={post.slug}
            className="group bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs">
                <span className="bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {post.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-[10px] text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>पूरा पढ़ें</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
