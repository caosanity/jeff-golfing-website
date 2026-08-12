function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// Full-circle arc, clock-angle convention (0 = top, 90 = right, 180 = bottom, 270 = left)
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default function DonutChart({
  data,
  colors,
}: {
  data: { label: string; percentage: number }[];
  colors: string[];
}) {
  const cx = 100;
  const cy = 100;
  const r = 80;
  const strokeWidth = 28;
  const gapDeg = 3; // ~2px surface gap between segments at this radius

  let cumulativePct = 0;
  const segments = data.map((d, i) => {
    const rawStart = cumulativePct * 3.6;
    cumulativePct += d.percentage;
    const rawEnd = cumulativePct * 3.6;
    const mid = (rawStart + rawEnd) / 2;
    return {
      ...d,
      color: colors[i % colors.length],
      startAngle: Math.min(mid, rawStart + gapDeg / 2),
      endAngle: Math.max(mid, rawEnd - gapDeg / 2),
    };
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 200 200" className="w-full max-w-[170px]">
        {segments.map((s) => (
          <path
            key={s.label}
            d={describeArc(cx, cy, r, s.startAngle, s.endAngle)}
            fill="none"
            stroke={s.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="w-full flex flex-col gap-2">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-sm text-muted flex-1 truncate">
              {s.label}
            </span>
            <span className="text-sm font-bold text-ink tabular-nums flex-shrink-0">
              {s.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
