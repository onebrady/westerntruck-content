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
import { useTheme } from "../context/ThemeContext";
import {
  TrendingUp,
  Users,
  Target,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TrafficAnalytics = () => {
  const { isDark } = useTheme();

  // Actual traffic data from GA4 (Feb 1 - Jul 29, 2025)
  const trafficData = {
    acquisitionChannels: [
      {
        channel: "Organic Search",
        totalUsers: 9045,
        newUsers: 8883,
        returningUsers: 1433,
        avgEngagementTime: 87.6,
        engagedSessionsPerUser: 0.91,
        keyEvents: 285,
        eventRate: 1.71,
      },
      {
        channel: "Paid Social",
        totalUsers: 13190,
        newUsers: 12957,
        returningUsers: 349,
        avgEngagementTime: 8.0,
        engagedSessionsPerUser: 0.18,
        keyEvents: 24,
        eventRate: 0.16,
      },
      {
        channel: "Organic Social",
        totalUsers: 6685,
        newUsers: 6374,
        returningUsers: 153,
        avgEngagementTime: 12.4,
        engagedSessionsPerUser: 0.21,
        keyEvents: 29,
        eventRate: 0.31,
      },
      {
        channel: "Paid Search",
        totalUsers: 6548,
        newUsers: 6561,
        returningUsers: 898,
        avgEngagementTime: 63.2,
        engagedSessionsPerUser: 0.84,
        keyEvents: 160,
        eventRate: 1.94,
      },
      {
        channel: "Direct",
        totalUsers: 5157,
        newUsers: 4855,
        returningUsers: 676,
        avgEngagementTime: 78.7,
        engagedSessionsPerUser: 0.8,
        keyEvents: 153,
        eventRate: 1.54,
      },
      {
        channel: "Paid Shopping",
        totalUsers: 1016,
        newUsers: 1010,
        returningUsers: 143,
        avgEngagementTime: 57.8,
        engagedSessionsPerUser: 0.75,
        keyEvents: 14,
        eventRate: 0.69,
      },
      {
        channel: "Referral",
        totalUsers: 550,
        newUsers: 537,
        returningUsers: 97,
        avgEngagementTime: 91.2,
        engagedSessionsPerUser: 0.81,
        keyEvents: 34,
        eventRate: 3.27,
      },
      {
        channel: "Organic Shopping",
        totalUsers: 433,
        newUsers: 431,
        returningUsers: 35,
        avgEngagementTime: 42.1,
        engagedSessionsPerUser: 0.7,
        keyEvents: 6,
        eventRate: 0.93,
      },
    ],
    topPages: [
      {
        path: "/",
        views: 13666,
        activeUsers: 8843,
        avgEngagementTime: 13.6,
        keyEvents: 67,
        bounceRate: 51.1,
      },
      {
        path: "/lowboy-trailers",
        views: 12596,
        activeUsers: 10754,
        avgEngagementTime: 12.5,
        keyEvents: 15,
        bounceRate: 71.4,
      },
      {
        path: "/bottom-dumps",
        views: 8271,
        activeUsers: 6082,
        avgEngagementTime: 22.1,
        keyEvents: 10,
        bounceRate: 53.1,
      },
      {
        path: "/inventory",
        views: 4474,
        activeUsers: 2355,
        avgEngagementTime: 77.3,
        keyEvents: 18,
        bounceRate: 18.2,
      },
      {
        path: "/side-dumps",
        views: 2174,
        activeUsers: 1389,
        avgEngagementTime: 46.9,
        keyEvents: 8,
        bounceRate: 21.5,
      },
      {
        path: "/parts",
        views: 1417,
        activeUsers: 931,
        avgEngagementTime: 74.1,
        keyEvents: 10,
        bounceRate: 26.8,
      },
    ],
    devicePerformance: {
      mobile: {
        activeUsers: 31067,
        engagedSessions: 14051,
        engagementRate: 37.0,
        avgEngagementTime: 33.7,
        keyEvents: 448,
        eventRate: 1.44,
      },
      desktop: {
        activeUsers: 10341,
        engagedSessions: 9040,
        engagementRate: 59.4,
        avgEngagementTime: 84.7,
        keyEvents: 277,
        eventRate: 2.68,
      },
      tablet: {
        activeUsers: 1437,
        engagedSessions: 387,
        engagementRate: 24.8,
        avgEngagementTime: 21.4,
        keyEvents: 4,
        eventRate: 0.28,
      },
    },
    keyMetrics: {
      organicTraffic: 9045,
      organicConversionRate: 1.71,
      mobileEventRate: 1.44,
      desktopEventRate: 2.68,
    },
  };

  // Device performance chart data
  const deviceChartData = {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
      {
        label: "Active Users",
        data: [
          trafficData.devicePerformance.mobile.activeUsers,
          trafficData.devicePerformance.desktop.activeUsers,
          trafficData.devicePerformance.tablet.activeUsers,
        ],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(245, 158, 11, 0.8)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(245, 158, 11, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: isDark ? "#f3f4f6" : "#374151",
        },
      },
      tooltip: {
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
        titleColor: isDark ? "#f3f4f6" : "#111827",
        bodyColor: isDark ? "#d1d5db" : "#374151",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? "#374151" : "#e5e7eb",
        },
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
        },
      },
      x: {
        grid: {
          color: isDark ? "#374151" : "#e5e7eb",
        },
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
        },
      },
    },
  };

  const MetricCard = ({ title, value, icon: Icon, description, unit = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card card-hover p-6"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {typeof value === "number" && value >= 1000
            ? value.toLocaleString()
            : value}
        </span>
        {unit && (
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            {unit}
          </span>
        )}
      </div>

      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );

  const DeviceShareCard = ({ title, clicks, percentage, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card card-hover p-6"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-secondary-100 dark:bg-secondary-900 rounded-lg">
          <Target className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {clicks.toLocaleString()}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
          clicks
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Website Traffic & User KPIs
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Key metrics from GA4 showing traffic performance for WesternTruck.com
          (Feb 1 - Jul 29, 2025)
        </p>
      </motion.div>

      {/* Main Traffic Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <MetricCard
          title="Organic Traffic"
          value={trafficData.keyMetrics.organicTraffic}
          icon={TrendingUp}
          description="Total users from organic search (6 months)"
        />
        <MetricCard
          title="Organic Conversion Rate"
          value={trafficData.keyMetrics.organicConversionRate}
          icon={Target}
          unit="%"
          description="Key event rate for organic traffic"
        />
        <MetricCard
          title="Mobile Event Rate"
          value={trafficData.keyMetrics.mobileEventRate}
          icon={Users}
          unit="%"
          description="Conversion rate on mobile devices"
        />
        <MetricCard
          title="Desktop Event Rate"
          value={trafficData.keyMetrics.desktopEventRate}
          icon={ArrowDownRight}
          unit="%"
          description="Conversion rate on desktop devices"
        />
      </motion.div>

      {/* Device Performance Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Traffic & Performance by Device
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DeviceShareCard
            title="Mobile Performance"
            clicks={trafficData.devicePerformance.mobile.activeUsers}
            percentage={trafficData.devicePerformance.mobile.eventRate}
            description={`${trafficData.devicePerformance.mobile.activeUsers.toLocaleString()} users, ${
              trafficData.devicePerformance.mobile.eventRate
            }% event rate, ${
              trafficData.devicePerformance.mobile.engagementRate
            }% engagement`}
          />
          <DeviceShareCard
            title="Desktop Performance"
            clicks={trafficData.devicePerformance.desktop.activeUsers}
            percentage={trafficData.devicePerformance.desktop.eventRate}
            description={`${trafficData.devicePerformance.desktop.activeUsers.toLocaleString()} users, ${
              trafficData.devicePerformance.desktop.eventRate
            }% event rate, ${
              trafficData.devicePerformance.desktop.engagementRate
            }% engagement`}
          />
          <DeviceShareCard
            title="Tablet Performance"
            clicks={trafficData.devicePerformance.tablet.activeUsers}
            percentage={trafficData.devicePerformance.tablet.eventRate}
            description={`${trafficData.devicePerformance.tablet.activeUsers.toLocaleString()} users, ${
              trafficData.devicePerformance.tablet.eventRate
            }% event rate, ${
              trafficData.devicePerformance.tablet.engagementRate
            }% engagement`}
          />
        </div>
      </motion.div>

      {/* Device Share Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Device Performance Overview
        </h3>
        <div className="card p-6">
          <div className="h-80">
            <Bar data={deviceChartData} options={chartOptions} />
          </div>
        </div>
      </motion.div>

      {/* Top Landing Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Top Performing Pages & Key Events
        </h3>
        <div className="card p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Page Path
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Views
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Active Users
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Key Events
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                    Bounce Rate (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {trafficData.topPages.map((page, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100 font-medium">
                      {page.path}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-900 dark:text-gray-100">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-400">
                      {page.activeUsers.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-400">
                      {page.keyEvents}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-400">
                      {page.bounceRate}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Key Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              📱 Mobile-Heavy Ecosystem
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              73% of all active users (31,067) are on mobile, but with lower
              engagement (37%) and conversion rates (1.44%) compared to desktop.
            </p>
          </div>
          <div className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              🎯 Organic Search Performance
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Organic Search delivers the highest volume of key events (285)
              with 1.71% conversion rate, anchoring long-term site health.
            </p>
          </div>
          <div className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              📊 High-Traffic, Low-Conversion Pages
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              /lowboy-trailers and /bottom-dumps have high traffic but low key
              events and high bounce rates, indicating conversion optimization
              opportunities.
            </p>
          </div>
          <div className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              💻 Desktop Quality Users
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Desktop users (24% of total) show higher engagement (59.4%) and
              conversion rates (2.68%), making them high-value users to retain.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrafficAnalytics;
