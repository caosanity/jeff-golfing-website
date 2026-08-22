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
    <main className="relative min-h-screen flex justify-center px-4 py-12 sm:py-16">

      <div className="relative w-full max-w-[400px] flex flex-col items-center">
        <div className="animate-fade-in-up flex flex-col items-center">
          <ProfilePhoto src={profile.photo} size={200} variant="portrait" />

          <h1 className="mt-5 text-2xl font-bold text-ink text-center">
            {profile.name}
          </h1>
          <p className="mt-2 text-base text-muted text-center leading-relaxed">
            {profile.description}
          </p>
        </div>

        <div className="mt-8 w-full flex flex-col gap-3">
          {links.map(({ icon: Icon, title, subtitle, href, external }, i) => {
            const content = (
              <div className="group glass flex items-center gap-4 w-full rounded-2xl shadow-[0_8px_24px_-12px_rgba(17,17,17,0.18)] hover:shadow-[0_16px_36px_-12px_rgba(47,158,90,0.45)] hover:border-green/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 px-4 py-3 min-h-[64px]">
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-green to-mint shadow-[0_4px_14px_-4px_rgba(47,158,90,0.6)] flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-5 h-5 text-white" />
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

            const style = {
              animationDelay: `${120 + i * 70}ms`,
            };

            if (external) {
              return (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full animate-fade-in-up"
                  style={style}
                >
                  {content}
                </a>
              );
            }

            if (href.startsWith("mailto:")) {
              return (
                <a
                  key={title}
                  href={href}
                  className="block w-full animate-fade-in-up"
                  style={style}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={title}
                href={href}
                className="block w-full animate-fade-in-up"
                style={style}
              >
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
