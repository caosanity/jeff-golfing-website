export default function ProfilePhoto({
  src,
  size = 96,
  variant = "circle",
  className = "",
}: {
  src?: string;
  // For "circle": width and height in px. For "portrait": width in px, height follows the photo's aspect ratio.
  size?: number;
  variant?: "circle" | "portrait";
  className?: string;
}) {
  const isPortrait = variant === "portrait";
  const shapeClass = isPortrait ? "rounded-3xl aspect-[361/408]" : "rounded-full";
  const style = isPortrait ? { width: size } : { width: size, height: size };
  const photoClass = `${shapeClass} object-cover shadow-[0_8px_30px_-6px_rgba(47,158,90,0.35)] ring-4 ring-white/80 ${className}`;

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="Jeff Golfing profile photo" className={photoClass} style={style} />
    );
  }

  return (
    <div
      className={`${photoClass} bg-gradient-to-br from-green to-mint flex items-center justify-center text-white font-bold`}
      style={{ ...style, fontSize: size * (isPortrait ? 0.16 : 0.36) }}
      aria-label="Jeff Golfing profile photo"
    >
      JG
    </div>
  );
}
