import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Layers, ChevronDown } from 'lucide-react';

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
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 text-gray-800 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="bg-blue-500 h-8 w-2 rounded-full mr-3"></span>
        Earthquake Prediction
      </motion.h2>

      <motion.div 
        className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-700">Current model: 
          <span className="font-semibold text-blue-700 ml-2">
            {selectedModel.replace('_', ' ')}
          </span>
        </p>
        <div className="relative mt-2">
          <select
            className="w-full p-3 pr-10 border rounded-lg appearance-none bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
            value={selectedModel}
            onChange={(e) => onModelChange(e.target.value)}
          >
            {models.map((model) => (
              <option key={model} value={model}>
                {model.replace('_', ' ').toUpperCase()}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <motion.div 
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-gray-700 mb-2 font-medium flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-blue-500" />
              Latitude:
            </label>
            <input
              type="number"
              step="0.000001"
              placeholder="Enter latitude (-90 to 90)"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
              value={formData.lat}
              onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
              required
              min="-90"
              max="90"
            />
          </motion.div>

          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 mb-2 font-medium flex items-center">
              <Compass className="h-4 w-4 mr-2 text-blue-500" />
              Longitude:
            </label>
            <input
              type="number"
              step="0.000001"
              placeholder="Enter longitude (-180 to 180)"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
              value={formData.lon}
              onChange={(e) => setFormData({ ...formData, lon: e.target.value })}
              required
              min="-180"
              max="180"
            />
          </motion.div>

          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-700 mb-2 font-medium flex items-center">
              <Layers className="h-4 w-4 mr-2 text-blue-500" />
              Depth (km):
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter depth (> 0)"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
              value={formData.depth}
              onChange={(e) => setFormData({ ...formData, depth: e.target.value })}
              required
              min="0"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Predict
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default PredictionForm;