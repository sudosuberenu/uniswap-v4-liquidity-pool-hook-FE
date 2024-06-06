"use client";

import Image from "next/image";

import CurrentJackpot from "./components/current-jackpot";
import FormPosition from "./components/form-position";
import LiquidityCandleChart from "./components/liquidity-candle-chart";
import MyPositions from "./components/my-positions";
import PoolSelection from "./components/pool-selection";
import Trades from "./components/trades";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-5 bg-[#435D52] gap-x-5">
      <div className="w-2/4 flex flex-col gap-y-5">
        <PoolSelection />
        <CurrentJackpot />
        <LiquidityCandleChart />
      </div>
      <div className="w-1/4">
        <Trades />
      </div>
      <div className="w-1/4 flex flex-col gap-y-5">
        <FormPosition />
        <MyPositions />
      </div>
    </main>
  );
}
