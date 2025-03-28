import React from 'react';
import { Activity } from 'lucide-react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-blue-500" />
        <h3 className="text-xl font-bold">Prediction Result</h3>
      </div>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Model Used:</span> {result.modelUsed}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Location:</span> {result.latitude}°N, {result.longitude}°E
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Depth:</span> {result.depth} km
        </p>
        <p className="text-xl font-bold text-blue-600 mt-4">
          Predicted Magnitude: {result.predictedMagnitude.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;