import { motion } from "framer-motion";

export default function CurrentJackpot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <section className="w-full h-[30px] bg-black p-10">
        CurrentJackpot
      </section>
    </motion.div>
  );
}
