"use client";
import React, { useEffect, useState } from "react";

const StarsBackground = () => {
  const stars = Array.from({ length: 450 }, (_, i) => i);
  const shooting_stars = Array.from({ length: 6 }, (_, i) => i);

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
  useEffect(() => {
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
        const size = Math.random() + 1;
        const blur = Math.random();
        const duration = Math.random() * 150 + 80;
        return (
          <div
            className="rounded-full bg-blue-100 absolute stars"
            key={star}
            style={{
              top: Math.round(Math.random() * (dimensions.height || 0)),
              left: Math.round(Math.random() * (dimensions.width || 0)),
              animationDelay: `-${animationDelay}s`, // Apply the delay to each star
              width: size,
              height: size,
              filter: `blur(${blur}px)`,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}
      {shooting_stars.map((star) => {
        const animationDelay = Math.random() * 250;
        return (
          <div
            className="shooting_star"
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
