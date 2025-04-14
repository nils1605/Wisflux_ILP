import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import axios from "axios";

const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your actual Unsplash API key

export default function UnsplashApp() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        searchPhotos(query);
      } else {
        setPhotos([]);
        setError(null);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const searchPhotos = async (term) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${term}&client_id=${ACCESS_KEY}`
      );
      if (res.data.results.length === 0) {
        setError("No photos found.");
      }
      setPhotos(res.data.results);
    } catch (err) {
      setError("Failed to fetch photos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (photo) => {
    const exists = favorites.find((fav) => fav.id === photo.id);
    let updated;
    if (exists) {
      updated = favorites.filter((fav) => fav.id !== photo.id);
    } else {
      updated = [...favorites, photo];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search Unsplash..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline" onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? "Show Search Results" : "Show Favorites"}
        </Button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p className="text-gray-500 mb-4">Loading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(showFavorites ? favorites : photos).map((photo) => (
          <div key={photo.id} className="relative group">
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="w-full h-48 object-cover rounded-xl shadow"
            />
            <button
              onClick={() => toggleFavorite(photo)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <Heart
                className={`w-5 h-5 ${isFavorite(photo.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
              />
            </button>
          </div>
        ))}
      </div>

      {!loading && !error && (showFavorites ? favorites.length === 0 : photos.length === 0) && (
        <p className="text-center mt-6 text-gray-500">No photos to display.</p>
      )}
    </div>
  );
}
