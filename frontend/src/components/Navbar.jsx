import { useState } from "react";
import { Link } from "react-router-dom";

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
                    className="flex shrink-0 items-center"
                >
                    <img
                        src="/rajdhani-logo.png"
                        alt="Rajdhani Tiffin & Catering"
                        className="h-14 w-auto object-contain sm:h-16"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`relative py-2 text-sm font-semibold transition-colors ${
                                index === 0
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

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 lg:flex">

                    {/* Admin Dashboard */}
                    <Link
                        to="/admin/dashboard"
                        aria-label="Admin Dashboard"
                        title="Admin Dashboard"
                        className="grid size-10 place-items-center rounded-xl border border-stone-200 bg-white text-stone-600 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 hover:shadow-md"
                    >
                        <svg
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.68v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.76 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.68h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.9-1.9.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56V5h2.68v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.04H21v2.68h-.04A1.7 1.7 0 0 0 19.4 15Z"
                            />
                        </svg>
                    </Link>

                    {/* Get Tiffin */}
                    <a
                        href="#inquiry"
                        className="inline-flex rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-md"
                    >
                        Get Tiffin
                    </a>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 lg:hidden">

                    {/* Admin Dashboard */}
                    <Link
                        to="/admin/dashboard"
                        aria-label="Admin Dashboard"
                        title="Admin Dashboard"
                        onClick={closeMenu}
                        className="grid size-10 place-items-center rounded-xl border border-stone-200 bg-white text-stone-600 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
                    >
                        <svg
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.68v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.76 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.68h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.9-1.9.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56V5h2.68v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.04H21v2.68h-.04A1.7 1.7 0 0 0 19.4 15Z"
                            />
                        </svg>
                    </Link>

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
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-hidden border-t border-stone-200/70 bg-[#fffcf8] transition-all duration-300 lg:hidden ${
                    isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6">

                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                                index === 0
                                    ? "bg-amber-50 text-amber-700"
                                    : "text-stone-600 hover:bg-stone-50 hover:text-amber-700"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Mobile Admin Dashboard */}
                    <Link
                        to="/admin/dashboard"
                        onClick={closeMenu}
                        className="mt-2 flex items-center gap-3 rounded-xl bg-stone-100 px-4 py-3.5 text-sm font-bold text-stone-700 transition hover:bg-amber-50 hover:text-amber-700"
                    >
                        <svg
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.68v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.76 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.68h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.9-1.9.06.06a1.7 1.7 0 0 0 1.04-1.56V5h2.68v.09a1.7 1.7 0 0 0 1.04 1.56l.06-.06 1.9 1.9-.06.06A1.7 1.7 0 0 0 19.4 15Z"
                            />
                        </svg>

                        Admin Dashboard
                    </Link>

                    {/* Get Tiffin */}
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