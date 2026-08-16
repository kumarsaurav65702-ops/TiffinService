import React from 'react'

const Hero = () => {
 return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fffcf8]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-bold text-amber-700 sm:text-sm">
            <span className="size-2 rounded-full bg-green-500" />
            Freshly prepared every day
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Ghar Jaisa
            <span className="block text-amber-600">
              Khana, Har Din.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8 lg:text-lg">
            Fresh, delicious and homestyle meals prepared with quality
            ingredients. Enjoy a wholesome tiffin without the hassle of
            everyday cooking.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-700"
            >
              Explore Today's Menu
              <span className="ml-2">→</span>
            </a>

            <a
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white px-6 py-3.5 text-sm font-bold text-stone-800 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700"
            >
              Get a Tiffin
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-stone-200 pt-7">
            <div>
              <p className="text-xl font-extrabold text-stone-900 sm:text-2xl">
                100%
              </p>
              <p className="mt-1 text-[11px] font-medium text-stone-500 sm:text-xs">
                Fresh Food
              </p>
            </div>

            <div className="border-l border-stone-200 pl-4">
              <p className="text-xl font-extrabold text-stone-900 sm:text-2xl">
                Daily
              </p>
              <p className="mt-1 text-[11px] font-medium text-stone-500 sm:text-xs">
                Fresh Menu
              </p>
            </div>

            <div className="border-l border-stone-200 pl-4">
              <p className="text-xl font-extrabold text-stone-900 sm:text-2xl">
                Home
              </p>
              <p className="mt-1 text-[11px] font-medium text-stone-500 sm:text-xs">
                Style Taste
              </p>
            </div>
          </div>
        </div>

        {/* Right Food Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

          {/* Main image container */}
          <div className="relative overflow-hidden rounded-4xl bg-stone-100 shadow-2xl shadow-stone-900/10">

            {/* Replace this image later with our actual food image */}
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
              alt="Fresh Indian homemade meal"
              className="aspect-4/3 w-full object-cover sm:aspect-5/4 lg:aspect-4/5"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

            {/* Floating rating card */}
            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>

                <div>
                  <p className="text-sm font-extrabold text-stone-900">
                    4.8/5
                  </p>

                  <p className="text-[10px] font-medium text-stone-500">
                    Taste people love
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating fresh card */}
          <div className="absolute -right-2 -top-5 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:-right-5 sm:-top-6">
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 place-items-center rounded-full bg-green-50 text-lg">
                🥗
              </div>

              <div>
                <p className="text-xs font-extrabold text-stone-900">
                  Fresh & Healthy
                </p>

                <p className="mt-0.5 text-[10px] text-stone-500">
                  Made with care
                </p>
              </div>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute -bottom-6 -right-6 -z-10 size-32 rounded-full bg-amber-200/60 sm:size-40" />
        </div>
      </div>
    </section>
  );
}

export default Hero