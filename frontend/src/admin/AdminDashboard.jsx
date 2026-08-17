function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-black text-stone-900">
              Admin Dashboard
            </h1>

            <p className="text-xs text-stone-500">
              Rajdhani Tiffin & Catering
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-stone-500">
              Food Management
            </p>

            <h2 className="mt-2 text-2xl font-black text-stone-900">
              Manage Foods
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              Add, update and delete food items.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-stone-500">
              Queries
            </p>

            <h2 className="mt-2 text-2xl font-black text-stone-900">
              Customer Queries
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              View and manage customer inquiries.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-stone-500">
              Website
            </p>

            <h2 className="mt-2 text-2xl font-black text-stone-900">
              Public Website
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              View the customer-facing website.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;