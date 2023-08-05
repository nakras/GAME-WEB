import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

type TypedOptions = {
  typeSpeed: number;
  backSpeed: number;
  backDelay: number;
  loop: boolean;
  // Add other Typed.js options as needed
};

const useTypingAnimation = (
  targetSelector: string,
  strings: string[],
  options: TypedOptions
) => {
  const targetRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const typed = new Typed(targetRef.current, {
      strings,
      ...options,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, options]);

  return targetRef;
};

export default useTypingAnimation;