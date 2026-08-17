function About() {
  return (
    <section
      id="about"
      className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Content */}
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
            About Us
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Homemade Taste,
            <span className="block text-amber-600">Every Single Day</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-stone-600 sm:text-base">
            At Rajdhani Tiffin & Catering, we believe that good food should
            feel like home. We prepare fresh and delicious meals every day
            with a focus on quality, taste and simplicity.
          </p>

          <p className="mt-4 text-sm leading-7 text-stone-500 sm:text-base">
            Whether you need a regular lunch or dinner, our goal is to make
            your everyday meals convenient, wholesome and satisfying.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-black text-amber-600">Fresh</p>
              <p className="mt-1 text-xs font-semibold text-stone-500 sm:text-sm">
                Meals prepared daily
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-black text-amber-600">Daily</p>
              <p className="mt-1 text-xs font-semibold text-stone-500 sm:text-sm">
                Different meals
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-black text-amber-600">Veg</p>
              <p className="mt-1 text-xs font-semibold text-stone-500 sm:text-sm">
                Vegetarian options
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-black text-amber-600">Care</p>
              <p className="mt-1 text-xs font-semibold text-stone-500 sm:text-sm">
                Made with attention
              </p>
            </div>
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-stone-900 p-6 shadow-2xl sm:p-8 lg:p-10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/20 blur-2xl" />

            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500 text-4xl shadow-lg">
                🍱
              </div>

              <h3 className="mt-8 text-2xl font-black text-white sm:text-3xl">
                Your Everyday Meal,
                <span className="block text-amber-400">
                  Made With Care.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-stone-300 sm:text-base">
                From everyday lunch to dinner, we focus on serving food that
                is simple, fresh and satisfying.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  Fresh Food
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  Daily Menu
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  Homemade Taste
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;