import { TCategory } from "./types";

export const getCategoryColor = (category: TCategory) => {
  switch (category) {
    case "PROTEINA":
      return "bg-blue-500 text-white";
    case "CREATINA":
      return "bg-red-500 text-white";
    case "GLUTAMINA":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export const getCategoryIcon = (category: TCategory) => {
  switch (category) {
    case "PROTEINA":
      return "🥤";
    case "CREATINA":
      return "⚡";
    case "GLUTAMINA":
      return "🥤";
    default:
      return "💊";
  }
};
