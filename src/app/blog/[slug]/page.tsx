import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOGS_DATA, BlogPost } from "@/lib/blogs-data";
import { Clock, Calendar, ArrowLeft, User, Share2, Tag, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found | GPSAHAYAK" };

  return {
    title: `${post.title} | GPSAHAYAK`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOGS_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Back Button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>सभी ब्लॉग्स पर वापस जाएँ</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-md border border-emerald-500/20">
            {post.category}
          </span>
          <span className="text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {post.date}
          </span>
          <span className="text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {post.title}
        </h1>

        {post.subtitle && (
          <p className="text-base sm:text-lg text-emerald-300/90 font-medium">
            {post.subtitle}
          </p>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
              <User className="w-4 h-4" />
            </div>
            <span>{post.author}</span>
          </div>
        </div>
      </header>

      {/* Article Body Content */}
      <div 
        className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:pt-4 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>p]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags Section */}
      <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 font-bold flex items-center gap-1 mr-1">
          <Tag className="w-3.5 h-3.5 text-emerald-400" />
          टैग्स:
        </span>
        {post.tags.map((t, idx) => (
          <span key={idx} className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-md">
            #{t}
          </span>
        ))}
      </div>

      {/* Related Posts */}
      <div className="pt-10 border-t border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white">संबंधित लेख व गाइड (Related Guides)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.slug}
              href={`/blog/${rel.slug}`}
              className="p-4 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/30 rounded-xl transition-all group block"
            >
              <div className="text-xs text-emerald-400 font-semibold mb-1">{rel.category}</div>
              <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                {rel.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
