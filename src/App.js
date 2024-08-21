import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Job from './Job';
import Marriage from './Marriage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation buttons using Link */}
        <nav className='text-center'>
          <Link to="/job">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-7"> Job Profile </button>
          </Link>
          <Link to="/marriage">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Marriage Profile </button>
          </Link>
        </nav>

        {/* Route definitions */}
        <Routes>
          <Route path="/job" element={<Job />} />
          <Route path="/marriage" element={<Marriage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
