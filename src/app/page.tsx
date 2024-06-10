"use client";

import { Button } from "@mui/material";

import CurrentJackpot from "./components/current-jackpot";
import FormPosition from "./components/form-position";
import LiquidityCandleChart from "./components/liquidity-candle-chart";
import MyPositions from "./components/my-positions";
import PoolSelection from "./components/pool-selection";
import Trades from "./components/trades";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#435D52]  text-white">
      <div className="bg-[#0f1a1f] w-full p-5 text-black text-sm text-right">
        <Button
          className="rounded-sm mr-2 text-black bg-[#50d2c1] hover:bg-[#33877c]"
          variant="contained"
        >
          Connect wallet
        </Button>
      </div>

      <div className="bg-[#50d2c1] w-full p-2 text-black text-sm flex justify-between">
        {" "}
        Welcome to the Liquidity Bet Hook{" "}
        <span className="font-bold">⚠️ Attention: Mocked FE</span>
      </div>

      <div className="flex gap-x-5 p-5 hidden md:flex">
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
        </div>
      </div>

      <div className="flex flex-col p-5 md:hidden gap-y-5">
        <div className="flex flex-col gap-y-5">
          <PoolSelection />
          <CurrentJackpot />
          <FormPosition />
          <LiquidityCandleChart />
          <Trades />
        </div>
      </div>

      <div className="p-5 ">
        <MyPositions />
      </div>
    </main>
  );
}
