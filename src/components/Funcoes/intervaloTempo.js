import React, { useEffect, useRef, useLayoutEffect } from "react";

export function useInterval(callback, delay) {
  const tempoSalvo = useRef(callback);

  useLayoutEffect(() => {
    tempoSalvo.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}