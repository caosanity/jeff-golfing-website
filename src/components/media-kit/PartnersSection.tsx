import siteConfig from "@/config/site.config";

const { partners } = siteConfig;

export default function PartnersSection() {
  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Partners
      </span>

      <div className="animate-fade-in-up bg-white rounded-3xl shadow-[0_16px_36px_-18px_rgba(17,17,17,0.16)] mt-4 p-6 flex flex-wrap items-center justify-start gap-10">
        {partners.map(({ name, logo, url }) => {
          const content = logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={name} className="h-24 w-auto object-contain" />
          ) : (
            <span className="text-lg font-bold text-ink whitespace-nowrap">
              {name}
            </span>
          );

          const className =
            "flex items-center justify-center transition-transform duration-200 hover:scale-105";

          if (url) {
            return (
              <a
                key={name}
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
            <div key={name} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
