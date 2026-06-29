export async function getCountryImage(query) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      console.log("Pexels API error:", response.status);
      return "";
    }

    const data = await response.json();

    return (
      data.photos?.[0]?.src?.medium ||
      data.photos?.[0]?.src?.large ||
      data.photos?.[0]?.src?.landscape ||
      ""
    );
  } catch (error) {
    console.log("Pexels image error:", error);
    return "";
  }
}