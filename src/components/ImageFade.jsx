import { useEffect, useState } from "react";
import "./ImageFade.css";

export default function ImageFade() {
  const images = [
     "/assets/images/photo2.jpeg",
        "/assets/images/photo3.jpeg",
        "/assets/images/photo4.jpeg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-wrapper ">
      <img
        key={index}
        src={images[index]}
        alt="image"
        className="fade-img rounded-lg"
      />
    </div>
  );
}
