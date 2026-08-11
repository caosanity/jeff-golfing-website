import { InfoIcon } from "@/components/Icons";

export default function StatCard({
  label,
  value,
  tooltip,
}: {
  label: string;
  value: string;
  tooltip?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-4">
      <div className="flex items-center gap-1">
        <span className="text-xs font-medium text-muted uppercase tracking-wide truncate">
          {label}
        </span>
        {tooltip && (
          <span title={tooltip} className="flex-shrink-0 text-muted/60">
            <InfoIcon className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
      <div className="mt-1.5 text-2xl md:text-3xl font-bold text-ink tabular-nums truncate">
        {value}
      </div>
    </div>
  );
}
