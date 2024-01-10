import { useCallback, useState } from 'react';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  // 네트워크 리퀘스트 시 쓸 함수
  const wrappedFunction = useCallback(
    async (...args) => {
      setError(null);
      setPending(true);
      try {
        return await asyncFunction(...args); // 기존에 사용하던 API 함수
      } catch (error) {
        setError(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return [pending, error, wrappedFunction];
}

export default useAsync;
