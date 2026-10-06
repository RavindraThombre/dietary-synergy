import fourFoodData from "../data/four-food-combinations.json";
import threeFoodData from "../data/three-food-combinations.json";
import twoFoodData from "../data/two-food-combinations.json";

export type FoodCombinationResult = {
  "Food 1": string;
  "Food 2": string;
  "Food 3"?: string;
  "Food 4"?: string;
  "Compatible/incompatible": string;
  "Reason for compatibility/incompatibility": string;
  "What to avoid for compatibility": string;
  Source: string;
};

const twoFoodDataset = twoFoodData as FoodCombinationResult[];
const threeFoodDataset = threeFoodData as FoodCombinationResult[];
const fourFoodDataset = fourFoodData as FoodCombinationResult[];

const normalizeFood = (value: string): string =>
  value
    .normalize()
    .replace(/\u00a0/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

const normalizeCombination = (foods: string[]): string[] =>
  foods.map(normalizeFood).sort();

const addUniqueFood = (foodMap: Map<string, string>, value: unknown): void => {
  if (typeof value !== "string") {
    return;
  }

  const food = value.trim();

  if (!food) {
    return;
  }

  const key = normalizeFood(food);

  if (!foodMap.has(key)) {
    foodMap.set(key, food);
  }
};

export function getFoodOptionsByCount(foodCount: 2 | 3 | 4): string[] {
  const dataset =
    foodCount === 2
      ? twoFoodDataset
      : foodCount === 3
        ? threeFoodDataset
        : fourFoodDataset;

  const foodMap = new Map<string, string>();

  dataset.forEach((row) => {
    addUniqueFood(foodMap, row["Food 1"]);
    addUniqueFood(foodMap, row["Food 2"]);

    if (foodCount >= 3) {
      addUniqueFood(foodMap, row["Food 3"]);
    }

    if (foodCount === 4) {
      addUniqueFood(foodMap, row["Food 4"]);
    }
  });

  return Array.from(foodMap.values()).sort((a, b) => a.localeCompare(b));
}

export function getFourFoodOptions(
  slot: 0 | 1,
  selectedFood1?: string,
): string[] {
  const foodMap = new Map<string, string>();

  // Food 1
  if (slot === 0) {
    fourFoodDataset.forEach((row) => {
      addUniqueFood(foodMap, row["Food 1"]);
    });

    return Array.from(foodMap.values()).sort((a, b) => a.localeCompare(b));
  }

  // Food 2
  if (slot === 1) {
    if (!selectedFood1?.trim()) {
      return [];
    }

    const selectedFood1Key = normalizeFood(selectedFood1);

    fourFoodDataset.forEach((row) => {
      const rowFood1 = row["Food 1"];

      if (
        typeof rowFood1 === "string" &&
        normalizeFood(rowFood1) === selectedFood1Key
      ) {
        addUniqueFood(foodMap, row["Food 2"]);
      }
    });

    return Array.from(foodMap.values()).sort((a, b) => a.localeCompare(b));
  }

  return [];
}

export function findFoodCompatibility(
  selectedFoods: string[],
): FoodCombinationResult | null {
  const foods = selectedFoods.map((food) => food.trim()).filter(Boolean);

  if (foods.length < 2 || foods.length > 4) {
    return null;
  }

  const dataset =
    foods.length === 2
      ? twoFoodDataset
      : foods.length === 3
        ? threeFoodDataset
        : fourFoodDataset;

  return findCombination(dataset, foods);
}

export function getFoodGuideOptions(): string[] {
  const foodMap = new Map<string, string>();

  const datasets = [twoFoodDataset, threeFoodDataset, fourFoodDataset];

  datasets.forEach((dataset) => {
    dataset.forEach((row) => {
      addUniqueFood(foodMap, row["Food 1"]);
      addUniqueFood(foodMap, row["Food 2"]);
      addUniqueFood(foodMap, row["Food 3"]);
      addUniqueFood(foodMap, row["Food 4"]);
    });
  });

  return Array.from(foodMap.values()).sort((a, b) => a.localeCompare(b));
}

/**
 * Find an exact combination in a dataset.
 * Food order does not matter.
 */
function findCombination(
  dataset: FoodCombinationResult[],
  selectedFoods: string[],
): FoodCombinationResult | null {
  const selectedCombination = normalizeCombination(selectedFoods);

  return (
    dataset.find((row) => {
      const rowFoods = [
        row["Food 1"],
        row["Food 2"],
        row["Food 3"],
        row["Food 4"],
      ].filter(
        (food): food is string =>
          typeof food === "string" && food.trim().length > 0,
      );

      if (rowFoods.length !== selectedCombination.length) {
        return false;
      }

      const rowCombination = normalizeCombination(rowFoods);

      return rowCombination.every(
        (food, index) => food === selectedCombination[index],
      );
    }) ?? null
  );
}
