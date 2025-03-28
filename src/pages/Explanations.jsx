// import React, { useState } from 'react';
// import modelData from '../data';

// const Explanations = () => {
//   const [selectedModel, setSelectedModel] = useState('random_forest');

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Model Explanations</h2>

//       <div className="flex gap-4">
//         {/* Sidebar for Model Selection */}
//         <div className="w-1/4">
//           <ul className="space-y-2">
//             {Object.keys(modelData).map((key) => (
//               <li key={key}>
//                 <button 
//                   className={`w-full p-2 text-left rounded ${selectedModel === key ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                   onClick={() => setSelectedModel(key)}
//                 >
//                   {modelData[key].name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Display Selected Model Info */}
//         <div className="w-3/4 p-4 border rounded bg-white shadow">
//           <h3 className="text-xl font-bold">{modelData[selectedModel].name}</h3>
          
//           {/* Display Multiple Images */}
//           <div className="flex gap-4 mt-4">
//             {modelData[selectedModel].images.map((image, index) => (
//               <img key={index} src={image} alt={`Image ${index + 1}`} className="w-64 h-64 object-cover" />
//             ))}
//           </div>

//           <p className="mt-4 text-gray-700">{modelData[selectedModel].description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explanations;
//////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import modelData from '../data';

const Explanations = () => {
  const [selectedModel, setSelectedModel] = useState('random_forest');

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Model Explanations</h2>

      <div className="flex gap-6">
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
        <div className="w-3/4 p-6 border rounded bg-white shadow">
          <h3 className="text-xl font-bold">{modelData[selectedModel].name}</h3>

          {/* Display Multiple Images */}
          <div className="flex flex-wrap gap-4 mt-4">
            {modelData[selectedModel].images.map((image, index) => (
              <img key={index} src={image} alt={`${modelData[selectedModel].name} Image ${index + 1}`} className="w-48 h-48 object-cover rounded shadow" />
            ))}
          </div>

          <p className="mt-4 text-gray-700">{modelData[selectedModel].description}</p>

          {/* Additional Information */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold">How it's used in this project:</h4>
            <p className="text-gray-600">{modelData[selectedModel].usage}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Pros:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {modelData[selectedModel].pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Cons:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {modelData[selectedModel].cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Best Use Case:</h4>
            <p className="text-gray-600">{modelData[selectedModel].best_use_case}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanations;
