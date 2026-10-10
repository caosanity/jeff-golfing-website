import PlatformCard from "./PlatformCard";
import { InstagramIcon, TikTokIcon } from "@/components/Icons";
import siteConfig from "@/config/site.config";

const { profile, instagram, tiktok, visibility } = siteConfig;

export default function InsightsSection() {
  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Insights &amp; Data
      </span>

      <div className="mt-4 flex flex-col gap-4">
        <PlatformCard
          icon={TikTokIcon}
          handle={profile.tiktokHandle}
          href={profile.tiktokUrl}
          note={tiktok.note}
          stats={[
            { label: "Followers", value: tiktok.followers },
            { label: "Total views", value: tiktok.totalViews },
            { label: "Total likes", value: tiktok.totalLikes },
            { label: "Total shares", value: tiktok.totalShares },
          ]}
        />
        {visibility.showInstagram && (
          <PlatformCard
            icon={InstagramIcon}
            handle={profile.instagramHandle}
            href={profile.instagramUrl}
            note={instagram.note}
            stats={[
              { label: "Followers", value: instagram.followers },
              { label: "Total views", value: instagram.totalViews },
              { label: "Interactions", value: instagram.interactions },
            ]}
          />
        )}
      </div>
    </section>
  );
}
