// RoundedHexImage.jsx
import React from "react";

/**
 * Props:
 * - src: image URL
 * - size: px (number or string like "200px")
 * - stroke: border color
 * - strokeWidth: number
 */
export default function RoundedHexImage({
  src,
  size = 100,
  stroke = "#47110d",
  strokeWidth = 4,
  alt = "hex image",
}) {
  const s = typeof size === "number" ? `${size}px` : size;
  // The viewBox will be 0 0 100 100 and we'll scale; r controls corner rounding
  const r = 8; // corner radius amount (higher -> rounder)
  const path = `
    M50 2
    L90 25
    A${r} ${r} 0 0 1 92 30
    L92 70
    A${r} ${r} 0 0 1 90 75
    L50 98
    L10 75
    A${r} ${r} 0 0 1 8 70
    L8 30
    A${r} ${r} 0 0 1 10 25
    Z
  `;

  return (
   <div className="min-w-26 sm:w-[200px] h-20 sm:h-[150px] bg-gray-200 p-4 rounded-2xl
                [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] 
                flex items-center justify-center">
  
  <img 
    src={src}
    alt="" 
    className="w-full h-full justify-self-center rounded-xl"
  />
</div>

  );
}
