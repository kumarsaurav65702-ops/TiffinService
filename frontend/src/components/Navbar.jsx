import { useState } from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fffcf8]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2.5"
                >
                    <div className="grid size-10 place-items-center rounded-xl bg-amber-50 text-xl shadow-sm">
                        🍱
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="text-base font-extrabold tracking-tight text-stone-900 sm:text-lg">
                            Rajdhani
                        </span>

                        <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-amber-600 sm:text-[9px]">
                            Tiffin & Catering
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`relative py-2 text-sm font-semibold transition-colors ${index === 0
                                    ? "text-amber-700"
                                    : "text-stone-600 hover:text-amber-700"
                                }`}
                        >
                            {item.label}

                            {index === 0 && (
                                <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-5 rounded-full bg-amber-600" />
                            )}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="#inquiry"
                    className="hidden rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-md lg:inline-flex"
                >
                    Get Tiffin
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="grid size-10 place-items-center rounded-xl border border-stone-200 bg-white text-stone-800 transition hover:border-amber-300 hover:text-amber-700 lg:hidden"
                >
                    {isOpen ? (
                        <svg
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    ) : (
                        <svg
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-hidden border-t border-stone-200/70 bg-[#fffcf8] transition-all duration-300 lg:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${index === 0
                                    ? "bg-amber-50 text-amber-700"
                                    : "text-stone-600 hover:bg-stone-50 hover:text-amber-700"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#inquiry"
                        onClick={closeMenu}
                        className="mt-2 flex items-center justify-center rounded-xl bg-stone-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-amber-700"
                    >
                        Get Tiffin
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;