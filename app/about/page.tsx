import StackSection from "@/components/StackSection";

export default function AboutPage() {
  return (
    <main className="pt-28">
      <div className="px-6 sm:px-16 pb-16">
        <div className="text-purple text-xs tracking-widest mb-2">02</div>
        <h1 className="font-extrabold text-4xl sm:text-5xl mb-4">ABOUT</h1>
        <p className="text-text-dim text-sm sm:text-base max-w-xl leading-relaxed">
          NEEDS REAL CONTENT — this is where your story goes: who you are, how you got
          into building things, what drives you. A paragraph or two is enough.
        </p>
      </div>

      <StackSection />
    </main>
  );
}