import React, { useState, useEffect } from "react";

const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your Unsplash API key

const App = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch photos when user types (debounced)
  useEffect(() => {
    if (!query) return;

    const timeout = setTimeout(() => {
      searchPhotos();
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const searchPhotos = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
      );
      const data = await res.json();
      if (data.results.length === 0) {
        setError("No photos found.");
      }
      setPhotos(data.results);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (photo) => {
    const exists = favorites.find((f) => f.id === photo.id);
    let updatedFavorites;
    if (exists) {
      updatedFavorites = favorites.filter((f) => f.id !== photo.id);
    } else {
      updatedFavorites = [...favorites, photo];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">📷 Unsplash Photo Search</h1>

      <input
        type="text"
        placeholder="Search for photos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="rounded shadow"
            />
            <button
              className={`absolute top-2 right-2 p-1 rounded-full ${
                isFavorite(photo.id) ? "bg-red-600 text-white" : "bg-white"
              }`}
              onClick={() => toggleFavorite(photo)}
              title={isFavorite(photo.id) ? "Remove from favorites" : "Add to favorites"}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">⭐ Favorite Photos</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((photo) => (
            <div key={photo.id} className="relative">
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="rounded shadow"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full"
                onClick={() => toggleFavorite(photo)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
