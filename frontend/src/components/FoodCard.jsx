import React from 'react'

const FoodCard = ({food}) => {
   return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={food.image?.url}
          alt={food.title}
          className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Food Type */}
        <div className="absolute left-3 top-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur ${
              food.foodType === "Veg"
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            <span
              className={`size-2 rounded-full ${
                food.foodType === "Veg"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            />

            {food.foodType}
          </span>
        </div>

        {/* Featured */}
        {food.isFeatured && (
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-amber-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold text-stone-900">
              {food.title}
            </h3>

            <p className="mt-1 text-xs font-semibold text-amber-600">
              {food.mealType}
            </p>
          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1">
            <span className="text-xs">★</span>
            <span className="text-xs font-bold text-stone-800">
              {food.rating?.toFixed(1) || "0.0"}
            </span>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-500">
          {food.description}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <span className="text-2xl font-black text-stone-900">
              ₹{food.price}
            </span>

            <span className="ml-1 text-xs text-stone-400">
              / meal
            </span>
          </div>

          <button
            type="button"
            className="rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-amber-600"
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard