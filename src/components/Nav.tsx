"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfilePhoto from "@/components/ProfilePhoto";
import { HomeIcon, SparkleIcon, MenuIcon, CloseIcon } from "@/components/Icons";
import siteConfig from "@/config/site.config";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/media-kit", label: "Media Kit", icon: SparkleIcon },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed top-4 left-4 z-50 w-11 h-11 rounded-full bg-white shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center transition-all duration-200"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <span className="relative w-5 h-5">
          <MenuIcon
            className={`absolute inset-0 w-5 h-5 text-ink transition-all duration-200 ${
              open ? "opacity-0 rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <CloseIcon
            className={`absolute inset-0 w-5 h-5 text-ink transition-all duration-200 ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-75"
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 flex transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`relative w-64 max-w-[80%] h-full bg-white shadow-xl p-5 pt-20 flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <ProfilePhoto src={siteConfig.profile.photo} size={32} />
            <span className="font-bold text-sm text-ink">
              {siteConfig.profile.name}
            </span>
          </Link>

          <nav className="mt-8 flex flex-col gap-1">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-sage/60 text-green-dark"
                      : "text-muted hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
