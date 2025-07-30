import React from "react";
import { motion } from "framer-motion";
import { Phone, Globe } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { reportData } from "../data/reportData";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="gradient-bg text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">WesternTruck</h1>
              <p className="text-sm opacity-90">{reportData.company.tagline}</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">
                {reportData.company.phone}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <a
                href={reportData.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
              >
                westerntruck.com
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
