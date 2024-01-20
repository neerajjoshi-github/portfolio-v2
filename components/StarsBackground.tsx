"use client";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";
import React, { useEffect, useState } from "react";

const StarsBackground = () => {
  const stars = Array.from({ length: 250 }, (_, i) => i);
  const shooting_stars = Array.from({ length: 5 }, (_, i) => i);

  const [dimensions, setDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const resizeHandler = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    resizeHandler();
  }, []);
  return (
    <div className="z-[0] fixed top-0 left-0 w-screen h-screen background">
      {stars.map((star) => {
        const animationDelay = Math.random() * 150;
        return (
          <div
            className="w-px h-px rounded-full bg-white absolute stars"
            key={star}
            style={{
              top: Math.round(Math.random() * (dimensions.height || 0)),
              left: Math.round(Math.random() * (dimensions.width || 0)),
              animationDelay: `-${animationDelay}s`, // Apply the delay to each star
            }}
          ></div>
        );
      })}
      {shooting_stars.map((star) => {
        const animationDelay = Math.random() * 150;
        return (
          <div
            className="shooting_star "
            key={star}
            style={{
              top: Math.round(Math.random() * (dimensions.height || 0)),
              left: Math.round(Math.random() * (dimensions.width || 0)),
              animationDelay: `-${animationDelay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default StarsBackground;
