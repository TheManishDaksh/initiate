import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-400 via-teal-400 to-lime-300 flex items-center justify-center px-4 md:px-6 relative overflow-hidden text-gray-800">
      
      {/* Background Blur Circles */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-200 opacity-20 rounded-full blur-3xl top-[-80px] left-[-120px] animate-pulse" />
      <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-200 opacity-20 rounded-full blur-2xl bottom-[-60px] right-[-80px] animate-ping" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center space-y-4 md:space-y-6 w-full max-w-lg bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/30 shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
        >
          Start Your <span className="text-emerald-600">Bright Journey</span>
        </motion.h1>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Simple tools. Powerful results. Let’s build something amazing together.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/prompt")}
          className="px-5 py-2.5 md:px-6 md:py-3 bg-emerald-400 text-white text-base md:text-lg font-semibold rounded-full shadow-md transition duration-200 cursor-pointer"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Landing;
