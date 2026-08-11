import GenderDonut from "./GenderDonut";
import AgeBars from "./AgeBars";
import siteConfig from "@/config/site.config";

const { audience } = siteConfig;

export default function AudienceSection() {
  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Audience
      </span>

      <div className="mt-4 bg-cream-green rounded-3xl p-5 flex flex-col md:flex-row gap-5">
        <div className="bg-white rounded-2xl p-5 flex-1 flex flex-col items-center">
          <h3 className="self-start text-sm font-bold text-ink mb-2">
            Gender
          </h3>
          <GenderDonut
            menPct={audience.malePercentage}
            womenPct={audience.femalePercentage}
          />
        </div>

        <div className="bg-white rounded-2xl p-5 flex-1">
          <h3 className="text-sm font-bold text-ink mb-4">Age</h3>
          <AgeBars />
        </div>
      </div>
    </section>
  );
}
