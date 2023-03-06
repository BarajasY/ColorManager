import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [EmailFocus, setEmailFocus] = useState(false)
    const [PassFocus, setPassFocus] = useState(false)
    const [CompleteSignup, setCompleteSignup] = useState(false)
    const [EmailValue, setEmailValue] = useState('')
    const [PassValue, setPassValue] = useState('')
    const [ErrorMessage, setErrorMessage] = useState('')

    //Trying things out to give proper ui.
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
        // If Email and Password are NOT empty
        if(EmailValue !== "" && PassValue !== "") {
            // If Email includes an @ send data.
            if(EmailValue.includes('@')) {
                SendData();
            } else {
                // If email doesn't have an @.
                setErrorMessage("Introduce a proper email format.")
            }
        } else {
            // If email and password are empty.
            setErrorMessage("Please fill all the blank spaces.")
        }
    }

    const SendData = async () => {
        const post = await fetch("http://localhost:8080/api/v1/colors/users/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email: EmailValue,
                password: PassValue,
                role: 'user'
            })
        })
        .then(response => {
            console.clear();
            if(response.status === 202) {
                setErrorMessage('')
                setCompleteSignup(true)
            } else {
                setErrorMessage('Email has already been used.')
            }
        })
    }

  return (
    <div className="signupContainer">
        <div className="signupContent">
            {CompleteSignup 
            ?
                <>
                    <h1 id="CompletedSignupH1">Signup completed!</h1>
                    <p id="CompletedSignupP">You may now head to <Link to="/login">Login</Link></p>
                </>
            :
            <>
                <h1 id="signupHeader">Sign up to <span><Link to="/home">ColorManager</Link></span></h1>
                <div className="signupForm">
                    <h1 style={{color: 'var(--errorcolor)'}}>{ErrorMessage}</h1>
                    <h1 className={EmailFocus ? 'Focused' : 'NotFocused'}>Email</h1>
                    <input type="email" onClick={() => HandleFocus(1)} onChange={(e) => setEmailValue(e.target.value)}/>
                    <h1 className={PassFocus ? 'Focused' : 'NotFocused'}>Password</h1>
                    <input type="password" onClick={() => HandleFocus(2)} onChange={(e) => setPassValue(e.target.value)}/>
                    <div className="signupButtonContainer">
                        <button onClick={() => RegisterUser()}>Submit</button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default Signup