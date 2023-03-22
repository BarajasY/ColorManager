import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Signup.css';

const Signup = () => {
    const [CompleteSignup, setCompleteSignup] = useState(false)
    const [EmailValue, setEmailValue] = useState('')
    const [PassValue, setPassValue] = useState('')
    const [Username, setUsername] = useState('')
    const [ErrorMessage, setErrorMessage] = useState('')

    //Trying things out to give proper ui.

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
                username: Username,
                role: 'user'
            })
        })
        .then(response => {
            console.clear();
            if(response.status === 200) {
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
                    <motion.h1 
                    initial={{opacity: 0, x: -40}} 
                    animate={{opacity:1, x: 0}} 
                    id="CompletedSignupH1">Signup completed!</motion.h1>
                    <motion.p 
                    initial={{opacity: 0, x: 40}} 
                    animate={{opacity: 1, x: 0}} 
                    id="CompletedSignupP">You may now head to <Link to="/login">Login</Link></motion.p>
                </>
            :
            <>
                <motion.h1 
                initial={{opacity: 0, x:40}} 
                animate={{opacity: 1, x: 0}} 
                id="signupHeader">Sign up to <span><Link to="/home">ColorManager</Link></span></motion.h1>
                <div className="signupForm">
                    <motion.h1 
                    initial={{opacity: 0, x: -40}} 
                    animate={{opacity: 1, x: 0}} style={{color: 'var(--errorcolor)'}}>{ErrorMessage}</motion.h1>
                    <motion.h1 
                    initial={{opacity: 0, x: -40}} 
                    animate={{opacity: 1, x:-20}}>Username</motion.h1>
                    <motion.input 
                    initial={{opacity: 0, x: -40}} 
                    animate={{opacity: 1, x: 0}} 
                    type="text" onChange={(e) => setUsername(e.target.value)}/>
                    <motion.h1 
                    initial={{opacity: 0, x: 40}} 
                    animate={{opacity: 1, x: 0}}>Email</motion.h1>
                    <motion.input 
                    initial={{opacity:0, x: 40}} 
                    animate={{opacity: 1, x:0}} 
                    type="email" onChange={(e) => setEmailValue(e.target.value)}/>
                    <motion.h1 
                    initial={{opacity: 0, x: 40}} 
                    animate={{opacity: 1, x: 0}}>Password</motion.h1>
                    <motion.input 
                    initial={{opacity: 0, x: 40}} 
                    animate={{opacity: 1, x: 0}} 
                    type="password" onChange={(e) => setPassValue(e.target.value)}/>
                    <div className="signupButtonContainer">
                        <motion.button 
                        initial={{opacity: 0, x: -40}} 
                        animate={{opacity: 1, x: 0}} 
                        onClick={() => RegisterUser()}>Submit
                        </motion.button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default Signup