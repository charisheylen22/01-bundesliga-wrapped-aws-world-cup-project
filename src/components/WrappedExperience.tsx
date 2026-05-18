"use client";

import { useEffect, useState } from "react";
import { StatCard } from "./StatCard";
import type { WrappedData } from "../lib/wrapped-data";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold text-white">{children}</h2>;
}

export function WrappedExperience() {
  const [wrapped, setWrapped] = useState<WrappedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadWrapped() {
      try {
        const response = await fetch("/api/wrapped");
        if (!response.ok) {
          throw new Error("Erreur de chargement");
        }
        const data = await response.json();
        setWrapped(data);
      } catch (err) {
        setError("Impossible de charger ton Wrapped. Réessaie plus tard.");
      } finally {
        setLoading(false);
      }
    }

    loadWrapped();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      {loading ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-16 text-center text-xl text-slate-200 shadow-xl shadow-black/20">
          Chargement de ton Wrapped...
        </div>
      ) : error ? (
        <div className="rounded-[2rem] border border-red-400/20 bg-red-500/10 p-16 text-center text-xl text-red-200 shadow-lg shadow-black/10">
          {error}
        </div>
      ) : wrapped ? (
        <div className="space-y-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl shadow-black/30 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.5em] text-accent/80">Ton Wrapped Bundesliga</p>
            <h1 className="mt-4 text-5xl font-bold sm:text-6xl">{wrapped.headline}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{wrapped.story}</p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-brand-700/90 p-8 shadow-lg shadow-black/10">
                <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Joueur</p>
                <p className="mt-4 text-3xl font-semibold text-white">{wrapped.club}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-300">Saison {wrapped.season}</p>
              </div>
              <div className="rounded-3xl bg-brand-700/90 p-8 shadow-lg shadow-black/10">
                <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Personnalité</p>
                <p className="mt-4 text-3xl font-semibold text-white">{wrapped.personality}</p>
                <p className="mt-3 text-slate-300">Un fan reconnu pour ses réactions les plus intenses.</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {wrapped.stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[55%_45%]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl shadow-black/30 backdrop-blur-2xl">
              <SectionHeading>Moments forts</SectionHeading>
              <div className="mt-8 space-y-6">
                {wrapped.topMoments.map((point) => (
                  <article key={point.title} className="rounded-3xl border border-white/10 bg-brand-700/80 p-6 text-slate-200">
                    <p className="text-xl font-semibold text-white">{point.title}</p>
                    <p className="mt-3 leading-7">{point.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl shadow-black/30 backdrop-blur-2xl">
              <SectionHeading>Ton score émotionnel</SectionHeading>
              <p className="mt-6 text-lg leading-8 text-slate-200">La saison est mesurée par ton engagement, tes partages, et ta passion. Voici la note finale de ton ressenti.</p>
              <div className="mt-8 flex items-center justify-between rounded-3xl bg-brand-700/90 p-8">
                <span className="text-sm uppercase tracking-[0.3em] text-accent/80">Émotion</span>
                <span className="text-5xl font-bold text-white">{wrapped.emotionScore}</span>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-900/80 p-6 text-slate-200">
                <p className="font-semibold">Caption partageable</p>
                <p className="mt-3 text-sm leading-7">{wrapped.shareCaption}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
