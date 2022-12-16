export default function useLocalStorage() {
  const localStorage = window.localStorage;

  const setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const removeItem = (key: string): void => {
    localStorage.removeItem(key);
  };
  const clear = (): void => {
    localStorage.clear();
  };
  const getItem = (key: string): any => {
    const item = localStorage.getItem(key) as string;
    return JSON.parse(item);
  };
  const hasItem = (key: string): boolean => {
    return !!localStorage.getItem(key);
  };
  return {
    setItem,
    removeItem,
    clear,
    getItem,
    hasItem,
  };
}
