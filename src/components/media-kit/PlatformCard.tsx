import StatCard from "./StatCard";

export type Stat = {
  label: string;
  value: string;
  tooltip?: string;
};

export default function PlatformCard({
  icon: Icon,
  handle,
  href,
  note,
  stats,
}: {
  icon: React.ComponentType<{ className?: string }>;
  handle: string;
  href: string;
  note?: string;
  stats: Stat[];
}) {
  return (
    <div className="animate-fade-in-up glass-strong relative overflow-hidden rounded-3xl shadow-[0_16px_36px_-18px_rgba(17,17,17,0.2)] hover:shadow-[0_20px_44px_-16px_rgba(17,17,17,0.25)] transition-shadow duration-300 p-5">
      <div className="relative flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-center hover:opacity-70 transition-opacity"
        >
          <Icon className="w-5 h-5 text-ink" />
          <span className="font-bold text-ink">{handle}</span>
        </a>
        {note && <span className="text-sm text-muted">{note}</span>}
      </div>
      <div
        className={`relative grid grid-cols-2 gap-3 ${
          stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
        }`}
      >
        {stats.map(({ label, value, tooltip }, i) => (
          // An odd last stat spans both mobile columns so the grid has no gap
          <div
            key={label}
            className={
              stats.length % 2 === 1 && i === stats.length - 1
                ? "col-span-2 md:col-span-1"
                : undefined
            }
          >
            <StatCard label={label} value={value} tooltip={tooltip} />
          </div>
        ))}
      </div>
    </div>
  );
}
