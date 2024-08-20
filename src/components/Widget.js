import React from 'react';
import './Widget.css';
// import { FaCpu } from 'react-icons/fa'; // Using a CPU icon from react-icons

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__icon">
        {/* <FaCpu size={24} /> Adjust size as needed */}
      </div>
      <div className="widget__content">
        cpu
        <div className="widget__progress-bar">
          <div className="widget__progress cpu" style={{ width: '15%' }}></div>
        </div>
      </div>
      <div className="widget__content">
        ram
        <div className="widget__progress-bar">
          <div className="widget__progress ram" style={{ width: '13%' }}></div>
        </div>
      </div>
      <div className="widget__content">
        vol
        <div className="widget__progress-bar">
          <div className="widget__progress vol" style={{ width: '77%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
