import React, { useState } from 'react';
import modelData from '../data';

const Explanations = () => {
  const [selectedModel, setSelectedModel] = useState('random_forest');

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Model Explanations</h2>

      <div className="flex gap-4">
        {/* Sidebar for Model Selection */}
        <div className="w-1/4">
          <ul className="space-y-2">
            {Object.keys(modelData).map((key) => (
              <li key={key}>
                <button 
                  className={`w-full p-2 text-left rounded ${selectedModel === key ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSelectedModel(key)}
                >
                  {modelData[key].name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Display Selected Model Info */}
        <div className="w-3/4 p-4 border rounded bg-white shadow">
          <h3 className="text-xl font-bold">{modelData[selectedModel].name}</h3>
          
          {/* Display Multiple Images */}
          <div className="flex gap-4 mt-4">
            {modelData[selectedModel].images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className="w-64 h-64 object-cover" />
            ))}
          </div>

          <p className="mt-4 text-gray-700">{modelData[selectedModel].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Explanations;
