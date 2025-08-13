import { Star } from "lucide-react";

import { RatingProductType } from "@/props";

export function RatingProduct({ totalRating }: RatingProductType) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < totalRating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-500 ml-2">({totalRating}.0)</span>
    </>
  );
}
