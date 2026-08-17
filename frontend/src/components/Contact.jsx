function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#fffcf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-500 sm:text-base">
            Have a question about our tiffin service? Get in touch with us.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Location */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
              📍
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-stone-900">
              Our Location
            </h3>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              Add your complete business address here.
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
              📞
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-stone-900">
              Call Us
            </h3>

            <a
              href="tel:+919999999999"
              className="mt-2 block text-sm font-semibold text-stone-500 transition hover:text-amber-600"
            >
              +91 99999 99999
            </a>
          </div>

          {/* Email */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 sm:col-span-2 lg:col-span-1">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
              ✉️
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-stone-900">
              Email Us
            </h3>

            <a
              href="mailto:info@rajdhani-tiffin.com"
              className="mt-2 block break-all text-sm font-semibold text-stone-500 transition hover:text-amber-600"
            >
              info@rajdhani-tiffin.com
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-3xl bg-stone-900 px-6 py-8 text-center shadow-xl sm:px-10 sm:py-10">
          <h3 className="text-2xl font-black text-white sm:text-3xl">
            Need a Daily Tiffin?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-300 sm:text-base">
            Tell us your requirements and we'll help you find the right meal
            option.
          </p>

          <a
            href="#inquiry"
            className="mt-6 inline-flex rounded-xl bg-amber-500 px-6 py-3 text-sm font-extrabold text-stone-950 transition hover:bg-amber-400"
          >
            Send an Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;