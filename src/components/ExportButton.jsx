import React from "react";
import { motion } from "framer-motion";
import { Download, Share2, Printer } from "lucide-react";

const ExportButton = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "WesternTruck SEO Report",
          text: "Technical SEO Performance Report for WesternTruck.com",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex items-center space-x-3"
    >
      <button
        onClick={handlePrint}
        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
      >
        <Printer className="w-4 h-4" />
        <span>Print Report</span>
      </button>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>
    </motion.div>
  );
};

export default ExportButton;
