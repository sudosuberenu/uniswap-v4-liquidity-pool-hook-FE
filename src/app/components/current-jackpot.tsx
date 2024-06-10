import React, { useState, useEffect } from "react";

const CurrentJackpot = () => {
  const jackpotValue = 50.5;
  const startTime = new Date("10/06/2024");
  const totalTime = 24 * 3600;
  const [timeElapsed, setTimeElapsed] = useState(8640);
  const [timeRemaining, setTimeRemaining] = useState(totalTime - timeElapsed);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => {
        const newTimeElapsed = prev + 1;
        setTimeRemaining(totalTime - newTimeElapsed);
        return newTimeElapsed;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const progressPercentage = (timeElapsed / totalTime) * 100;
  const finishTime = new Date(startTime.getTime() + totalTime * 1000);

  return (
    <div className="p-5 bg-[#0e1a1e] text-white rounded-md hover:outline hover:outline-2 hover:outline-[#50d2c1]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold mb-2">Current Jackpot</h2>
        <div className="ml-3 text-sm">
          Total: <span className="text-xl">{jackpotValue} ETH</span>
        </div>
      </div>

      <div className="flex flex-col mb-3">
        <div className="text-sm">Started at: {startTime.toLocaleString()}</div>
        <div className="text-sm">Finish At: {finishTime.toLocaleString()}</div>
      </div>

      <div className="flex items-center mb-2 justify-between">
        <div className="relative w-5/6 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#50d2c1]"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="ml-3 text-sm">{formatTime(timeRemaining)}</div>
      </div>
    </div>
  );
};

export default CurrentJackpot;
