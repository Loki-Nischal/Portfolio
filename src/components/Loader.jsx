import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full"
      />
    </div>
  );
}

export default Loader;