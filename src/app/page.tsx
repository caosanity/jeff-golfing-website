import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";
import {
  InstagramIcon,
  TikTokIcon,
  SparkleIcon,
  MailIcon,
} from "@/components/Icons";
import siteConfig from "@/config/site.config";

const { profile } = siteConfig;

const links = [
  {
    icon: TikTokIcon,
    title: "TikTok",
    subtitle: profile.tiktokHandle,
    href: profile.tiktokUrl,
    external: true,
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    subtitle: profile.instagramHandle,
    href: profile.instagramUrl,
    external: true,
  },
  {
    icon: SparkleIcon,
    title: "Media kit",
    subtitle: "Stats, audience, and featured work",
    href: "/media-kit",
    external: false,
  },
  {
    icon: MailIcon,
    title: "Collabs",
    subtitle: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        <ProfilePhoto src={profile.photo} size={200} variant="portrait" />

        <h1 className="mt-4 text-2xl font-bold text-ink text-center">
          {profile.name}
        </h1>
        <p className="mt-2 text-base text-muted text-center leading-relaxed">
          {profile.description}
        </p>

        <div className="mt-8 w-full flex flex-col gap-3">
          {links.map(({ icon: Icon, title, subtitle, href, external }) => {
            const content = (
              <div className="flex items-center gap-4 w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow px-4 py-3 min-h-[64px]">
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-sage/60 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-green-dark" />
                </span>
                <span className="flex flex-col text-left min-w-0">
                  <span className="font-bold text-ink text-base truncate">
                    {title}
                  </span>
                  <span className="text-sm text-muted truncate">
                    {subtitle}
                  </span>
                </span>
              </div>
            );

            if (external) {
              return (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  {content}
                </a>
              );
            }

            if (href.startsWith("mailto:")) {
              return (
                <a key={title} href={href} className="block w-full">
                  {content}
                </a>
              );
            }

            return (
              <Link key={title} href={href} className="block w-full">
                {content}
              </Link>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-muted/70 text-center">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </main>
  );
}
