/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import Explanations from './pages/Explanations';

function App() {
  const [selectedModel, setSelectedModel] = useState('random_forest');
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  const handlePrediction = async (data) => {
    try {
      setError(null);
      const response = await fetch(
        `http://127.0.0.1:5000/predict?lat=${data.lat}&lon=${data.lon}&depth=${data.depth}&model=${data.model}`
      );
      
      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      setPredictionResult({
        modelUsed: result['Model Used'],
        latitude: result.Latitude,
        longitude: result.Longitude,
        depth: result.Depth,
        predictedMagnitude: result['Predicted Magnitude']
      });
    } catch (err) {
      setError(err.message);
      setPredictionResult(null);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-8 px-4">
          <Routes>
            {/* Prediction Page */}
            <Route 
              path="/" 
              element={
                <div className="flex flex-col items-center gap-6">
                  <PredictionForm
                    onSubmit={handlePrediction}
                    selectedModel={selectedModel}
                    onModelChange={setSelectedModel}
                  />
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                      {error}
                    </div>
                  )}
                  <ResultCard result={predictionResult} />
                </div>
              } 
            />

            {/* Model Explanations Page */}
            <Route path="/explanations" element={<Explanations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
