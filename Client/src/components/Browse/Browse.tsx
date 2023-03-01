import React, { useContext, useEffect } from 'react';
import './Browse.css'
import { Context } from '../../ColorsContext';
import { Color } from '../../types';

const Browse = () => {
    const UnparsedRColors = sessionStorage.getItem("all")
    const AllColors: Color[] = JSON.parse(UnparsedRColors!);

  return (
    <div className="browseContainer">
      <div className="content">
        {AllColors.map((color) => (
          <>
          <div className="colorsContainer" key={color.id}>
              <div className="colors" style={{background: color.color1}}>
                <p /* style={{color: color.color3}} */>{color.color1}</p>
              </div>
              <div className="colors" style={{background: color.color2}}>
                <p /* style={{color: color.color1}} */>{color.color2}</p>
              </div>
              <div className="colors" style={{background: color.color3}}>
                <p /* style={{color: color.color2}} */>{color.color3}</p>
              </div>
            </div>
          </>
        ))}
        </div>
    </div>
  )
}

export default Browse