import AsyncStorage from "@react-native-async-storage/async-storage";

import type { FoodCombinationResult } from "./foodCompatibility";

const HISTORY_STORAGE_KEY = "@food_harmony_history";
const MAX_HISTORY_ITEMS = 50;

export type FoodHistoryItem = {
  id: string;
  foods: string[];
  foodCount: 2 | 3 | 4;
  result: FoodCombinationResult | null;
  checkedAt: string;
};

export async function getHistory(): Promise<FoodHistoryItem[]> {
  try {
    const stored = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch (error) {
    console.error("Failed to load history:", error);
    return [];
  }
}

export async function saveHistory(item: FoodHistoryItem): Promise<void> {
  try {
    const existingHistory = await getHistory();

    const updatedHistory = [
      item,
      ...existingHistory.filter((historyItem) => historyItem.id !== item.id),
    ].slice(0, MAX_HISTORY_ITEMS);

    await AsyncStorage.setItem(
      HISTORY_STORAGE_KEY,
      JSON.stringify(updatedHistory),
    );
  } catch (error) {
    console.error("Failed to save history:", error);
  }
}

export async function deleteHistoryItem(id: string): Promise<void> {
  try {
    const existingHistory = await getHistory();

    const updatedHistory = existingHistory.filter((item) => item.id !== id);

    await AsyncStorage.setItem(
      HISTORY_STORAGE_KEY,
      JSON.stringify(updatedHistory),
    );
  } catch (error) {
    console.error("Failed to delete history item:", error);
  }
}

export async function clearHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(HISTORY_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear history:", error);
  }
}
