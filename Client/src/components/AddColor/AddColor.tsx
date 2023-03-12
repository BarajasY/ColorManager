import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { getAllColors, LoggedIn, UserInterface } from '../../types';
import './AddColor.css';

const AddColor = () => {
  const {LoggedIn} = useContext(Context) as LoggedIn
  const {User} = useContext(Context) as UserInterface
  const {getAllColors} = useContext(Context) as getAllColors

  const [Color1, setColor1] = useState('#FFFFFF');
  const [Color2, setColor2] = useState('#FFFFFF')
  const [Color3, setColor3] = useState('#FFFFFF')
    const navigate = useNavigate();

    //Redirect user in case they try to directly access '/create' url and are not logged in.
    useEffect(() => {
      if(!LoggedIn) {
        navigate('/home')
      }
    }, [])
    
    const SubmitPalette = () => {
      const post = fetch("http://localhost:8080/api/v1/colors", {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({
          color1: Color1,
          color2: Color2,
          color3: Color3,
          creator: User.username
        })
      })
      getAllColors()
      navigate('/home')
      window.location.reload()
    }


  return (
    <div className="addContainer">
        <h1>Add the <span>color palette</span> you prefer to our site</h1>
        <div className="addContent">
                <input type="color" className="addInputSpace" value={Color1} onChange={(e) => setColor1(e.target.value)}/>
                <input type="color" className="addInputSpace" value={Color2} onChange={(e) => setColor2(e.target.value)}/>
                <input type="color" className="addInputSpace" value={Color3} onChange={(e) => setColor3(e.target.value)} />
        </div>
        <section>
          <div className="addPreview" style={{background: Color1}}>
            <div className="addCircle" style={{background: Color2}}></div>
            <h1 style={{color: Color3}}>ColorManager</h1>
          </div>
          <button className='addButton' onClick={() => SubmitPalette()}>Submit Palette</button>
        </section>
    </div>
  )
}

export default AddColor