"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-06-30T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutos: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        segundos: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="inline-flex items-center rounded-3xl border border-white/10 bg-white/5 md:px-8 md:py-4 px-6 py-4 backdrop-blur-xl mt-5">
        <span className="md:text-3xl text-xl font-bold text-white">
        {String(timeLeft.dias).padStart(2, "0")}
        </span>

        <span className="mx-3 md:text-2xl text-lg text-white">:</span>

        <span className="md:text-3xl text-xl font-bold text-white">
        {String(timeLeft.horas).padStart(2, "0")}
        </span>

        <span className="mx-3 md:text-2xl text-lg text-white">:</span>

        <span className="md:text-3xl text-xl font-bold text-white">
        {String(timeLeft.minutos).padStart(2, "0")}
        </span>

        <span className="mx-3 md:text-2xl text-lg text-white">:</span>

        <span className="md:text-3xl text-xl font-bold text-white">
        {String(timeLeft.segundos).padStart(2, "0")}
        </span>
    </div>
    );
}