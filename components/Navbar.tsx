const LINKS = [
  { href: "#home", label: "01. HOME" },
  { href: "#about", label: "02. ABOUT" },
  { href: "#projects", label: "03. PROJECTS" },
  { href: "#journey", label: "04. JOURNEY" },
  { href: "#contact", label: "05. CONTACT" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-14 py-5 border-b border-panel-border bg-bg/85 backdrop-blur-md">
      <div className="font-extrabold text-[17px] tracking-wide">
        SHAMZY <span className="text-purple">X</span>
      </div>

      <div className="hidden md:flex gap-8 text-xs tracking-widest text-text-dim">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="border border-purple text-white text-[11px] tracking-widest px-4 py-2.5 rounded bg-purple/[0.08] hover:bg-purple/20 transition-colors">
          ENTER SHAMZY X
        </button>
        {/* Mobile menu button — hook up a slide-out drawer here for small screens */}
        <button className="md:hidden text-text-dim text-xl" aria-label="Open menu">
          ≡
        </button>
      </div>
    </nav>
  );
}
