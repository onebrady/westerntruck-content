import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "./data/reportData";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import TabNavigation from "./components/TabNavigation";
import TechnicalSEO from "./components/TechnicalSEO";
import TrafficAnalytics from "./components/TrafficAnalytics";
import ContentStrategy from "./components/ContentStrategy";
import Footer from "./components/Footer";
import ExportButton from "./components/ExportButton";
import { TrendingUp, BarChart3, FileText } from "lucide-react";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const [activeTab, setActiveTab] = useState("technical-seo");

  const tabs = [
    {
      id: "technical-seo",
      name: "Technical SEO",
      icon: TrendingUp,
      component: TechnicalSEO,
    },
    {
      id: "traffic-analytics",
      name: "Traffic Analytics",
      icon: BarChart3,
      component: TrafficAnalytics,
    },
    {
      id: "content-strategy",
      name: "Content Strategy",
      icon: FileText,
      component: ContentStrategy,
    },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {reportData.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {reportData.subtitle}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Report Date: {reportData.date}</span>
              <span>•</span>
              <span>WesternTruck.com</span>
            </div>
            <ExportButton />
          </div>
        </motion.div>

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {ActiveComponent && <ActiveComponent data={reportData} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;
