type Feature = {
  title: string;
  description: string;
  accent: string;
};

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10">
      <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
        {feature.accent}
      </span>
      <h2 className="mt-5 text-2xl font-semibold text-white">{feature.title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
    </article>
  );
}
