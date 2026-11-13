import {useState, useEffect} from react;

export function useLocalStorage<T>(
    key: string
    innitialValue: T
    ) {
        const [value, setValue] = useState<T>(() => {
  const savedValue = localStorage.getItem(key);

  if (savedValue !== null) {
    return JSON.parse(savedValue) as T;
  }

  return initialValue;
});

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
return [value,setValue] as const;
    
}