// export default function CurrentJackpot() {
//   return (
//     <section className="w-full h-[30px] bg-black p-10">CurrentJackpot</section>
//   );
// }

import React, { useEffect, useState } from "react";

export default function CurrentJackpot() {
  const initialTimeElapsed = 0.2 * 24 * 60 * 60 * 1000; // 20% de 24 horas en milisegundos
  const totalTime = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
  const jackpotValue = 100; // Valor total del jackpot en ETH (moqueado)
  const startTime = new Date(Date.now() - initialTimeElapsed);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const [timeElapsed, setTimeElapsed] = useState(initialTimeElapsed);
  const [timeRemaining, setTimeRemaining] = useState(
    totalTime - initialTimeElapsed
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => {
        const newTimeElapsed = prev + 1000;
        setTimeRemaining(totalTime - newTimeElapsed);
        return newTimeElapsed;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (timeElapsed / totalTime) * 100;

  return (
    <div className="p-5 bg-[#0e1a1e] text-white rounded-md">
      <h2 className="text-xl font-bold mb-2">Current Jackpot</h2>
      <div className="relative w-full h-6 bg-gray-700 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-green-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="mb-2">Time Elapsed: {formatTime(timeElapsed)}</div>
      <div className="mb-2">Time Remaining: {formatTime(timeRemaining)}</div>
      <div className="mb-2">Total Jackpot: {jackpotValue} ETH</div>
      <div>Started At: {startTime.toLocaleString()}</div>
    </div>
  );
}
