import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  variant = "fade-up", // fade-up, fade-in, scale-up, slide-left, slide-right
  duration = 800, // in ms
  delay = 0, // in ms
  threshold = 0.1,
  className = "",
  once = true,
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10";
      case "fade-in":
        return isIntersecting ? "opacity-100" : "opacity-0";
      case "scale-up":
        return isIntersecting
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95";
      case "slide-left":
        return isIntersecting
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10";
      case "slide-right":
        return isIntersecting
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10";
      default:
        return isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
