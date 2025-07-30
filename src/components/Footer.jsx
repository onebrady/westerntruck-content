import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, FileText } from "lucide-react";
import { reportData } from "../data/reportData";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gray-900 dark:bg-gray-950 text-white mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WesternTruck</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              {reportData.company.tagline}
            </p>
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-300 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Report Generated: {reportData.date}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>SEO Analytics Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Technical SEO Report</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a
                href={reportData.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors block"
              >
                Visit Website
              </a>
              <a
                href={`tel:${reportData.company.phone}`}
                className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors block"
              >
                {reportData.company.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 WesternTruck. All rights reserved. | This report is
            confidential and intended for internal use only.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
