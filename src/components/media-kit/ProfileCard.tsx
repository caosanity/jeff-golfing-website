import ProfilePhoto from "@/components/ProfilePhoto";
import siteConfig from "@/config/site.config";

const { profile } = siteConfig;

export default function ProfileCard() {
  return (
    <div className="animate-fade-in-up glass-strong relative overflow-hidden rounded-3xl shadow-[0_20px_45px_-20px_rgba(17,17,17,0.2)] p-6 flex flex-col items-center text-center md:sticky md:top-6">
      <div className="relative">
        <ProfilePhoto src={profile.photo} size={180} variant="portrait" />
      </div>

      <span className="relative mt-5 text-xs font-bold tracking-[0.14em] text-green uppercase">
        Media Kit
      </span>
      <h1 className="relative mt-2 text-2xl font-bold text-ink">
        {profile.name}
      </h1>
      <p className="relative mt-1 text-sm text-muted">
        {profile.location} · {profile.niche}
      </p>
      <p className="relative mt-4 text-sm text-muted leading-relaxed max-w-[280px]">
        {profile.longDescription}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="relative mt-6 w-full sm:w-auto md:w-full bg-gradient-to-r from-green to-green-dark bg-[length:150%_100%] bg-left hover:bg-right hover:shadow-[0_12px_28px_-8px_rgba(47,158,90,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-white font-bold text-sm rounded-full px-6 py-3.5 text-center"
      >
        Contact for collabs
      </a>
    </div>
  );
}
