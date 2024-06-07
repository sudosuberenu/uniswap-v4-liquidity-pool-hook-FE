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
          className="rounded-sm mr-2"
          variant="contained"
          style={{
            color: "black",
            backgroundColor: "#50d2c1",
            boxShadow: "none",
            fontSize: "0.75rem",
          }}
        >
          Connect wallet
        </Button>
      </div>

      <div className="bg-[#50d2c1] w-full p-2 text-black text-sm">
        {" "}
        Welcome to the Liquidity Bet Hook{" "}
      </div>

      <div className="flex gap-x-5 p-5 ">
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

      <div className="p-5 ">
        <MyPositions />
      </div>
    </main>
  );
}
