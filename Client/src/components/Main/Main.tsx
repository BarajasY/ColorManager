import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="mainContainer">
        <div className="firstColumn">
            <h1>Color Manager</h1>
            <p>Browse our pallettes designed to bring you the best styles there are.</p>
        </div>
        <div className="secondColumn">
            <button>Start</button>
        </div>
        <div className="mainShade"></div>
    </div>
  )
}

export default Main