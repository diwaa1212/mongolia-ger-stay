export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">

      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#"
            className="text-sm font-bold tracking-[0.18em] text-white md:text-base"
          >
            MONGOLIA GER STAY
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm font-medium text-white/90 hover:text-white">
              About
            </a>

            <a href="#experience" className="text-sm font-medium text-white/90 hover:text-white">
              Experience
            </a>

            <a href="#stay" className="text-sm font-medium text-white/90 hover:text-white">
              Stay
            </a>

            <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white">
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-200"
            >
              Book your stay
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-900 md:hidden"
          >
            Book
          </a>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ger12.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">

          <div className="max-w-4xl text-white">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 md:text-sm">
              Authentic Mongolian Nomadic Stay
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Stay with a
              <br />
              Mongolian family.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 md:text-lg md:leading-8">
  A peaceful countryside escape where you can experience traditional
  nomadic life, meet our animals, share a family meal and explore the
  Mongolian steppe.
</p>

<p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
  Stay in a private ger or join us for a 1–2 day horseback journey through
  the countryside.
</p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
              <span>87 km from Ulaanbaatar</span>
              <span>•</span>
              <span>Private gers</span>
              <span>•</span>
              <span>Horseback journeys</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#stay"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-200 md:text-base"
              >
                Explore our stay
              </a>

              <a
                href="#experience"
                className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-stone-900 md:text-base"
              >
                Horseback adventures
              </a>

            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="mx-auto flex max-w-7xl justify-end px-6">

            <div className="text-center text-white">

              <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                Scroll to explore
              </div>

              <div className="mx-auto mt-3 h-10 w-px bg-white/60" />

            </div>

          </div>
        </div>

      </section>

      {/* Temporary section */}
      <section className="flex min-h-[300px] items-center justify-center bg-stone-50">
        <h2 className="text-3xl font-bold">
          More coming soon...
        </h2>
      </section>

    </main>
  );
}