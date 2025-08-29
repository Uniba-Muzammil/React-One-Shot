import { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [form, setForm] = useState({ name: "", role: "", feedback: "", rating: 5 });
  const [isAdmin, setIsAdmin] = useState(false); // Track admin status

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.feedback) return;

    const newReviews = [...reviews, form];
    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    setForm({ name: "", role: "", feedback: "", rating: 5 });
  };

  // Delete a review (admin only)
  const handleDelete = (index) => {
    if (!isAdmin) return;
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  // Sync reviews across tabs
  useEffect(() => {
    const syncReviews = (e) => {
      if (e.key === "reviews") {
        setReviews(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener("storage", syncReviews);
    return () => window.removeEventListener("storage", syncReviews);
  }, []);

  // Check admin status on mount and when localStorage changes
  useEffect(() => {
    const checkAdmin = () => setIsAdmin(localStorage.getItem("adminKey") === "mySecret123");
    checkAdmin();

    const handleStorage = (e) => {
      if (e.key === "adminKey") checkAdmin();
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-purple-100 via-indigo-100 to-blue-100 py-20 px-4 sm:px-8 lg:px-16 min-h-screen"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-12 transition-all duration-300 hover:scale-105 mt-0">
          Reviews
        </h2>

        {/* Review Form */}
        <div className="bg-white/90 rounded-3xl border-2 border-blue-100 shadow-xl p-8 mb-12 hover:shadow-blue-300 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200 max-w-2xl mx-auto overflow-visible">
          <h3 className="text-xl font-bold text-gray-600 mb-6 text-left">Drop Your Review here</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Your Role (e.g., Student, Developer)"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="feedback"
              placeholder="Write your feedback..."
              value={form.feedback}
              onChange={handleChange}
              className="w-full p-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              required
            />
        <div className="flex items-center gap-2 overflow-visible pb-2 relative">
  <label className="text-blue-900 font-semibold">Rating:</label>
  <div className="relative">
    <select
      name="rating"
      value={form.rating}
      onChange={handleChange}
      className="p-2 pl-4 pr-8 border-2 border-blue-200 rounded-xl 
                 bg-white text-gray-700 font-medium shadow-sm cursor-pointer
                 hover:border-blue-400 hover:shadow-md
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500
                 transition-all duration-300 ease-in-out
                 appearance-none"
    >
      {[5, 4, 3, 2, 1].map((star) => (
        <option key={star} value={star}>
          {star} ★
        </option>
      ))}
    </select>
    {/* Custom arrow */}
    <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      ▼
    </span>
  </div>
</div>
 <button
  type="submit"
  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold 
             px-6 py-3 rounded-2xl shadow-lg 
             hover:from-blue-500 hover:to-indigo-600 hover:text-white 
             hover:scale-105 active:scale-95 
             focus:ring-4 focus:ring-blue-300 
             transition-all duration-500 ease-in-out"
>
  Submit Review
</button>



          </form>
        </div>

        {/* Reviews List */}
        {reviews.length === 0 ? (
          <p className="text-gray-600 italic">No reviews yet. Be the first to share your thoughts!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-3xl border-2 border-blue-100 shadow-xl p-8 text-left hover:shadow-blue-300 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200 relative"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{review.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{review.role}</p>
                <p className="text-gray-800 mb-4 italic">“{review.feedback}”</p>
                <div className="flex mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Delete button only for admin */}
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-3 right-3 text-red-500 font-bold"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
