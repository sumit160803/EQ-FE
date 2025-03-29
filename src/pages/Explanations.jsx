import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import modelData from '../data';

const Explanations = () => {
  const [selectedModel, setSelectedModel] = useState('random_forest');

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Model Explanations
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for Model Selection */}
        <motion.div 
          className="w-full md:w-1/4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Select Model</h3>
            <ul className="space-y-3">
              {Object.keys(modelData).map((key) => (
                <motion.li key={key} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    className={`w-full p-3 text-left rounded-lg transition-all duration-200 ${
                      selectedModel === key 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => setSelectedModel(key)}
                  >
                    {modelData[key].name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Display Selected Model Info */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedModel}
            className="w-full md:w-3/4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <motion.h3 
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {modelData[selectedModel].name}
              </motion.h3>

              {/* Display Multiple Images */}
              <motion.div 
                className="flex flex-wrap gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {modelData[selectedModel].images.map((image, index) => (
                  <motion.img 
                    key={index} 
                    src={image} 
                    alt={`${modelData[selectedModel].name} Image ${index + 1}`} 
                    className="w-48 h-48 object-cover rounded-md shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </motion.div>

              <motion.p 
                className="mt-6 text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {modelData[selectedModel].description}
              </motion.p>

              {/* Additional Information with staggered animations */}
              <motion.div 
                className="mt-8 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-blue-700">How it's used in this project:</h4>
                  <p className="text-gray-600 mt-2">{modelData[selectedModel].usage}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-semibold text-green-700">Pros:</h4>
                    <ul className="mt-2 space-y-2">
                      {modelData[selectedModel].pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-200 text-green-700 mr-2 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-semibold text-red-700">Cons:</h4>
                    <ul className="mt-2 space-y-2">
                      {modelData[selectedModel].cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-700 mr-2 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold text-purple-700">Best Use Case:</h4>
                  <p className="text-gray-700 mt-2">{modelData[selectedModel].best_use_case}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Explanations;