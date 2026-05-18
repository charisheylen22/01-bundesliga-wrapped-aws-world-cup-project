import Link from "next/link";
import { FeatureCard } from "../components/FeatureCard";
import { features } from "../lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-700">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-accent/80">Bundesliga Wrapped</p>
          <h1 className="text-5xl font-bold sm:text-6xl">Revivez votre saison comme un vrai Spotify Wrapped.</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-200">
            Une expérience récapitulative personnalisée qui transforme les données Bundesliga en histoire
            émotionnelle, partageable et mobile-first.
          </p>
          <Link
            href="/wrapped"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 transition hover:bg-slate-100"
          >
            Explorer mon Wrapped
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>
    </main>
  );
}
