import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import browseColor from '../../assets/browseColors.png';
import colorPicker from '../../assets/colorPicker3.png'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
        <div className="heroContent">
            <h1 onClick={() => navigate("./browse")}>Find your next <span>palette</span></h1>
        </div>
        <div className="heroContent2">
          <h1>Browse all the different combinations</h1>
          <img src={browseColor} alt="Browse Color" />
          <p>And add your own...</p>
        </div>
        <div className="heroContent3">
          <div className="heroContent3PartOne">
            <div className="firstHalf">
              <h1>Use the <span>Website</span></h1>
              <p>Try out the <span>color picker</span>.</p>
            </div>
            <div className="secondHalf">
              <img src={colorPicker} alt="Color Picker" />
            </div>
          </div>
          <div className="heroContent3PartTwo">
            <h1>Create a palette with 3 colors</h1>
            <div className="colorSquares">
              <div className="square" id='square1'></div>
              <div className="square" id='square2'></div>
              <div className="square" id='square3'></div>
            </div>
          </div>
        </div>
        <div className="heroContent4">
          <h1>Start by</h1>
          <button onClick={() => navigate("/signup")}>Creating an Account</button>
        </div>
    </div>
  )
}

export default Home