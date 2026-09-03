import siteConfig from "@/config/site.config";

const { partners } = siteConfig;

// Duplicated so the marquee loop is seamless — animate-marquee scrolls
// exactly one copy's width before looping back to an identical frame.
const track = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="min-w-0">
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Partners
      </span>

      <div className="animate-fade-in-up group glass-strong rounded-3xl shadow-[0_16px_36px_-18px_rgba(17,17,17,0.2)] mt-4 py-6 w-full min-w-0">
        <div className="relative w-full min-w-0 overflow-hidden scroll-fade-x">
          <div className="flex items-center gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {track.map(({ name, logo, url, logoHeight }, i) => {
              const content = logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo}
                  alt={name}
                  className="w-auto object-contain"
                  style={{ height: logoHeight ?? 96 }}
                />
              ) : (
                <span className="text-lg font-bold text-ink whitespace-nowrap">
                  {name}
                </span>
              );

              const className =
                "flex-shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-105";

              if (url) {
                return (
                  <a
                    key={`${name}-${i}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={`${name}-${i}`} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
