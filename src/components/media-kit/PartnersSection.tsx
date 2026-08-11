import siteConfig from "@/config/site.config";

const { partners } = siteConfig;

export default function PartnersSection() {
  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Partners
      </span>

      <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar md:grid md:grid-cols-6 md:overflow-visible">
        {partners.map(({ name, logo }) => (
          <div
            key={name}
            className="flex-shrink-0 md:flex-shrink bg-white rounded-2xl shadow-sm px-5 py-4 flex items-center justify-center min-w-[140px] md:min-w-0"
          >
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo}
                alt={name}
                className="max-h-8 w-auto object-contain grayscale opacity-80"
              />
            ) : (
              <span className="text-sm font-bold text-muted grayscale">
                {name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
