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
  stats,
  blobClassName,
}: {
  icon: React.ComponentType<{ className?: string }>;
  handle: string;
  href: string;
  stats: Stat[];
  blobClassName: string;
}) {
  return (
    <div className="animate-fade-in-up relative overflow-hidden bg-white rounded-3xl shadow-[0_16px_36px_-18px_rgba(17,17,17,0.16)] hover:shadow-[0_20px_44px_-16px_rgba(17,17,17,0.2)] transition-shadow duration-300 p-5">
      <div
        className={`pointer-events-none absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-60 ${blobClassName}`}
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
      >
        <Icon className="w-5 h-5 text-ink" />
        <span className="font-bold text-ink">{handle}</span>
      </a>
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map(({ label, value, tooltip }) => (
          <StatCard key={label} label={label} value={value} tooltip={tooltip} />
        ))}
      </div>
    </div>
  );
}
