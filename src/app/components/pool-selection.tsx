import { useState } from "react";
import { motion } from "framer-motion";

export default function PoolSelection() {
  const pools = [
    { id: 1, name: "ETH/USDC", symbol: "ETH/USDC" },
    { id: 2, name: "DAI/USDC", symbol: "DAI/USDC" },
    { id: 3, name: "WBTC/ETH", symbol: "WBTC/ETH" },
  ];

  const [selectedPool, setSelectedPool] = useState(pools[0].id);

  const handleChange = (event: { target: { value: string } }) => {
    setSelectedPool(parseInt(event.target.value, 10));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="mb-5">
        <div className="relative">
          <select
            id="pool"
            value={selectedPool}
            onChange={handleChange}
            className="block appearance-none w-full bg-black text-white border border-gray-700 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
          >
            {pools.map((pool) => (
              <option key={pool.id} value={pool.id}>
                {pool.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
