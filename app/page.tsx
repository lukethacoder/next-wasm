import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WASM in NextJS
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://lukesecomb.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            by luke.
          </a>
        </div>
      </div>

      <section className="w-full flex gap-8 justify-center">
        <Link href='/uuid' className="border border-slate-700 p-4 hover:bg-slate-900">
          /uuid
        </Link>
        <Link href='/add-one' className="border border-slate-700 p-4 hover:bg-slate-900">
          /add-one
        </Link>
      </section>

      <footer></footer>
    </main>
  );
}
