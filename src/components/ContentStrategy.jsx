import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FileText,
  Target,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Settings,
  Users,
  ExternalLink,
} from "lucide-react";
import KnowledgeBaseModal from "./KnowledgeBaseModal";

const ContentStrategy = () => {
  const { isDark } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Content strategy data
  const strategyData = {
    categories: [
      {
        name: "Equipment Guides",
        purpose:
          "Educate prospects on trailer types, specifications, and selection criteria",
        businessValue:
          "Captures non-branded searches, drives traffic to product pages",
        seoTarget:
          "lowboy vs step deck, trailer specifications, dump trailer types",
        topArticles: [
          "Lowboy vs. Step-Deck Trailers: Specs, Costs & Job-Site Use Cases",
          "2025 Lowboy Trailer Buying Guide: Capacities, Deck Heights & Axle Options",
          "Side Dump, Belly Dump or End Dump? Productivity & Cycle-Time Showdown",
          "Extendable & Blade Hauler Trailers for Oversize Loads: When to Use Each",
          "Trailer Length, Axle Count & Bridge Formula Calculator (Interactive)",
        ],
      },
      {
        name: "Buying & Rental Advice",
        purpose: "Support decision-making process, address cost concerns",
        businessValue:
          "Converts middle-funnel traffic, promotes both sales and rentals",
        seoTarget:
          "trailer rental vs purchase, construction trailer costs, trailer financing",
        topArticles: [
          "Renting vs. Buying Construction Trailers: 5-Year Cash-Flow Breakdown",
          "Trailer Rental Checklist: 7 Questions to Ask Before You Sign",
          "Section 179 & Bonus Depreciation: How to Save on Trailer Purchases",
          "How Our Trailer Rental Calculator Works (And Why It Beats Spreadsheet Guessing)",
          "Trade-In or Trade-Up? Maximizing Resale Value on Used Construction Trailers",
        ],
      },
      {
        name: "Maintenance & Service",
        purpose:
          "Support existing customers, drive service revenue, establish expertise",
        businessValue:
          "Retention, parts sales, service bookings, trust building",
        seoTarget:
          "trailer maintenance, hydraulic troubleshooting, tractor protection valve",
        topArticles: [
          "Preventive Maintenance Schedules for Lowboy, Side-Dump & Tag Trailers (Downloadable)",
          "Tractor Protection Valve Failures: Diagnosis & OEM Part Numbers",
          "Hydraulic Troubleshooting for Dump Trailers: Pressure, Hoses & Cylinders",
          "Winterizing Construction Trailers: Grease, Air Lines & Brake Checks",
          "Emergency Breakdowns: How WesternTruck's Same-Day Service Works",
        ],
      },
      {
        name: "Industry Solutions",
        purpose: "Target vertical markets with specific equipment needs",
        businessValue:
          "Higher-value sales, niche market penetration, authority positioning",
        seoTarget:
          "oilfield trailers, wind energy hauling, mining equipment transport",
        topArticles: [
          "Oil & Gas Hauling: Vac, Belly Dump & Extendable Lowboy Essentials",
          "Wind Energy Projects: Blade Transport Trailers & Permit Tips",
          "Infrastructure & Roadwork: Best Trailers for Asphalt & Aggregate",
          "Mining & Quarry Operations: Heavy-Duty Side Dumps for High Abrasion Loads",
          "Agriculture: Grain, Silage & Fertilizer Trailer Solutions",
        ],
      },
      {
        name: "Compliance & Permits",
        purpose: "Address regulatory concerns, provide practical guidance",
        businessValue: "Trust building, expert positioning, high shareability",
        seoTarget:
          "DOT permits, oversize load requirements, trailer regulations",
        topArticles: [
          "Oversize & Overweight Permit 101: Five Rules Every Contractor Must Know",
          "Height, Width & Weight Limits Cheat Sheet (Printable)",
          "How to Pull a Temporary Oversize Permit in Utah in 30 Minutes",
          "Load Securement Rules: FMCSA Tie-Down Charts Explained",
          "Pilot Cars, Flags & Lights: When Are They Required?",
        ],
      },
      {
        name: "Customer Stories & Case Studies",
        purpose: "Provide social proof, demonstrate real-world applications",
        businessValue: "Trust building, lead nurturing, conversion support",
        seoTarget: "Long-tail industry searches, local business names",
        topArticles: [
          "How XYZ Excavating Cut Haul Times 20% with a New Lowboy",
          "Rental Success: ABC Paving Saves $72k on Seasonal Jobs",
          "Rapid Repair: Side-Dump Cylinder Rebuild Gets Cheyenne Crew Back in 24h",
          "Wind-Farm Hauls: 190-ft Blade Moves with Extendable Lowboy & Jeep Combo",
          "From Trade-In to Trade-Up: Customer Upgrades to 10-Axle Train",
        ],
      },
    ],
    implementation: {
      contentStandards: [
        "1,500-2,500 words for cornerstone articles",
        "Include at least one data table or interactive element",
        "Add 2-3 relevant images or diagrams",
        "Provide downloadable resources where applicable",
        "Include clear calls-to-action",
      ],
      seoOptimization: [
        "Include target keyword in H1, first paragraph, and meta description",
        "Use descriptive subheadings (H2, H3) with related keywords",
        "Add structured data markup (Article, Product, FAQ schemas)",
        "Optimize images with descriptive alt text",
        "Include internal links to relevant product/service pages",
      ],
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

  const CategoryCard = ({ category, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover p-6"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-secondary-100 dark:bg-secondary-900 rounded-lg">
          <FileText className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {category.name}
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Purpose
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {category.purpose}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Business Value
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {category.businessValue}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            SEO Target Keywords
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {category.seoTarget}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Top Articles
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {category.topArticles.map((article, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <ArrowRight className="w-3 h-3 text-primary-600 mt-1 flex-shrink-0" />
                <span>{article}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
          Content Development Strategy
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Comprehensive content architecture designed to capture high-intent
          organic traffic, support the sales funnel, and establish industry
          authority
        </p>
      </motion.div>

      {/* Content Architecture Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Content Architecture
        </h3>
        <div className="card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Equipment Guides
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Trailer types & specifications
              </p>
            </div>
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
              <Target className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Buying & Rental Advice
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Decision support & costs
              </p>
            </div>
            <div className="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
              <Settings className="w-8 h-8 text-accent-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Maintenance & Service
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Support & expertise
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Industry Solutions
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vertical market focus
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Compliance & Permits
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Regulatory guidance
              </p>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Customer Stories
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Social proof & case studies
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Category Definitions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Category Definitions & Business Impact
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {strategyData.categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Implementation Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Implementation Guidelines
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Content Standards
            </h4>
            <ul className="space-y-2">
              {strategyData.implementation.contentStandards.map(
                (standard, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {standard}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              SEO Optimization
            </h4>
            <ul className="space-y-2">
              {strategyData.implementation.seoOptimization.map(
                (optimization, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {optimization}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Knowledge Base Preview Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            See the Knowledge Base in Action
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get a visual preview of how the content strategy would look on the
            actual website.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Knowledge Base Preview</span>
          </button>
        </div>
      </motion.div>

      {/* Knowledge Base Modal */}
      <KnowledgeBaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ContentStrategy;
