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
        className="fixed top-4 left-4 z-50 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        {open ? (
          <CloseIcon className="w-5 h-5 text-ink" />
        ) : (
          <MenuIcon className="w-5 h-5 text-ink" />
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-64 max-w-[80%] h-full bg-white shadow-xl p-5 pt-20 flex flex-col">
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
      )}
    </>
  );
}
