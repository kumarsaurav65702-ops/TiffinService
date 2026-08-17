function Services() {
  const services = [
    {
      icon: "🍱",
      title: "Daily Fresh Meals",
      description:
        "Freshly prepared meals with a different menu every day, so you never get bored of your food.",
    },
    {
      icon: "🥗",
      title: "Healthy & Homemade",
      description:
        "Simple, wholesome food prepared with quality ingredients and a homemade touch.",
    },
    {
      icon: "🚚",
      title: "Tiffin Service",
      description:
        "Enjoy delicious meals without the daily hassle of cooking. Perfect for your everyday needs.",
    },
    {
      icon: "⏰",
      title: "Lunch & Dinner",
      description:
        "Choose the meal that works for you and enjoy freshly prepared food at your convenience.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#fffcf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Good Food, Made Simple
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-500 sm:text-base">
            Everything you need for a simple, delicious and hassle-free daily
            meal experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-extrabold text-stone-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;