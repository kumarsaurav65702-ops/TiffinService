import { useEffect, useState } from "react";
import { getQueries, updateQueryStatus } from "../api/queryApi";

function AdminQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  // Fetch Queries
  const loadQueries = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getQueries();

      if (data.success) {
        setQueries(data.queries || []);
      } else {
        setError(data.message || "Unable to load queries.");
      }
    } catch (err) {
      console.error("Get Queries Error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load customer queries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQueries();
  }, []);

  // Update Status
  const handleStatusChange = async (id, status) => {
    try {
      setUpdatingId(id);
      setError("");

      const data = await updateQueryStatus(id, status);

      if (data.success) {
        setQueries((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, status: data.query.status }
              : item
          )
        );
      } else {
        setError(data.message || "Unable to update status.");
      }
    } catch (err) {
      console.error("Update Query Status Error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to update query status."
      );
    } finally {
      setUpdatingId(null);
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
              Customer Queries
            </h1>

            <p className="mt-1 text-xs text-stone-500 sm:text-sm">
              View and manage customer inquiries.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/admin/dashboard";
            }}
            className="rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-amber-600 sm:px-5"
          >
            Dashboard
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {/* Summary */}
        {!loading && (
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Total Queries
              </p>

              <p className="mt-2 text-3xl font-black text-stone-900">
                {queries.length}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Pending
              </p>

              <p className="mt-2 text-3xl font-black text-stone-900">
                {
                  queries.filter(
                    (item) => item.status === "Pending"
                  ).length
                }
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                Resolved
              </p>

              <p className="mt-2 text-3xl font-black text-stone-900">
                {
                  queries.filter(
                    (item) => item.status === "Resolved"
                  ).length
                }
              </p>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="h-5 w-1/3 rounded bg-stone-200" />
                <div className="mt-3 h-4 w-2/3 rounded bg-stone-100" />
                <div className="mt-5 h-16 w-full rounded bg-stone-100" />
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && queries.length === 0 && (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
            <div className="text-5xl">💬</div>

            <h2 className="mt-4 text-xl font-black text-stone-900">
              No Customer Queries
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              Customer inquiries will appear here.
            </p>
          </div>
        )}

        {/* Desktop Table */}
        {!loading && queries.length > 0 && (
          <div className="hidden overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-225px">
                <thead className="border-b border-stone-200 bg-stone-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wider text-stone-500">
                      Customer
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wider text-stone-500">
                      Contact
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wider text-stone-500">
                      Query
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wider text-stone-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-100">
                  {queries.map((item) => (
                    <tr
                      key={item._id}
                      className="transition hover:bg-stone-50"
                    >
                      <td className="px-5 py-5 align-top">
                        <p className="font-bold text-stone-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-stone-400">
                          {new Date(
                            item.createdAt
                          ).toLocaleDateString("en-IN")}
                        </p>
                      </td>

                      <td className="px-5 py-5 align-top">
                        <p className="text-sm text-stone-700">
                          {item.email}
                        </p>

                        <p className="mt-1 text-sm text-stone-500">
                          {item.phone}
                        </p>
                      </td>

                      <td className="max-w-md px-5 py-5 align-top">
                        <p className="text-sm leading-6 text-stone-600">
                          {item.query}
                        </p>
                      </td>

                      <td className="px-5 py-5 align-top">
                        <select
                          value={item.status}
                          disabled={updatingId === item._id}
                          onChange={(e) =>
                            handleStatusChange(
                              item._id,
                              e.target.value
                            )
                          }
                          className={`rounded-xl border px-3 py-2 text-xs font-extrabold outline-none transition ${
                            item.status === "Resolved"
                              ? "border-green-200 bg-green-50 text-green-700 focus:border-green-400"
                              : "border-amber-200 bg-amber-50 text-amber-700 focus:border-amber-400"
                          } disabled:cursor-not-allowed disabled:opacity-60`}
                        >
                          <option value="Pending">
                            Pending
                          </option>

                          <option value="Resolved">
                            Resolved
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Mobile Cards */}
        {!loading && queries.length > 0 && (
          <div className="space-y-4 md:hidden">
            {queries.map((item) => (
              <article
                key={item._id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-black text-stone-900">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-xs text-stone-400">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString("en-IN")}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
                      item.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 space-y-2 border-t border-stone-100 pt-4">
                  <p className="break-all text-sm text-stone-600">
                    <span className="font-bold text-stone-800">
                      Email:
                    </span>{" "}
                    {item.email}
                  </p>

                  <p className="text-sm text-stone-600">
                    <span className="font-bold text-stone-800">
                      Phone:
                    </span>{" "}
                    {item.phone}
                  </p>
                </div>

                <div className="mt-4 rounded-xl bg-stone-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-stone-400">
                    Customer Query
                  </p>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {item.query}
                  </p>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-xs font-bold text-stone-500">
                    Update Status
                  </label>

                  <select
                    value={item.status}
                    disabled={updatingId === item._id}
                    onChange={(e) =>
                      handleStatusChange(
                        item._id,
                        e.target.value
                      )
                    }
                    className={`w-full rounded-xl border px-3 py-3 text-sm font-bold outline-none ${
                      item.status === "Resolved"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-amber-200 bg-amber-50 text-amber-700"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Resolved">
                      Resolved
                    </option>
                  </select>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminQueries;