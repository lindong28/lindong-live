"use client";

import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  top: number;
  left: number;
  angle: number;
  duration: number;
  delay: number;
}

let nextId = 0;

export default function ShootingStars() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    function spawn() {
      const m: Meteor = {
        id: nextId++,
        top: Math.random() * 50,
        left: Math.random() * 80 + 10,
        angle: 215 + Math.random() * 30,
        duration: 0.6 + Math.random() * 0.6,
        delay: 0,
      };
      setMeteors((prev) => [...prev.slice(-4), m]);
    }

    function schedule() {
      const wait = 1800 + Math.random() * 4000;
      return setTimeout(() => {
        spawn();
        timerId = schedule();
      }, wait);
    }

    let timerId = schedule();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {meteors.map((m) => (
        <div
          key={m.id}
          className="shooting-star"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            ["--angle" as string]: `${m.angle}deg`,
            ["--duration" as string]: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
