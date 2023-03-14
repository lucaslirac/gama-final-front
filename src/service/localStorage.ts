import { IAuth } from "../types/index";


export function setItemLocalStorage(key: string, item: string) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemLocalStorage(key: string) {
  const item = localStorage.getItem(key)

  return item;
}

export function cleanLocalStorage() {
  localStorage.clear();
}

export function setAuthLocalStorage(user?: IAuth) {
  if (!user) return;
  setItemLocalStorage("auth", JSON.stringify(user));
}

export function getAuthLocalStorage(): IAuth | null {
  const user = getItemLocalStorage("auth")

  return user ? JSON.parse(user) : null;
}
