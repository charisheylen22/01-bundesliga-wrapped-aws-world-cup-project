type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/20">
      <p className="text-sm uppercase tracking-[0.3em] text-accent/80">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
    </div>
  );
}
