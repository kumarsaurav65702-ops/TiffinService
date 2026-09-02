import { useEffect, useState } from "react";
import { getFoods } from "../api/foodApi";
import FoodCard from "./FoodCard";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFoods = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getFoods();

        if (data.success) {
          setFoods(data.foods);
        } else {
          setError("Unable to load menu.");
        }
      } catch (err) {
        console.error("Get Foods Error:", err);
        setError("Unable to load menu. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadFoods();
  }, []);

  return (
    <section
      id="menu"
      className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
            Our Menu
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Fresh Meals, Made Daily
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-500 sm:text-base">
            Simple, delicious and wholesome meals prepared fresh for you
            every day.
          </p>

          {/* Download Menu */}
          <div className="mt-7 flex justify-center">
            <a
              href="/menu.pdf"
              download="Rajdhani-Kitchen-Weekly-Menu.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md active:scale-95"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>

              Download Menu
            </a>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="aspect-4/3 animate-pulse bg-stone-200" />

                <div className="space-y-3 p-5">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-stone-200" />

                  <div className="h-4 w-full animate-pulse rounded bg-stone-100" />

                  <div className="h-4 w-4/5 animate-pulse rounded bg-stone-100" />

                  <div className="h-8 w-1/3 animate-pulse rounded bg-stone-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-red-100 bg-red-50 p-6 text-center">
            <p className="text-sm font-semibold text-red-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-xl bg-stone-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-amber-600"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && foods.length === 0 && (
          <div className="mx-auto mt-12 max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="text-4xl">🍱</div>

            <h3 className="mt-4 text-lg font-extrabold text-stone-900">
              Menu Coming Soon
            </h3>

            <p className="mt-2 text-sm text-stone-500">
              Our fresh meals will be available here shortly.
            </p>
          </div>
        )}

        {/* Food Cards */}
        {!loading && !error && foods.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;