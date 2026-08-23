import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/track", label: "Tracking" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const support = [
  { href: "/contact", label: "Help Center" },
  { href: "/services", label: "Shipping Information" },
  { href: "/track", label: "Tracking" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Waybound" width={30} height={30} className="rounded-md" />
              <span className="font-display text-lg font-semibold text-white">Waybound</span>
            </div>
            <p className="mt-4 max-w-xs text-sm">
              Shipping without boundaries. Reliable logistics infrastructure built for a connected world.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "in", "IG"].map((s) => (
                <span
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-medium text-white/50 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Company</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerNav.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Support</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {support.map((l) => (
                <Link key={l.label} href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Legal</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {legal.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Waybound. All rights reserved.
        </div>
      </div>
    </footer>
  );
}