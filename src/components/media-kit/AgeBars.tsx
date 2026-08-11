import siteConfig from "@/config/site.config";

const { audience } = siteConfig;

export default function AgeBars() {
  return (
    <div className="flex flex-col gap-3">
      {audience.ageGroups.map(({ label, percentage }) => (
        <div key={label} className="flex items-center gap-3">
          <span className="w-12 flex-shrink-0 text-sm text-muted">
            {label}
          </span>
          <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-green"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="w-9 flex-shrink-0 text-right text-sm font-bold text-ink tabular-nums">
            {percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}
