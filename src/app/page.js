import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      
      {/* Background blur shapes */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-black/20 blur-3xl"></div>

      <main className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl bg-white/90 p-16 text-center shadow-2xl backdrop-blur-md dark:bg-black/70">
        
        {/* Logo */}
        <Image
          src="/next.svg"
          alt="Logo"
          width={90}
          height={20}
          className="dark:invert"
          priority
        />

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Welcome to AI Chat 🤖
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
          Chat with AI, ask questions, get instant answers, and explore ideas
          like never before.
        </p>

        {/* CTA Button */}
        <Link
          href="/chat"
          className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Start Chatting
          <span className="transition-transform group-hover:translate-x-1">
            ➜
          </span>
        </Link>

        {/* Footer note */}
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Powered by Next.js & AI
        </p>
      </main>
    </div>
  );
}
