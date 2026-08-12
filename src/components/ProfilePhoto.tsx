export default function ProfilePhoto({
  src,
  size = 96,
  variant = "circle",
  glow = false,
  className = "",
}: {
  src?: string;
  // For "circle": width and height in px. For "portrait": width in px, height follows the photo's aspect ratio.
  size?: number;
  variant?: "circle" | "portrait";
  // Soft blurred color glow behind the photo — use for hero-sized photos only.
  glow?: boolean;
  className?: string;
}) {
  const isPortrait = variant === "portrait";
  const shapeClass = isPortrait ? "rounded-3xl aspect-[361/408]" : "rounded-full";
  const style = isPortrait ? { width: size } : { width: size, height: size };
  const photoClass = `${shapeClass} object-cover shadow-[0_8px_30px_-6px_rgba(47,158,90,0.35)] ring-4 ring-white/80 ${className}`;

  const photo = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Jeff Golfing profile photo" className={photoClass} style={style} />
  ) : (
    <div
      className={`${photoClass} bg-gradient-to-br from-green to-mint flex items-center justify-center text-white font-bold`}
      style={{ ...style, fontSize: size * (isPortrait ? 0.16 : 0.36) }}
      aria-label="Jeff Golfing profile photo"
    >
      JG
    </div>
  );

  if (!glow) return photo;

  return (
    <div className="relative inline-flex">
      <div
        className="blob bg-gradient-to-br from-green/50 to-mint/50"
        style={{
          width: size * 1.15,
          height: isPortrait ? size * (408 / 361) * 1.15 : size * 1.15,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="relative">{photo}</div>
    </div>
  );
}
