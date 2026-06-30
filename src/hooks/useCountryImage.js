import { useEffect, useState } from "react";
import { getCountryImage } from "../api/images";

function useCountryImage(capital) {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    async function loadHeroImage() {
      if (!capital || capital === "N/A") return;

      const photo = await getCountryImage(`${capital} city skyline`);
      setHeroImage(photo);
    }

    loadHeroImage();
  }, [capital]);

  return heroImage;
}

export default useCountryImage;