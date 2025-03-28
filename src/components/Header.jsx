///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6" />
          <h1 className="text-xl font-bold">Earthquake Predictor</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:text-blue-400">Prediction</Link>
            </li>
            <li>
              <Link to="/explanations" className="hover:text-blue-400">Model Explanations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
