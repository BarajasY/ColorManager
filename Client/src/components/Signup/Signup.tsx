import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [EmailFocus, setEmailFocus] = useState(false)
    const [PassFocus, setPassFocus] = useState(false)
    const [EmailValue, setEmailValue] = useState('')
    const [PassValue, setPassValue] = useState('')

    const HandleFocus = (Index:number) => {
        switch(Index) {
            case 1:
                EmailFocus ? setEmailFocus(false) : setEmailFocus(true); setPassFocus(false)
                break;
            case 2:
                PassFocus ? setPassFocus(false) : setPassFocus(true); setEmailFocus(false)
                break;
        }
    }

    const RegisterUser = () => {
        
    }

  return (
    <div className="signupContainer">
        <div className="signupContent">
            <h1 id="signupHeader">Sign up to <span><Link to="/home">ColorManager</Link></span></h1>
            <div className="signupForm">
                <h1 className={EmailFocus ? 'Focused' : 'NotFocused'}>Email</h1>
                <input type="text" onClick={() => HandleFocus(1)} onChange={(e) => setEmailValue(e.target.value)}/>
                <h1 className={PassFocus ? 'Focused' : 'NotFocused'}>Password</h1>
                <input type="password" onClick={() => HandleFocus(2)} onChange={(e) => setPassValue(e.target.value)}/>
                <div className="signupButtonContainer">
                    <button onClick={() => RegisterUser()}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup