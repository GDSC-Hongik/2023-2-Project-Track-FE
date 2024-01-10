import { useState, useSyncExternalStore } from "react";

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const wrappedFunction = async () => {
    
  }
  return [];
}

export default useAsync;
