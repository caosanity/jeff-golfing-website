"use client";

import { useState } from "react";
import siteConfig from "@/config/site.config";
import type { PostCategory } from "@/config/site.config";

const { featuredPosts, visibility } = siteConfig;

const ALL_FILTERS: (PostCategory | "All")[] = ["All", "Products", "Play", "Places"];
const HIDDEN_CATEGORIES: PostCategory[] = [
  ...(visibility.showPlayPosts ? [] : (["Play"] as PostCategory[])),
  ...(visibility.showPlacesPosts ? [] : (["Places"] as PostCategory[])),
];

const FILTERS = ALL_FILTERS.filter(
  (f) => f === "All" || !HIDDEN_CATEGORIES.includes(f as PostCategory)
);

const visiblePosts = featuredPosts.filter(
  (p) => !HIDDEN_CATEGORIES.includes(p.category)
);

// Fallback background used when a post has no "image" set in the config
const FALLBACK_GRADIENT: Record<string, string> = {
  Instagram: "from-green/80 to-sage",
  TikTok: "from-mint/80 to-green/60",
};

export default function FeaturedPosts() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const posts =
    active === "All"
      ? visiblePosts
      : visiblePosts.filter((p) => p.category === active);

  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Featured Posts
      </span>

      <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar scroll-fade-right pb-1">
        {FILTERS.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-200 ${
                isActive
                  ? "bg-green text-white border-green shadow-[0_8px_18px_-8px_rgba(47,158,90,0.6)]"
                  : "bg-transparent text-muted border-gray-300 hover:border-green/50 hover:text-green-dark"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {posts.map((post, index) => {
          const key = `${post.platform}-${post.title}-${index}`;
          const tileClassName = `group relative aspect-[3/4] rounded-2xl overflow-hidden p-3 flex flex-col justify-between shadow-[0_10px_24px_-14px_rgba(17,17,17,0.35)] hover:shadow-[0_16px_32px_-12px_rgba(17,17,17,0.4)] hover:-translate-y-1 transition-all duration-300 animate-fade-in-up ${
            post.image
              ? "bg-ink"
              : `bg-gradient-to-br ${FALLBACK_GRADIENT[post.platform]}`
          }`;
          const style = { animationDelay: `${index * 60}ms` };

          const content = (
            <>
              {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              )}
              {post.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
              )}

              <div className="relative flex items-start justify-between">
                <span className="bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide rounded-full px-2.5 py-1">
                  {post.platform}
                </span>
                <span className="bg-white/90 backdrop-blur-sm text-green-dark text-[10px] font-bold uppercase tracking-wide rounded-full px-2.5 py-1">
                  {post.category}
                </span>
              </div>
              <p className="relative text-white font-extrabold text-lg leading-tight drop-shadow-md">
                {post.title}
              </p>
            </>
          );

          if (post.videoUrl) {
            return (
              <a
                key={key}
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={tileClassName}
                style={style}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={key} className={tileClassName} style={style}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
