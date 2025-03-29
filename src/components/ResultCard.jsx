import React from 'react';
import { motion } from 'framer-motion';
import { Activity, MapPin, Layers, ArrowRight, AlertTriangle } from 'lucide-react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  // Determine magnitude severity for styling
  const getMagnitudeSeverity = (magnitude) => {
    if (magnitude < 4.0) return { color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-300', label: 'Minor' };
    if (magnitude < 5.0) return { color: 'text-yellow-600', bg: 'bg-yellow-100', border: 'border-yellow-300', label: 'Moderate' };
    if (magnitude < 6.0) return { color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-300', label: 'Strong' };
    return { color: 'text-red-600', bg: 'bg-red-100', border: 'border-red-300', label: 'Major' };
  };

  const severity = getMagnitudeSeverity(result.predictedMagnitude);

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full mt-6 border border-gray-100"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-2 bg-blue-100 rounded-full">
          <Activity className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Prediction Result</h3>
      </motion.div>

      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="p-3 bg-gray-50 rounded-lg flex items-center"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ArrowRight className="h-5 w-5 text-blue-500 mr-3" />
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Model</p>
            <p className="text-gray-800 font-medium">
              {result.modelUsed.replace('_', ' ').toUpperCase()}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="p-3 bg-gray-50 rounded-lg flex items-center"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <MapPin className="h-5 w-5 text-blue-500 mr-3" />
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
            <p className="text-gray-800 font-medium">
              {result.latitude}°N, {result.longitude}°E
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="p-3 bg-gray-50 rounded-lg flex items-center"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Layers className="h-5 w-5 text-blue-500 mr-3" />
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Depth</p>
            <p className="text-gray-800 font-medium">
              {result.depth} km
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={`mt-6 p-4 rounded-lg ${severity.bg} border ${severity.border} flex items-center justify-between`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className={`h-6 w-6 ${severity.color}`} />
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600">Predicted Magnitude</p>
              <p className={`text-2xl font-bold ${severity.color}`}>
                {result.predictedMagnitude.toFixed(2)}
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full ${severity.bg} ${severity.color} border ${severity.border} text-sm font-medium`}>
            {severity.label}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard;