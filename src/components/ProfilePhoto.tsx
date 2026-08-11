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

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="Jeff Golfing profile photo"
        className={`${shapeClass} object-cover shadow-md ${className}`}
        style={style}
      />
    );
  }

  return (
    <div
      className={`${shapeClass} bg-gradient-to-br from-green to-mint flex items-center justify-center text-white font-bold shadow-md ${className}`}
      style={{ ...style, fontSize: size * (isPortrait ? 0.16 : 0.36) }}
      aria-label="Jeff Golfing profile photo"
    >
      JG
    </div>
  );
}
