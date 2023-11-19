// AnalysisResultPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './analysisPage.css'; // Import the CSS

const AnalysisResultPage = () => {
  const location = useLocation();
  const { analysisResult } = location.state || {};

  return (
    <div className="analysis-result-container">
      <h1 className="analysis-result-header">Analysis Result</h1>
      <div className="analysis-result-content">
        <p className="analysis-result-text">
          {analysisResult || 'No analysis result available'}
        </p>
      </div>
    </div>
  );
};

export default AnalysisResultPage;

