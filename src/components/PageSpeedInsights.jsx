import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { useTheme } from "../context/ThemeContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Zap, Clock, Monitor, Phone, CheckCircle, XCircle } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PageSpeedInsights = () => {
  // Sample PageSpeed data - in a real app, this would come from the PageSpeed Insights API
  const pageSpeedData = {
    mobile: {
      performance: 85,
      accessibility: 98,
      bestPractices: 92,
      seo: 96,
      firstContentfulPaint: 1.8,
      speedIndex: 2.3,
      largestContentfulPaint: 2.5,
      timeToInteractive: 3.2,
      totalBlockingTime: 150,
      cumulativeLayoutShift: 0.02,
    },
    desktop: {
      performance: 92,
      accessibility: 98,
      bestPractices: 95,
      seo: 98,
      firstContentfulPaint: 1.2,
      speedIndex: 1.8,
      largestContentfulPaint: 1.9,
      timeToInteractive: 2.1,
      totalBlockingTime: 80,
      cumulativeLayoutShift: 0.01,
    },
  };

  const chartData = {
    labels: ["Performance", "Accessibility", "Best Practices", "SEO"],
    datasets: [
      {
        label: "Mobile",
        data: [
          pageSpeedData.mobile.performance,
          pageSpeedData.mobile.accessibility,
          pageSpeedData.mobile.bestPractices,
          pageSpeedData.mobile.seo,
        ],
        backgroundColor: "rgba(14, 165, 233, 0.7)",
        borderColor: "rgb(14, 165, 233)",
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: "Desktop",
        data: [
          pageSpeedData.desktop.performance,
          pageSpeedData.desktop.accessibility,
          pageSpeedData.desktop.bestPractices,
          pageSpeedData.desktop.seo,
        ],
        backgroundColor: "rgba(34, 197, 94, 0.7)",
        borderColor: "rgb(34, 197, 94)",
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const { isDark } = useTheme();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          color: isDark ? "#f3f4f6" : "#111827",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          },
        },
        backgroundColor: isDark
          ? "rgba(17, 24, 39, 0.8)"
          : "rgba(255, 255, 255, 0.8)",
        titleColor: isDark ? "#f3f4f6" : "#111827",
        bodyColor: isDark ? "#f3f4f6" : "#111827",
        borderColor: isDark
          ? "rgba(75, 85, 99, 0.2)"
          : "rgba(229, 231, 235, 0.2)",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: isDark ? "rgba(75, 85, 99, 0.2)" : "rgba(229, 231, 235, 0.5)",
        },
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          color: isDark ? "#f3f4f6" : "#111827",
        },
      },
    },
  };

  const MetricCard = ({ title, value, target, icon: Icon, unit = "" }) => {
    const percentage = (value / target) * 100;
    const isGood = percentage >= 90;

    return (
      <div className="card p-4 card-hover">
        <div className="flex items-start space-x-3">
          <div
            className={`p-2 rounded-lg ${
              isGood ? "bg-green-100" : "bg-yellow-100"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                isGood ? "text-green-600" : "text-yellow-600"
              }`}
            />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </h4>
            <div className="mt-1 flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {value}
                {unit}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                / {target}
                {unit}
              </span>
              {isGood ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <XCircle className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          PageSpeed Insights
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Performance metrics and core web vitals across devices
        </p>
      </motion.div>

      {/* Core Metrics Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Core Metrics Overview
        </h3>
        <div className="h-80">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </motion.div>

      {/* Mobile Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <Phone className="w-5 h-5 text-primary-600" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Mobile Performance
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <MetricCard
            title="First Contentful Paint"
            value={pageSpeedData.mobile.firstContentfulPaint}
            target={2.5}
            icon={Clock}
            unit="s"
          />
          <MetricCard
            title="Largest Contentful Paint"
            value={pageSpeedData.mobile.largestContentfulPaint}
            target={2.5}
            icon={Zap}
            unit="s"
          />
          <MetricCard
            title="Cumulative Layout Shift"
            value={pageSpeedData.mobile.cumulativeLayoutShift}
            target={0.1}
            icon={Monitor}
          />
        </div>
      </motion.div>

      {/* Desktop Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <Monitor className="w-5 h-5 text-primary-600" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Desktop Performance
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <MetricCard
            title="First Contentful Paint"
            value={pageSpeedData.desktop.firstContentfulPaint}
            target={2.5}
            icon={Clock}
            unit="s"
          />
          <MetricCard
            title="Largest Contentful Paint"
            value={pageSpeedData.desktop.largestContentfulPaint}
            target={2.5}
            icon={Zap}
            unit="s"
          />
          <MetricCard
            title="Cumulative Layout Shift"
            value={pageSpeedData.desktop.cumulativeLayoutShift}
            target={0.1}
            icon={Monitor}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PageSpeedInsights;
