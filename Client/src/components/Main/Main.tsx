import React, { useEffect, useState } from 'react';
import { RandomColorsInterface } from '../../types';
import './Main.css';

const Main = () => {
  const [RandomColors, setRandomColors] = useState<RandomColorsInterface>({})

  useEffect(() => {
    const getRandomColors = async() => {
      const data = await fetch("http://localhost:8080/api/v1/colors/random");
      const JSONData = await data.json()
      setRandomColors(JSONData);
    }
    getRandomColors();
  }, [])
  
  console.log(RandomColors.color1)
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
        <h1>{RandomColors.color1}</h1>
    </div>
  )
}

export default Main