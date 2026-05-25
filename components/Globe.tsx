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
      dark: 0.8,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [0.12, 0.3, 0.45],
      markerColor: [0.17, 0.98, 0.84],
      glowColor: [0.1, 0.35, 0.55],
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
      width={1200}
      height={1200}
      className="pointer-events-none"
      style={{ width: 1000, height: 1000, opacity: 0.2 }}
      aria-hidden="true"
    />
  );
}
