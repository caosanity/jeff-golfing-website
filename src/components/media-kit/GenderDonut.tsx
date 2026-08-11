function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// Describes a clock-angle arc (0 = top, 90 = right, 180 = bottom, 270 = left)
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default function GenderDonut({
  menPct,
  womenPct,
}: {
  menPct: number;
  womenPct: number;
}) {
  const cx = 100;
  const cy = 100;
  const r = 78;
  const strokeWidth = 22;

  // Upper semicircle sweeps from 270 (left) through 360/0 (top) to 90 (right)
  const menStart = 270;
  const menEnd = 270 + (menPct / 100) * 180;
  const womenStart = menEnd;
  const womenEnd = 450;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 110" className="w-full max-w-[220px]">
        {/* Drawn first so the men segment's rounded cap sits on top at the split */}
        <path
          d={describeArc(cx, cy, r, womenStart, womenEnd)}
          fill="none"
          stroke="#BFE3C7"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={describeArc(cx, cy, r, menStart, menEnd)}
          fill="none"
          stroke="#2F9E5A"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>

      <div className="flex gap-6 mt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green" />
          <span className="text-sm text-muted">
            Men <span className="font-bold text-ink">{menPct}%</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sage" />
          <span className="text-sm text-muted">
            Women <span className="font-bold text-ink">{womenPct}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
