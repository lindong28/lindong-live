"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let animId: number;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0.15,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 3.5,
      baseColor: [0.05, 0.15, 0.22],
      markerColor: [0.17, 0.98, 0.84],
      glowColor: [0.04, 0.16, 0.26],
      markers: [],
    });

    function animate() {
      phi += 0.004;
      globe.update({ phi });
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute opacity-30"
      style={{ width: 1000, height: 1000 }}
      aria-hidden="true"
    />
  );
}
