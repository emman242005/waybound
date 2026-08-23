export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-16 pt-40 sm:pt-48">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(18,35,82,0.85) 0%, rgba(6,13,31,1) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-lg text-white/55">{subtitle}</p>
        )}
      </div>
    </section>
  );
}