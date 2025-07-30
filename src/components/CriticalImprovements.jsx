import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowRight, Target, Zap } from 'lucide-react';

const CriticalImprovements = ({ data }) => {
  const { improvements } = data.criticalImprovements;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
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
          {data.criticalImprovements.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {data.criticalImprovements.description}
        </p>
      </motion.div>

      <div className="space-y-6">
        {improvements.map((improvement, index) => (
          <motion.div
            key={improvement.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {improvement.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(improvement.priority)}`}>
                      {improvement.priority} Priority
                    </span>
                    <span className={`text-sm font-medium ${getImpactColor(improvement.impact)}`}>
                      {improvement.impact} Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Sample Problem</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {improvement.problem}
                </p>
              </div>

              {/* Issue */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Existing Issue</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {improvement.issue}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900">Recommended Solution</h4>
                </div>
                <div className="space-y-2">
                  {improvement.solution.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 pt-4 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Action Required
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-accent-500" />
                  <span className="text-sm font-medium text-accent-600">
                    Estimated Impact: {improvement.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card p-6 bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200"
      >
        <div className="flex items-center space-x-3 mb-4">
          <ArrowRight className="w-6 h-6 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">
            Implementation Summary
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">
              {improvements.filter(i => i.priority === 'High').length}
            </div>
            <div className="text-gray-600">High Priority Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {improvements.filter(i => i.impact === 'High').length}
            </div>
            <div className="text-gray-600">High Impact Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {improvements.length}
            </div>
            <div className="text-gray-600">Total Improvements</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CriticalImprovements; 