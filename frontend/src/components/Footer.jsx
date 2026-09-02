function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-xl">
                🍱
              </span>

              <span className="text-xl font-black tracking-tight">
                Rajdhani Tiffin
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
              Fresh, delicious and wholesome meals prepared daily with a
              homemade touch. Making your everyday meals simple and
              convenient.
            </p>

            <a
              href="#inquiry"
              className="mt-6 inline-flex rounded-xl bg-amber-500 px-5 py-3 text-sm font-extrabold text-stone-950 transition hover:bg-amber-400"
            >
              Get Your Tiffin
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href="#menu"
                  className="transition hover:text-amber-400"
                >
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-amber-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-amber-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-amber-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-stone-400">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Add your business address here</span>
              </li>

              <li className="flex gap-3">
                <span>📞</span>

                <a
                  href="tel:+916207900265"
                  className="transition hover:text-amber-400"
                >
                   +91 6207900265
                </a>
              </li>

              <li className="flex gap-3">
                <span>✉️</span>

                <a
                  href="mailto:rajdhanitiffinservices@gmail.com"
                  className="break-all transition hover:text-amber-400"
                >
                  rajdhanitiffinservices@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-stone-800 pt-6">
          <div className="flex flex-col gap-3 text-center text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {currentYear} Rajdhani Tiffin & Catering. All rights reserved.
            </p>

            <p>
              Fresh Meals • Homemade Taste • Daily
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;