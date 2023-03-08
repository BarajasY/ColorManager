import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../ColorsContext';
import { LoggedIn } from '../../types';
import './AddColor.css';

const AddColor = () => {
    const {LoggedIn} = useContext(Context) as LoggedIn
    const navigate = useNavigate();

    //Redirect user in case they try to directly access '/create' url and are not logged in.
    useEffect(() => {
      if(!LoggedIn) {
        navigate('/home')
      }
    }, [])
    

  return (
    <div className="addContainer">
        <h1>Add the <span>color palette</span> you prefer to our site</h1>
        <div className="addContent">
            <div className="addInputSpace">
                
            </div>
            <div className="addInputSpace">
                
            </div>
            <div className="addInputSpace">
                
            </div>
        </div>
    </div>
  )
}

export default AddColor