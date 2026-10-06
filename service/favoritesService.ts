import AsyncStorage from "@react-native-async-storage/async-storage";

import type { FoodCombinationResult } from "./foodCompatibility";

const FAVORITES_STORAGE_KEY = "@food_harmony_favorites";

export type FoodFavoriteItem = {
  id: string;
  foods: string[];
  foodCount: 2 | 3 | 4;
  result: FoodCombinationResult | null;
  savedAt: string;
};

export async function getFavorites(): Promise<FoodFavoriteItem[]> {
  try {
    const stored = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch (error) {
    console.error("Failed to load favorites:", error);

    return [];
  }
}

export async function saveFavorite(item: FoodFavoriteItem): Promise<void> {
  try {
    const existingFavorites = await getFavorites();

    const updatedFavorites = [
      item,
      ...existingFavorites.filter((favorite) => favorite.id !== item.id),
    ];

    await AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(updatedFavorites),
    );
  } catch (error) {
    console.error("Failed to save favorite:", error);
  }
}

export async function removeFavorite(id: string): Promise<void> {
  try {
    const existingFavorites = await getFavorites();

    const updatedFavorites = existingFavorites.filter(
      (favorite) => favorite.id !== id,
    );

    await AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(updatedFavorites),
    );
  } catch (error) {
    console.error("Failed to remove favorite:", error);
  }
}

export async function isFavorite(id: string): Promise<boolean> {
  const favorites = await getFavorites();

  return favorites.some((favorite) => favorite.id === id);
}

export async function clearFavorites(): Promise<void> {
  try {
    await AsyncStorage.removeItem(FAVORITES_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear favorites:", error);
  }
}
