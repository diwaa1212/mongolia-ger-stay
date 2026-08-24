export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-xl font-bold tracking-wide text-white">
            MONGOLIA GER STAY
          </div>

          <div className="hidden gap-8 text-sm font-medium text-white md:flex">
            <a href="#about" className="hover:text-stone-300">
              About
            </a>
            <a href="#experience" className="hover:text-stone-300">
              Experience
            </a>
            <a href="#stay" className="hover:text-stone-300">
              Stay
            </a>
            <a href="#contact" className="hover:text-stone-300">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
          >
            Book your stay
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

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em]">
              Authentic Mongolian Experience
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Stay with a
              <br />
              Mongolian family.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
              Experience traditional Mongolian life, sleep in an authentic
              ger, ride horses across the steppe and discover Mongolia like a
              local.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#stay"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-stone-900 transition hover:bg-stone-200"
              >
                Explore our stay
              </a>

              <a
                href="#experience"
                className="rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-stone-900"
              >
                Discover Mongolia
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
          <div className="text-xs uppercase tracking-[0.25em]">
            Scroll to explore
          </div>
          <div className="mx-auto mt-3 h-10 w-px bg-white/70" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
              Welcome to our home
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              More than a place to stay.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Our ger camp is located in the beautiful countryside of Mongolia,
              where you can slow down, breathe fresh air and experience the
              traditional lifestyle of a Mongolian family.
            </p>

            <p className="mt-5 leading-7 text-stone-600">
              We want our guests to experience Mongolia beyond the usual
              tourist destinations. Share a meal with our family, learn about
              nomadic culture, ride horses and enjoy the peaceful landscape of
              the steppe.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-stone-900 px-7 py-3.5 font-semibold text-white hover:bg-stone-700"
            >
              Plan your visit
            </a>
          </div>

<div
  className="h-[500px] rounded-3xl bg-cover bg-center"
  style={{
    backgroundImage: "url('/ger13.jpg')",
  }}
/>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-stone-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-400">
              The experience
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Experience Mongolia
              <br />
              from the inside.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ExperienceCard
              number="01"
              title="Traditional Ger"
              text="Sleep in an authentic Mongolian ger and experience a traditional home on the steppe."
            />

            <ExperienceCard
              number="02"
              title="Horse Riding"
              text="Ride through the beautiful Mongolian landscape and discover the countryside on horseback."
            />

            <ExperienceCard
              number="03"
              title="Local Family"
              text="Share traditional food, stories and everyday life with a real Mongolian family."
            />
          </div>
        </div>
      </section>

      {/* Stay */}
      <section id="stay" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
              Our stay
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              A simple, authentic stay
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
              Everything you need for an unforgettable countryside experience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <StayCard
              title="Ger Accommodation"
              text="Stay in a traditional Mongolian ger surrounded by nature and open landscapes."
            />

            <StayCard
              title="Traditional Meals"
              text="Enjoy homemade Mongolian food prepared by our family using local ingredients."
            />

            <StayCard
              title="Local Experiences"
              text="Horse riding, countryside walks, cultural experiences and time with our family."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
<section
  id="contact"
  className="relative overflow-hidden bg-stone-200 px-6 py-24"
>
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
      Your Mongolian adventure
    </p>

    <h2 className="mt-4 text-4xl font-bold md:text-6xl">
      Come experience
      <br />
      Mongolia with us.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
      Leave the city behind and spend a few days surrounded by nature,
      horses and Mongolian culture.
    </p>

    <div className="mt-9 flex flex-wrap justify-center gap-4">
      <a
        href="mailto:hello@mongoliagerstay.com"
        className="rounded-full bg-stone-900 px-8 py-4 font-semibold text-white hover:bg-stone-700"
      >
        Contact us
      </a>

      <a
        href="#stay"
        className="rounded-full border border-stone-400 px-8 py-4 font-semibold text-stone-900 hover:bg-white"
      >
        View our stay
      </a>

      <a
        href="https://www.instagram.com/authentic_nomad_family/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-stone-400 px-8 py-4 font-semibold text-stone-900 hover:bg-white"
      >
        Instagram
      </a>

      <a
        href="https://www.airbnb.com/rooms/1424303193731217278"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-stone-400 px-8 py-4 font-semibold text-stone-900 hover:bg-white"
      >
        Book on Airbnb
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-stone-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="font-bold tracking-wide">MONGOLIA GER STAY</div>
            <div className="mt-1 text-sm text-stone-500">
              Authentic Mongolian countryside experience
            </div>
          </div>

          <div className="text-sm text-stone-500">
            © 2026 Mongolia Ger Stay. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function ExperienceCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-sm text-stone-500">{number}</div>

      <h3 className="mt-16 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-stone-400">{text}</p>
    </div>
  );
}

function StayCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-xl">
        ✦
      </div>

      <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-stone-600">{text}</p>
    </div>
  );
}