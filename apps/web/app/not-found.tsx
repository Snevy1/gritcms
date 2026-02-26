import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6">
        <span className="text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-slate-600 bg-clip-text text-transparent">
          404
        </span>
      </div>
      <h1 className="mb-3 text-2xl font-bold tracking-tight text-white">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/30"
      >
        Back to home
      </Link>
    </div>
  );
}
