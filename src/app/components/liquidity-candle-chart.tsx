import React from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  TimeScale,
} from "chart.js";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  CandlestickController,
  CandlestickElement
);

const Chart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Chart),
  { ssr: false }
);

const mockData = {
  datasets: [
    {
      label: "Liquidity",
      data: [
        { x: "2023-06-01", o: 100, h: 110, l: 90, c: 105 },
        { x: "2023-06-02", o: 105, h: 115, l: 100, c: 110 },
        { x: "2023-06-03", o: 110, h: 120, l: 105, c: 115 },
        { x: "2023-06-04", o: 115, h: 125, l: 110, c: 120 },
        { x: "2023-06-05", o: 120, h: 130, l: 115, c: 125 },
        { x: "2023-06-06", o: 125, h: 135, l: 120, c: 130 },
        { x: "2023-06-07", o: 130, h: 140, l: 125, c: 135 },
      ],
      type: "candlestick",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Liquidity Candle Chart",
    },
    tooltip: {
      callbacks: {
        label: function (context: { raw: any }) {
          const data = context.raw;
          return `Open: ${data.o}, High: ${data.h}, Low: ${data.l}, Close: ${data.c}`;
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
      },
      title: {
        display: true,
        text: "Date",
      },
    },
    y: {
      type: "linear",
      title: {
        display: true,
        text: "Price",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const LiquidityCandleChart = () => {
  return (
    <div className="bg-[#0e1a1e] p-10 rounded-md hover:outline hover:outline-2 hover:outline-[#50d2c1]">
      <h1 className="text-white mb-5">Liquidity Candle Chart</h1>
      {/* <Chart data={mockData} options={options} type="candlestick" /> */}
    </div>
  );
};

export default LiquidityCandleChart;
