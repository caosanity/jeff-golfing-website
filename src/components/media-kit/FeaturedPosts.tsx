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

      <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {FILTERS.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                isActive
                  ? "bg-green text-white border-green"
                  : "bg-transparent text-muted border-gray-300"
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
          const tileClassName = `relative aspect-[3/4] rounded-2xl overflow-hidden p-3 flex flex-col justify-between ${
            post.image
              ? "bg-ink"
              : `bg-gradient-to-br ${FALLBACK_GRADIENT[post.platform]}`
          }`;

          const content = (
            <>
              {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {post.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
              )}

              <div className="relative flex items-start justify-between">
                <span className="bg-black/70 text-white text-[10px] font-bold uppercase tracking-wide rounded-full px-2.5 py-1">
                  {post.platform}
                </span>
                <span className="bg-white/90 text-green-dark text-[10px] font-bold uppercase tracking-wide rounded-full px-2.5 py-1">
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
                className={`${tileClassName} hover:opacity-90 transition-opacity`}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={key} className={tileClassName}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
