export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-16 py-6">
      <div className="font-extrabold text-sm tracking-[0.15em] text-white">
        SHAMZY <span className="text-purple">X</span>
      </div>

      <button className="flex items-center gap-2.5 text-white text-xs tracking-[0.2em]">
        MENU
        <span className="flex flex-col gap-[3px]">
          <span className="w-4 h-px bg-white" />
          <span className="w-4 h-px bg-white" />
        </span>
      </button>
    </nav>
  );
}