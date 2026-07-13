"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditTimeline() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    year: "",
    order: 0,
  });

  useEffect(() => {
    fetchTimeline();
  }, []);

  const fetchTimeline = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/timeline/${id}`
      );
      // Assuming res.data.data contains the timeline object
      setForm({
        title: res.data.data.title || "",
        description: res.data.data.description || "",
        year: res.data.data.year || "",
        order: res.data.data.order || 0,
      });
    } catch {
      toast.error("Failed to load data");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/timeline/${id}`,
        form
      );
      if (res.data.success) {
        toast.success("Updated successfully");
        router.push("/admin/timeline/list");
      }
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link href="/admin/timeline/list">
              <button
                type="button"
                className="px-4 py-2 rounded-lg text-white font-medium transition mb-4 bg-blue-600 hover:bg-blue-700"
              >
                Back
              </button>
            </Link>
            <h2 className="text-3xl font-semibold text-gray-800">
              Edit Timeline
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Update your milestone details
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none transition"
            />
          </div>

          {/* Year – full width (icon removed) */}
          <div>
            <label className="text-sm font-medium text-gray-600">Year</label>
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none transition resize-none"
            />
          </div>

          {/* Order */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Display Order
            </label>
            <input
              type="number"
              name="order"
              value={form.order}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none transition"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              Update Timeline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}