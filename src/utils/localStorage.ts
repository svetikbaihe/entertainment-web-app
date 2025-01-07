import type { LocalStorageKeys } from "@constants/app";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setItem(key: LocalStorageKeys, value: any) {
  const serializedValue =
    typeof value === "object" ? JSON.stringify(value) : value;
  localStorage.setItem(key, serializedValue);
}

export function getItem(key: LocalStorageKeys) {
  const value = localStorage.getItem(key);

  try {
    if (value) return JSON.parse(value);
  } catch (error) {
    console.log("Error => ", error);

    return value;
  }
}

export function removeItem(key: LocalStorageKeys) {
  localStorage.removeItem(key);
}

export function hasKey(key: LocalStorageKeys): boolean {
  return localStorage.getItem(key) !== null;
}

export function clearStorage() {
  localStorage.clear();
}
