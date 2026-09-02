import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFoods } from "../api/foodApi";
import { getQueries } from "../api/queryApi";

function AdminDashboard() {
  const [stats, setStats] = useState({
    foods: 0,
    queries: 0,
    pending: 0,
    resolved: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [foodData, queryData] = await Promise.all([
          getFoods(),
          getQueries(),
        ]);

        const foods = foodData.success ? foodData.foods || [] : [];
        const queries = queryData.success
          ? queryData.queries || []
          : [];

        const pending = queries.filter(
          (item) => item.status === "Pending"
        ).length;

        const resolved = queries.filter(
          (item) => item.status === "Resolved"
        ).length;

        setStats({
          foods: foods.length,
          queries: queries.length,
          pending,
          resolved,
        });
      } catch (error) {
        console.error("Dashboard Stats Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

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

        {/* Page Heading */}
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

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total Foods */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
                🍱
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Menu
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Total Foods
            </p>

            <p className="mt-1 text-3xl font-black text-stone-900">
              {loading ? "—" : stats.foods}
            </p>
          </div>

          {/* Total Queries */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-xl">
                💬
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Queries
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Total Queries
            </p>

            <p className="mt-1 text-3xl font-black text-stone-900">
              {loading ? "—" : stats.queries}
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
                🟡
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Action
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Pending Queries
            </p>

            <p className="mt-1 text-3xl font-black text-stone-900">
              {loading ? "—" : stats.pending}
            </p>
          </div>

          {/* Resolved */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                🟢
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                Completed
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-stone-500">
              Resolved Queries
            </p>

            <p className="mt-1 text-3xl font-black text-stone-900">
              {loading ? "—" : stats.resolved}
            </p>
          </div>
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

            <div className="mt-1 flex items-center justify-between gap-3">
              <h3 className="text-xl font-black text-stone-900">
                Manage Foods
              </h3>

              <span className="text-lg text-stone-400 transition group-hover:translate-x-1 group-hover:text-amber-600">
                →
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-stone-500">
              Add new meals, update existing food items or remove unavailable
              meals.
            </p>

            <span className="mt-5 inline-block text-xs font-extrabold text-amber-600">
              Manage Menu →
            </span>
          </Link>

          {/* Customer Queries */}
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

            <span className="mt-5 inline-block text-xs font-extrabold text-amber-600">
              View Queries →
            </span>
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

            <span className="mt-5 inline-block text-xs font-extrabold text-amber-600">
              Open Website ↗
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;