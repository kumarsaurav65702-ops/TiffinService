import { useEffect, useState } from "react";
import {
  getFoods,
  addFood,
  updateFood,
  deleteFood,
} from "../api/foodApi";

const initialForm = {
  title: "",
  description: "",
  price: "",
  foodType: "Veg",
  mealType: "Lunch",
  featured: false,
  rating: "",
};

function AdminFoods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingFood, setEditingFood] = useState(null);

  const [formData, setFormData] = useState(initialForm);
  const [image, setImage] = useState(null);

  // -----------------------------
  // Fetch Foods
  // -----------------------------
  const loadFoods = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getFoods();

      if (data.success) {
        setFoods(data.foods || []);
      } else {
        setError(data.message || "Unable to load foods.");
      }
    } catch (err) {
      console.error("Load Foods Error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load foods."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFoods();
  }, []);

  // -----------------------------
  // Input Change
  // -----------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // -----------------------------
  // Open Add Form
  // -----------------------------
  const handleAddClick = () => {
    setEditingFood(null);
    setFormData(initialForm);
    setImage(null);
    setError("");
    setSuccess("");
    setShowForm(true);
  };

  // -----------------------------
  // Open Edit Form
  // -----------------------------
  const handleEditClick = (food) => {
    setEditingFood(food);

    setFormData({
      title: food.title || "",
      description: food.description || "",
      price: food.price || "",
      foodType: food.foodType || "Veg",
      mealType: food.mealType || "Lunch",
      featured: food.featured || false,
      rating: food.rating || "",
    });

    setImage(null);
    setError("");
    setSuccess("");
    setShowForm(true);
  };

  // -----------------------------
  // Close Form
  // -----------------------------
  const handleCancel = () => {
    if (saving) return;

    setShowForm(false);
    setEditingFood(null);
    setFormData(initialForm);
    setImage(null);
    setError("");
  };

  // -----------------------------
  // Submit
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      if (editingFood) {
        // Update existing food
        const payload = {
          title: formData.title,
          description: formData.description,
          price: Number(formData.price),
          foodType: formData.foodType,
          mealType: formData.mealType,
          featured: formData.featured,
          rating: Number(formData.rating),
        };

        await updateFood(editingFood._id, payload);

        setSuccess("Food updated successfully.");
      } else {
        // Add new food
        if (!image) {
          setError("Please select a food image.");
          setSaving(false);
          return;
        }

        const payload = new FormData();

        payload.append("title", formData.title);
        payload.append("description", formData.description);
        payload.append("price", Number(formData.price));
        payload.append("foodType", formData.foodType);
        payload.append("mealType", formData.mealType);
        payload.append("featured", formData.featured);
        payload.append("rating", Number(formData.rating));
        payload.append("image", image);

        await addFood(payload);

        setSuccess("Food added successfully.");
      }

      setFormData(initialForm);
      setImage(null);
      setEditingFood(null);
      setShowForm(false);

      await loadFoods();
    } catch (err) {
      console.error("Save Food Error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to save food."
      );
    } finally {
      setSaving(false);
    }
  };

  // -----------------------------
  // Delete
  // -----------------------------
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setSuccess("");

      await deleteFood(id);

      setSuccess("Food deleted successfully.");

      await loadFoods();
    } catch (err) {
      console.error("Delete Food Error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to delete food."
      );
    }
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
              Administration
            </p>

            <h1 className="mt-1 text-xl font-black text-stone-900 sm:text-2xl">
              Food Management
            </h1>

            <p className="mt-1 text-xs text-stone-500 sm:text-sm">
              Add, update and manage your daily menu.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddClick}
            className="shrink-0 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-amber-600 sm:px-5 sm:py-3 sm:text-sm"
          >
            + Add Food
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Messages */}
        {success && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
                  {editingFood ? "Edit Food" : "New Food"}
                </p>

                <h2 className="mt-1 text-2xl font-black text-stone-900">
                  {editingFood
                    ? "Update Food Item"
                    : "Add New Food"}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleCancel}
                className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-bold text-stone-600 transition hover:bg-stone-100"
              >
                Cancel
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 md:grid-cols-2"
            >
              {/* Title */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Food Title
                </label>

                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Example: Paneer Butter Masala"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe the food item..."
                  className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Price
                </label>

                <input
                  name="price"
                  type="number"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  placeholder="120"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Rating
                </label>

                <input
                  name="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="4.8"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Food Type */}
              <div>
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Food Type
                </label>

                <select
                  name="foodType"
                  value={formData.foodType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              {/* Meal Type */}
              <div>
                <label className="mb-2 block text-sm font-bold text-stone-700">
                  Meal Type
                </label>

                <select
                  name="mealType"
                  value={formData.mealType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>

              {/* Featured */}
              <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <input
                  id="featured"
                  name="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-stone-300 text-amber-500 focus:ring-amber-500"
                />

                <label
                  htmlFor="featured"
                  className="ml-3 text-sm font-bold text-stone-700"
                >
                  Featured Food
                </label>
              </div>

              {/* Image */}
              {!editingFood && (
                <div>
                  <label className="mb-2 block text-sm font-bold text-stone-700">
                    Food Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setImage(e.target.files?.[0] || null)
                    }
                    required
                    className="block w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-xs text-stone-600 file:mr-3 file:rounded-lg file:border-0 file:bg-stone-900 file:px-3 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-amber-600"
                  />
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingFood
                    ? "Update Food"
                    : "Add Food"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Food List Heading */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
              Menu Items
            </p>

            <h2 className="mt-1 text-2xl font-black text-stone-900">
              All Foods
            </h2>
          </div>

          <p className="text-sm font-semibold text-stone-500">
            {foods.length} items
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="aspect-4/3 animate-pulse bg-stone-200" />

                <div className="space-y-3 p-5">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-stone-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-stone-100" />
                  <div className="h-8 w-1/3 animate-pulse rounded bg-stone-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && foods.length === 0 && (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
            <div className="text-5xl">🍱</div>

            <h3 className="mt-4 text-xl font-black text-stone-900">
              No Food Items Yet
            </h3>

            <p className="mt-2 text-sm text-stone-500">
              Start by adding your first menu item.
            </p>

            <button
              type="button"
              onClick={handleAddClick}
              className="mt-5 rounded-xl bg-stone-900 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-amber-600"
            >
              Add First Food
            </button>
          </div>
        )}

        {/* Food Cards */}
        {!loading && foods.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <article
                key={food._id}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={food.image?.url}
                    alt={food.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-3 top-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
                        food.foodType === "Veg"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {food.foodType}
                    </span>
                  </div>

                  {food.featured && (
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-extrabold text-stone-900">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-black text-stone-900">
                        {food.title}
                      </h3>

                      <p className="mt-1 text-xs font-bold text-amber-600">
                        {food.mealType}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-lg bg-stone-100 px-2 py-1 text-xs font-bold text-stone-700">
                      ⭐ {food.rating || "—"}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-500">
                    {food.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-lg font-black text-stone-900">
                      ₹{food.price}
                    </p>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleEditClick(food)}
                        className="rounded-lg border border-stone-200 px-3 py-2 text-xs font-extrabold text-stone-700 transition hover:border-amber-500 hover:text-amber-600"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(food._id)}
                        className="rounded-lg bg-red-50 px-3 py-2 text-xs font-extrabold text-red-600 transition hover:bg-red-600 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminFoods;