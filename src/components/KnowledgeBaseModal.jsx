import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  X,
  Search,
  BookOpen,
  Target,
  Settings,
  Users,
  CheckCircle,
  FileText,
  Clock,
  User,
  Calendar,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const KnowledgeBaseModal = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Sample featured articles data
  const featuredArticles = [
    {
      title: "Lowboy vs. Step Deck: Specs, Costs & Jobsite Use Cases",
      author: "Casey Lee",
      created: "2025-07-23",
      readTime: "8 min",
      category: "Equipment Guides",
      description:
        "Which trailer is right for your fleet? Real-world scenarios, cost breakouts, and compliance tips.",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop&crop=center",
    },
    {
      title:
        "2025 Lowboy Buying Guide: Capacities, Deck Heights & Axle Options",
      author: "Jordan Williams",
      created: "2025-07-17",
      readTime: "9 min",
      category: "Equipment Guides",
      description:
        "Everything you need to make an informed decision—plus in-stock models and options.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Renting vs. Buying: 5-Year Cash-Flow Breakdown",
      author: "Casey Lee",
      created: "2025-07-10",
      readTime: "7 min",
      category: "Buying & Rental Advice",
      description:
        "Compare true ownership costs, benefits, and learn when it's best to rent or buy.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Preventive Maintenance Schedules: Downloadable Checklists",
      author: "Alex Martinez",
      created: "2025-07-08",
      readTime: "6 min",
      category: "Maintenance & Service",
      description:
        "Stay on the road and minimize repair costs with proven maintenance tips and printable schedules.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Oilfield Hauling Essentials: Vac, Dump & Extendables",
      author: "Jordan Williams",
      created: "2025-07-03",
      readTime: "7 min",
      category: "Industry Solutions",
      description:
        "Trailers engineered for oil & gas—compliance, features, and current inventory in stock.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const categories = [
    {
      name: "Equipment Guides",
      icon: BookOpen,
      description: "Trailer types & specifications",
      color: "primary",
      articleCount: 12,
    },
    {
      name: "Buying & Rental Advice",
      icon: Target,
      description: "Decision support & costs",
      color: "secondary",
      articleCount: 8,
    },
    {
      name: "Maintenance & Service",
      icon: Settings,
      description: "Support & expertise",
      color: "accent",
      articleCount: 15,
    },
    {
      name: "Industry Solutions",
      icon: Users,
      description: "Vertical market focus",
      color: "green",
      articleCount: 10,
    },
    {
      name: "Compliance & Permits",
      icon: CheckCircle,
      description: "Regulatory guidance",
      color: "purple",
      articleCount: 6,
    },
    {
      name: "Customer Stories",
      icon: FileText,
      description: "Social proof & case studies",
      color: "orange",
      articleCount: 4,
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary:
        "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400",
      secondary:
        "bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400",
      accent:
        "bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400",
      green:
        "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      purple:
        "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      orange:
        "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-t-2xl">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    WesternTruck.com Knowledge Center
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Expert advice for construction pros and fleet managers
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Welcome Section */}
              <div className="text-center py-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Welcome to Our Knowledge Base
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Get expert advice on construction trailers, equipment
                    rentals, maintenance, and real-world solutions—designed for
                    busy construction pros and fleet managers.
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, guides, and resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Featured Articles */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Featured Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredArticles.map((article, index) => (
                    <motion.div
                      key={article.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <User className="w-3 h-3" />
                                <span>{article.author}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime}</span>
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Explore by Topic
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-lg ${getColorClasses(
                              category.color
                            )}`}
                          >
                            <category.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {category.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {category.description}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {category.articleCount} articles
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Need Something Specific?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Don't see what you need? Contact our experts or visit a
                    product page for tailored help and inventory.
                  </p>
                  <div className="flex items-center justify-center space-x-6">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>Call Experts</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>Email Us</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors">
                      <MapPin className="w-4 h-4" />
                      <span>Visit Us</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center py-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  All materials © 2025 WesternTruck.com. For professional and
                  educational use only.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KnowledgeBaseModal;
