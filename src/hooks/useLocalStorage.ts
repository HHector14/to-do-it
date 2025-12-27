import React, { useEffect, useState } from "react";
import type { LocalStorageTask } from "../types/hooks";


export function useLocalStorage<T>({
  key,
  initialValue
}: LocalStorageTask<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
  
  const [value, setValue] = useState(() => {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data)  : initialValue
    }
  )
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}