"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 37,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex items-end">
      <div className="text-5xl md:text-6xl font-bold text-black">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm text-black font-bold mt-1">{label}</div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-black drop-shadow-2xl px-8 py-6 inline-flex gap-8 z-30">
      <TimeUnit value={timeLeft.days} label="days" />
      <TimeUnit value={timeLeft.hours} label="hours" />
      <TimeUnit value={timeLeft.minutes} label="mins" />
      <TimeUnit value={timeLeft.seconds} label="secs" />
    </div>
  );
}
