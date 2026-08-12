import siteConfig from "@/config/site.config";

const { partners } = siteConfig;

export default function PartnersSection() {
  return (
    <section>
      <span className="text-xs font-bold tracking-[0.14em] text-green uppercase">
        Partners
      </span>

      <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar scroll-fade-right md:grid md:grid-cols-6 md:overflow-visible md:[mask-image:none] md:[-webkit-mask-image:none]">
        {partners.map(({ name, logo }) => (
          <div
            key={name}
            className="flex-shrink-0 md:flex-shrink bg-white rounded-2xl shadow-sm hover:shadow-[0_14px_28px_-14px_rgba(17,17,17,0.25)] hover:-translate-y-0.5 transition-all duration-200 px-5 py-4 flex items-center justify-center min-w-[140px] md:min-w-0"
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
