import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CheckCircle, AlertCircle, Target } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TechnicalHighlights = ({ data }) => {
  const { kpis } = data.technicalHighlights;

  const chartData = {
    labels: kpis.map((kpi) => kpi.name),
    datasets: [
      {
        label: "Current Performance",
        data: kpis.map((kpi) => kpi.current),
        backgroundColor: kpis.map((kpi) => {
          const percentage = (kpi.current / kpi.target) * 100;
          if (percentage >= 90) return "#10b981"; // green
          if (percentage >= 75) return "#f59e0b"; // yellow
          return "#ef4444"; // red
        }),
        borderColor: kpis.map((kpi) => {
          const percentage = (kpi.current / kpi.target) * 100;
          if (percentage >= 90) return "#059669";
          if (percentage >= 75) return "#d97706";
          return "#dc2626";
        }),
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: "Target",
        data: kpis.map((kpi) => kpi.target),
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderColor: "rgba(59, 130, 246, 0.5)",
        borderWidth: 2,
        borderDash: [5, 5],
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.x}%`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  };

  const getStatusIcon = (kpi) => {
    const percentage = (kpi.current / kpi.target) * 100;
    if (percentage >= 90) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else if (percentage >= 75) {
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    } else {
      return <Target className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusText = (kpi) => {
    const percentage = (kpi.current / kpi.target) * 100;
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Good";
    return "Needs Improvement";
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {data.technicalHighlights.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {data.technicalHighlights.description}
        </p>
      </motion.div>

      {/* KPI Cards in 2 columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="card p-4 card-hover h-full"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-2">{kpi.name}</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {kpi.current}
                      {kpi.unit}
                    </span>
                    <span className="text-gray-500">
                      / {kpi.target}
                      {kpi.unit}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(kpi)}
                    <span
                      className={`text-sm font-medium ${
                        getStatusText(kpi) === "Excellent"
                          ? "text-green-600"
                          : getStatusText(kpi) === "Good"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {getStatusText(kpi)}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(kpi.current / kpi.target) * 100}%`,
                        backgroundColor:
                          (kpi.current / kpi.target) * 100 >= 90
                            ? "#10b981"
                            : (kpi.current / kpi.target) * 100 >= 75
                            ? "#f59e0b"
                            : "#ef4444",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance Overview Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 card p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Performance Overview
        </h3>
        <div className="h-80">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </motion.div>
    </div>
  );
};

export default TechnicalHighlights;
