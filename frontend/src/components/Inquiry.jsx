import { useState } from "react";
import { submitQuery } from "../api/queryApi";

function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    try {
      setLoading(true);

      const data = await submitQuery(formData);

      if (data.success) {
        setSuccess(
          "Thank you! Your inquiry has been submitted successfully."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          query: "",
        });
      } else {
        setError(data.message || "Unable to submit your inquiry.");
      }
    } catch (err) {
      console.error("Submit Query Error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left Content */}
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
            Get Your Tiffin
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Tell Us What
            <span className="block text-amber-600">You Need</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-500 sm:text-base">
            Looking for a regular lunch or dinner tiffin? Send us your
            requirement and our team will get back to you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
                🍱
              </div>

              <div>
                <h3 className="font-extrabold text-stone-900">
                  Fresh Daily Meals
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Freshly prepared food for your everyday needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
                💬
              </div>

              <div>
                <h3 className="font-extrabold text-stone-900">
                  Easy Inquiry
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Tell us your meal requirements and we'll respond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="mb-7">
            <h3 className="text-2xl font-black text-stone-900">
              Send an Inquiry
            </h3>

            <p className="mt-2 text-sm text-stone-500">
              Fill in your details and we'll contact you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-stone-700"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-stone-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-stone-700"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="9876543210"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
            </div>

            {/* Query */}
            <div>
              <label
                htmlFor="query"
                className="mb-2 block text-sm font-bold text-stone-700"
              >
                Your Requirement
              </label>

              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your lunch/dinner tiffin requirement..."
                className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                {success}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Inquiry;