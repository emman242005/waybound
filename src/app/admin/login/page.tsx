import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/logo.png" alt="Waybound" width={32} height={32} className="rounded-md" />
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Waybound
            </span>
          </Link>
          <h1 className="mt-6 font-display text-2xl font-semibold text-white">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-white/40">
            Sign in to manage shipments
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-navy-light p-8">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm text-white/30">
          <Link href="/" className="hover:text-white transition-colors">
            ← Back to Waybound
          </Link>
        </p>
      </div>
    </div>
  );
}