import React, { useState } from 'react';

const PredictionForm = ({ onSubmit, selectedModel, onModelChange }) => {
  const [formData, setFormData] = useState({
    lat: '',
    lon: '',
    depth: '',
  });

  const models = [
    'random_forest',
    'knn',
    'linear',
    'naive_bayes',
    'svm',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      lat: Number(formData.lat),
      lon: Number(formData.lon),
      depth: Number(formData.depth),
      model: selectedModel,
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Earthquake Prediction</h2>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Current model: <span className="font-semibold">{selectedModel}</span></p>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedModel}
          onChange={(e) => onModelChange(e.target.value)}
        >
          {models.map((model) => (
            <option key={model} value={model}>
              {model.replace('_', ' ').toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Latitude:</label>
          <input
            type="number"
            step="0.000001"
            placeholder="Enter latitude (-90 to 90)"
            className="w-full p-2 border rounded-md"
            value={formData.lat}
            onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
            required
            min="-90"
            max="90"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Longitude:</label>
          <input
            type="number"
            step="0.000001"
            placeholder="Enter longitude (-180 to 180)"
            className="w-full p-2 border rounded-md"
            value={formData.lon}
            onChange={(e) => setFormData({ ...formData, lon: e.target.value })}
            required
            min="-180"
            max="180"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Depth (km):</label>
          <input
            type="number"
            step="0.01"
            placeholder="Enter depth (> 0)"
            className="w-full p-2 border rounded-md"
            value={formData.depth}
            onChange={(e) => setFormData({ ...formData, depth: e.target.value })}
            required
            min="0"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Predict
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;