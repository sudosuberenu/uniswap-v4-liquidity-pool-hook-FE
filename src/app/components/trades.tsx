import React from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LaunchIcon from "@mui/icons-material/Launch";

const generateMockData = () => {
  const mockData = [];

  let lastLiquidity = 3800;

  for (let i = 0; i < 50; i++) {
    const side = Math.random() > 0.5 ? "LONG" : "SHORT";
    const time = new Date();
    const formattedTime = `${time.toLocaleTimeString("en-GB", {
      hour12: false,
    })}:${time.getMilliseconds()}`;
    const txHash = `0x${"0".repeat(64 - i.toString().length)}${i}`;

    const liquidity = lastLiquidity + Math.floor(Math.random() * 101) - 50;
    lastLiquidity = liquidity;

    mockData.push({
      liquidity: liquidity.toString(),
      side,
      time: formattedTime,
      txHash,
    });
  }
  return mockData;
};

export default function Trades() {
  const tradesData = generateMockData();

  return (
    <section className="w-full bg-[#0e1a1e] py-5 rounded-md hover:outline hover:outline-2 hover:outline-[#50d2c1]">
      <h2 className="text-xl mb-4 text-center">Trades</h2>
      <div className="overflow-y-auto max-h-96 px-5">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="text-left py-2">Liquidity</th>
              <th className="text-right py-2">Side</th>
              <th className="text-right py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {tradesData.map((trade, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="py-2">{trade.liquidity}</td>
                <td
                  className={`py-2 text-right ${
                    trade.side === "LONG" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {trade.side}{" "}
                  {trade.side === "LONG" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )}
                </td>
                <td className="py-2 text-right">
                  {trade.time}{" "}
                  <LaunchIcon
                    className="ml-2"
                    sx={{ fontSize: "12px", color: "#50d2c1" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
