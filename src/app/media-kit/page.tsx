import ProfileCard from "@/components/media-kit/ProfileCard";
import InsightsSection from "@/components/media-kit/InsightsSection";
import AudienceSection from "@/components/media-kit/AudienceSection";
import PartnersSection from "@/components/media-kit/PartnersSection";
import FeaturedPosts from "@/components/media-kit/FeaturedPosts";
import siteConfig from "@/config/site.config";

const { visibility } = siteConfig;

export default function MediaKitPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 md:gap-8 md:items-start">
        <ProfileCard />

        <div className="min-w-0 flex flex-col gap-8">
          <InsightsSection />
          <AudienceSection />
          {visibility.showPartners && <PartnersSection />}
          <FeaturedPosts />
        </div>
      </div>
    </main>
  );
}
