import WhatsNextSection from "@/components/WhatsNextSection";

export default function ContactPage() {
  return (
    <main className="pt-28">
      <div className="px-6 sm:px-16 pb-4">
        <div className="text-purple text-xs tracking-widest mb-2">05</div>
        <h1 className="font-extrabold text-4xl sm:text-5xl mb-4">CONTACT</h1>
        <p className="text-text-dim text-sm sm:text-base max-w-xl leading-relaxed">
          NEEDS REAL CONTENT — a working contact form goes here once the Supabase
          stage is built. For now this is a placeholder.
        </p>
      </div>

      <WhatsNextSection />
    </main>
  );
}