"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterNumberProps {
  readonly value: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly duration?: number;
  readonly label: string;
}

export function CounterNumber({
  value,
  prefix = "+",
  suffix = "",
  duration = 2,
  label,
}: CounterNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Curva suave ease-out exponencial
      const current = Math.round(value * (1 - Math.pow(2, -10 * progress)));
      setCount(current);

      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formattedCount =
    count >= 1000 ? count.toLocaleString("pt-BR") : count.toString();

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className="text-xl sm:text-2xl font-semibold text-[#00b07b]">
            {prefix}
          </span>
        )}
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white tabular-nums">
          {formattedCount}
        </span>
        {suffix && (
          <span className="text-lg font-semibold text-[#00b07b]">
            {suffix}
          </span>
        )}
      </div>
      <span className="mt-1.5 text-xs sm:text-sm font-light text-zinc-400 leading-snug">
        {label}
      </span>
    </div>
  );
}

export default CounterNumber;
