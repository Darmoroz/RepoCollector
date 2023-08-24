import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay: number = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handlerId = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handlerId);
  }, [value, delay]);

  return debounced;
}
