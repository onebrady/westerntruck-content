import React from "react";
import { motion } from "framer-motion";
import TechnicalHighlights from "./TechnicalHighlights";
import CriticalImprovements from "./CriticalImprovements";
import PageSpeedInsights from "./PageSpeedInsights";

const TechnicalSEO = ({ data }) => {
  return (
    <div className="space-y-12">
      {/* Technical Highlights Section */}
      <TechnicalHighlights data={data} />

      {/* Critical Improvements Section */}
      <CriticalImprovements data={data} />

      {/* PageSpeed Insights Section */}
      <PageSpeedInsights />
    </div>
  );
};

export default TechnicalSEO;
