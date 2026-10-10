import { CheckIcon } from "@/components/Icons";
import siteConfig from "@/config/site.config";

const { partnershipFormats, whyPartner } = siteConfig;

export default function CollabSection() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
          Partnership Formats
        </span>

        <div className="mt-4 flex flex-col gap-3">
          {partnershipFormats.map(({ title, description }, i) => (
            <div
              key={title}
              className="animate-fade-in-up glass rounded-2xl p-4 flex gap-3 shadow-[0_10px_24px_-16px_rgba(17,17,17,0.2)]"
            >
              <span className="text-xl font-extrabold text-green/70 tabular-nums leading-none pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up glass-strong rounded-3xl p-5 shadow-[0_16px_36px_-18px_rgba(17,17,17,0.2)]">
        <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
          {whyPartner.eyebrow}
        </span>
        <h2 className="mt-2 text-xl font-bold text-ink tracking-tight">
          {whyPartner.heading}
        </h2>

        <ul className="mt-4 flex flex-col gap-3">
          {whyPartner.points.map(({ title, description }) => (
            <li key={title} className="flex gap-2.5 text-sm leading-relaxed">
              <CheckIcon className="w-5 h-5 flex-shrink-0 text-green" />
              <span className="text-muted">
                <span className="font-semibold text-ink">{title}</span> –{" "}
                {description}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
