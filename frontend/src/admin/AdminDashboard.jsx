import { Link } from "react-router-dom";

function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-black tracking-tight text-stone-900 sm:text-2xl">
              Admin Dashboard
            </h1>

            <p className="mt-0.5 text-xs text-stone-500 sm:text-sm">
              Rajdhani Tiffin & Catering
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-red-600 active:scale-95 sm:px-5"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
            Administration
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
            Welcome back, Sagar
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
            Manage your menu, customer inquiries and website from one place.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Food Management */}
          <Link
            to="/admin/foods"
            className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
              🍱
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Food Management
            </p>

           <button
  type="button"
  onClick={() => {
    window.location.href = "/admin/foods";
  }}
  className="w-full rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
>
  <p className="text-sm font-semibold text-stone-500">
    Food Management
  </p>

  <h2 className="mt-2 text-2xl font-black text-stone-900">
    Manage Foods
  </h2>

  <p className="mt-2 text-sm text-stone-500">
    Add, update and delete food items.
  </p>

  <span className="mt-5 inline-block text-xs font-extrabold text-amber-600">
    Manage Menu →
  </span>
</button>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              Add new meals, update existing food items or remove unavailable
              meals.
            </p>
          </Link>

          {/* Queries */}
          <Link
            to="/admin/queries"
            className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-xl">
              💬
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Customer Support
            </p>

            <div className="mt-1 flex items-center justify-between gap-3">
              <h3 className="text-xl font-black text-stone-900">
                Customer Queries
              </h3>

              <span className="text-lg text-stone-400 transition group-hover:translate-x-1 group-hover:text-amber-600">
                →
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              View customer inquiries and manage their request status.
            </p>
          </Link>

          {/* Public Website */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-xl">
              🌐
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Website
            </p>

            <div className="mt-1 flex items-center justify-between gap-3">
              <h3 className="text-xl font-black text-stone-900">
                Public Website
              </h3>

              <span className="text-lg text-stone-400 transition group-hover:translate-x-1 group-hover:text-amber-600">
                ↗
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              Open the customer-facing website in a new tab.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;