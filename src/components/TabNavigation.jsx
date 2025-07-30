import React from "react";
import { motion } from "framer-motion";

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                                 group relative py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-200
                 ${
                   isActive
                     ? "border-primary-500 text-primary-600 dark:text-primary-400"
                     : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                 }
              `}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              />
              <span>{tab.name}</span>

              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-primary-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default TabNavigation;
