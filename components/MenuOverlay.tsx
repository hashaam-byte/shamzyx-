"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "HOME", num: "01" },
  { href: "/about", label: "ABOUT", num: "02" },
  { href: "/projects", label: "PROJECTS", num: "03" },
  { href: "/journey", label: "JOURNEY", num: "04" },
  { href: "/contact", label: "CONTACT", num: "05" },
];

export default function MenuOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-bg/97 backdrop-blur-md flex flex-col justify-center overflow-y-auto px-6 sm:px-16 py-24">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:right-16 text-white text-2xl w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-2 sm:gap-4">
            {LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span className="text-purple text-sm font-mono">{link.num}</span>
                  <span className="text-white text-[12vw] sm:text-6xl font-extrabold leading-none tracking-tight group-hover:text-purple transition-colors">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}