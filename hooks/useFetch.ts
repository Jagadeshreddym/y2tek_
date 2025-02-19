// hooks/useFetch.ts

import { useState, useEffect } from 'react';

// Define the types for the response data and error
interface FetchState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

// Define a generic type for the useFetch hook
function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: T = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if the URL changes

  return { data, error, isLoading };
}

export default useFetch;
