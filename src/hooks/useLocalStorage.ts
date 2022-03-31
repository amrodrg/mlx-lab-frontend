import {useEffect, useState} from 'react';


function getSavedValue( key: string, initialValue: any) {

  if (typeof window !== 'undefined') {
    // 👉️ can use localStorage here
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue);
    } else {
      return initialValue;
    }
  }
}


export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
