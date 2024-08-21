import React, { useState } from 'react';
import './App.css';
import BootScreen from './components/BootScreen';
import MainContent from '../src/Main/MainContent';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  return (
    <Router>
      <Routes>
        {!bootComplete ? (
          <Route path="/" element={<BootScreen onComplete={handleBootComplete} />} />
        ) : (
          <>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<MainContent />} /> {/* Default route */}
          </>
        )}
      </Routes>
    </Router>
  );
}


export default App;
