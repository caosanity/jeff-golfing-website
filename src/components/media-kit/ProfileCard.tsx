import ProfilePhoto from "@/components/ProfilePhoto";
import siteConfig from "@/config/site.config";

const { profile } = siteConfig;

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col items-center text-center md:sticky md:top-6">
      <ProfilePhoto src={profile.photo} size={180} variant="portrait" />

      <span className="mt-5 text-xs font-bold tracking-[0.14em] text-green uppercase">
        Media Kit
      </span>
      <h1 className="mt-2 text-2xl font-bold text-ink">{profile.name}</h1>
      <p className="mt-1 text-sm text-muted">
        {profile.location} · {profile.niche}
      </p>
      <p className="mt-4 text-sm text-muted leading-relaxed max-w-[280px]">
        {profile.longDescription}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-6 w-full sm:w-auto md:w-full bg-green hover:bg-green-dark transition-colors text-white font-bold text-sm rounded-full px-6 py-3.5 text-center"
      >
        Contact for collabs
      </a>
    </div>
  );
}
