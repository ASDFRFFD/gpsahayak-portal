"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Sparkles, User, Heart, MessageCircle } from "lucide-react";

interface Post {
  id: string;
  author: string;
  district: string;
  text: string;
  time: string;
  likes: number;
}

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: "1", author: "अखिलेश कुमार", district: "सीतापुर", text: "साथियों, क्या आप सभी के यहाँ किसान रजिस्ट्री आईडी कार्ड बनाने का काम शुरू हो गया है? हमारे ब्लॉक में कल से कैंप लग रहा है।", time: "2 घंटे पहले", likes: 14 },
    { id: "2", author: "संगीता यादव", district: "प्रयागराज", text: "eGramSwaraj पर 15वें वित्त का पेमेंट वाउचर बनाते समय DSC signing error आ रहा है। कोई समाधान बताएं?", time: "5 घंटे पहले", likes: 8 },
    { id: "3", author: "मोहित गुप्ता", district: "गोरखपुर", text: "हमारे ब्लॉक में जुलाई माह का मानदेय PFMS पर प्रोसेस हो चुका है। आप लोग भी अपने सचिव महोदय से डोंगल अप्रूव करा लें।", time: "1 दिन पहले", likes: 23 },
  ]);

  const [author, setAuthor] = useState("");
  const [district, setDistrict] = useState("");
  const [text, setText] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;
    const newPost: Post = {
      id: Date.now().toString(),
      author,
      district: district || "उत्तर प्रदेश",
      text,
      time: "अभी-अभी",
      likes: 0,
    };
    setPosts([newPost, ...posts]);
    setAuthor("");
    setText("");
  };

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>पंचायत सहायक कम्युनिटी 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          पंचायत सहायक मंच (Community Forum)
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          अपने सवाल पूछें, तकनीकी समाधान साझा करें और पूरे उत्तर प्रदेश के पंचायत सहायकों से जुड़ें।
        </p>
      </div>

      {/* Post Form */}
      <form onSubmit={handlePost} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-white shadow-xl">
        <h2 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span>नया प्रश्न या विचार लिखें</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="आपका नाम"
            className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white"
            required
          />
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="आपका जनपद (ज़िला)"
            className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white"
          />
        </div>
        <textarea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="अपनी समस्या, अनुभव या सुझाव यहाँ लिखें..."
          className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-xs text-white"
          required
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/20"
        >
          <Send className="w-3.5 h-3.5" />
          <span>पोस्ट प्रकाशित करें</span>
        </button>
      </form>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-3 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{post.author}</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">{post.district}</div>
                </div>
              </div>
              <span className="text-[10px] text-slate-500">{post.time}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {post.text}
            </p>

            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-1.5 hover:text-rose-400 transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>{post.likes} समर्थन</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
