import GenderDonut from "./GenderDonut";
import DonutChart from "./DonutChart";
import siteConfig from "@/config/site.config";

const { audience } = siteConfig;

// Categorical palette (distinct hues, fixed order) — shared across all three
// donut charts for a consistent look.
const CHART_COLORS = ["#18924d", "#257ecc", "#e2754f", "#b75186", "#635bb0"];

const cardClass =
  "bg-white rounded-2xl p-5 flex flex-col items-center shadow-[0_10px_26px_-16px_rgba(17,17,17,0.18)] hover:shadow-[0_14px_32px_-14px_rgba(17,17,17,0.22)] hover:-translate-y-0.5 transition-all duration-200";

export default function AudienceSection() {
  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Audience
      </span>

      <div className="animate-fade-in-up mt-4 bg-cream-green rounded-3xl p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className={cardClass}>
          <h3 className="self-start text-sm font-bold text-ink mb-2">
            Gender
          </h3>
          <GenderDonut
            menPct={audience.malePercentage}
            womenPct={audience.femalePercentage}
          />
        </div>

        <div className={cardClass}>
          <h3 className="self-start text-sm font-bold text-ink mb-2">Age</h3>
          <DonutChart data={audience.ageGroups} colors={CHART_COLORS} />
        </div>

        <div className={cardClass}>
          <h3 className="self-start text-sm font-bold text-ink mb-2">
            Viewer Location
          </h3>
          <DonutChart data={audience.viewerLocation} colors={CHART_COLORS} />
        </div>

        <div className={cardClass}>
          <h3 className="self-start text-sm font-bold text-ink mb-2">
            Follower Location
          </h3>
          <DonutChart data={audience.followerLocation} colors={CHART_COLORS} />
        </div>
      </div>
    </section>
  );
}
