import React, { useEffect, useState } from "react";

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function useIntersection(
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionOptions
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}

export default useIntersection;
