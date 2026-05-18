import { WrappedExperience } from "../../components/WrappedExperience";

export const dynamic = "force-dynamic";

export default function WrappedPage() {
  return (
    <main className="min-h-screen bg-brand-700 text-white">
      <WrappedExperience />
    </main>
  );
}
