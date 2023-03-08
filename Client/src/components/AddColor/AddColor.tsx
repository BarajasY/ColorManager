import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { LoggedIn, UserInterface } from '../../types';
import './AddColor.css';

const AddColor = () => {
  const [Color1, setColor1] = useState('');
  const [Color2, setColor2] = useState('')
  const [Color3, setColor3] = useState('')
    const {LoggedIn} = useContext(Context) as LoggedIn
    const {User} = useContext(Context) as UserInterface
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
    }


  return (
    <div className="addContainer">
        <h1>Add the <span>color palette</span> you prefer to our site</h1>
        <div className="addContent">
            <div className="addInputSpace" style={{background:Color1}}>
                <input type="color" onChange={(e) => setColor1(e.target.value)}/>
            </div>
            <div className="addInputSpace" style={{background:Color2}}>
                <input type="color" onChange={(e) => setColor2(e.target.value)}/>
            </div>
            <div className="addInputSpace" style={{background:Color3}}>
                <input type="color" onChange={(e) => setColor3(e.target.value)} />
            </div>
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