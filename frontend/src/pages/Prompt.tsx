import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Prompt() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/builder", { state: { prompt } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-sky-100 to-lime-100 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 space-y-6 border border-white/40"
      >
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
            What do you want to build?
          </h1>
          <p className="text-teal-700 text-base md:text-lg tracking-wide font-medium">
            Prompt, run, edit, and deploy a full-stack web app instantly.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <textarea
              value={prompt}
              rows={8}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: A blog site with login, markdown editor, and dark mode"
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none text-gray-800 text-base placeholder:text-gray-400"
            />
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold rounded-full shadow-lg transition cursor-pointer"
            >
              🚀 Create App
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Prompt;
